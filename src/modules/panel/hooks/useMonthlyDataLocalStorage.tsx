import { useEffect, useState } from "react";
import { initialMonthProgress } from "@/modules/panel/data/initial-month-progress";
import type { Category, MonthProgress, Task } from "@/modules/panel/types";
import { LocalStorageFunctions } from "@/modules/panel/utils";

type UseMonthlyDataLocalStorageProps = { categories: Record<string, Category> };
type ObjectCategories = Record<string, Category>;

const getMonthProgressFromLocalStorage = () => {
	return LocalStorageFunctions.getItem("monthProgress") || initialMonthProgress;
};

const setMonthProgressInLocalStorage = (monthProgress: MonthProgress[]) => {
	LocalStorageFunctions.setItem("monthProgress", monthProgress);
};

const getDate = (date: string) => new Date(date);

const setPercentageValues = (value: number, total: number) => {
	return Math.round((value / total) * 100) || 0;
};

const setActualMonth = (date: string) => {
	return getDate(date).getMonth() + 1;
};

const getCompletedTasks = (tasks: Task[], month: number) => {
	return tasks.reduce(
		(acc, t) => {
			if (t?.status === "completed" && setActualMonth(t?.deadline) === month) {
				acc.completedTasks++;
			}

			if (setActualMonth(t?.deadline) === month) {
				acc.totalTasks++;
			}

			return acc;
		},
		{ completedTasks: 0, totalTasks: 0 },
	);
};

const calculateMonthlyProgress = (
	monthDate: string,
	categories: ObjectCategories,
) => {
	const allTasks = Object.values(categories)?.flatMap((cat) => cat?.tasks);

	const month = setActualMonth(monthDate);

	const { completedTasks, totalTasks } = getCompletedTasks(allTasks, month);

	return {
		progress: setPercentageValues(completedTasks, totalTasks),
	};
};

const calculateOverallProgress = (categories: ObjectCategories) => {
	const allTasks = Object.values(categories)?.flatMap((cat) => cat?.tasks);
	const completed = allTasks?.filter((t) => t?.status === "completed").length;
	return setPercentageValues(completed, allTasks?.length);
};

export const useMonthlyDataLocalStorage = ({
	categories,
}: UseMonthlyDataLocalStorageProps) => {
	const [monthProgress, setMonthProgress] = useState<{
		monthProgress: MonthProgress[];
		monthProgressOverall: number;
	}>({
		monthProgress: getMonthProgressFromLocalStorage(),
		monthProgressOverall: 0,
	});
	//maneira simples de comparar objetos em javascript
	const categoriesInJson = JSON.stringify(categories);

	const updateMonthProgressObservation = (
		month: string,
		field: "progress" | "notes",
		value: number | string,
	) => {
		const newMonthProgress = monthProgress.monthProgress.map((m) =>
			m.month === month ? { ...m, [field]: value } : m,
		);
		setMonthProgress((prev) => ({
			...prev,
			monthProgress: newMonthProgress,
		}));
		setMonthProgressInLocalStorage(newMonthProgress);
	};

	const updateMonthProgress = () => {
		const newMonthProgress = monthProgress.monthProgress.map((m) => {
			return {
				...m,
				progress: calculateMonthlyProgress(m.date, categories).progress,
			};
		});
		const overallProgress = calculateOverallProgress(categories);

		setMonthProgress((prev) => ({
			...prev,
			monthProgress: newMonthProgress,
			monthProgressOverall: overallProgress,
		}));
		setMonthProgressInLocalStorage(newMonthProgress);
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		updateMonthProgress();
	}, [categoriesInJson]);

	return {
		updateMonthProgressObservation,
		monthProgress: monthProgress.monthProgress,
		monthProgressOverall: monthProgress.monthProgressOverall,
	};
};
