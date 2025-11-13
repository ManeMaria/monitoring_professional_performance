import { useEffect, useState } from "react";
import { initialMonthProgress } from "@/modules/panel/data/initial-month-progress";
import type { Category, MonthProgress, Task } from "@/modules/panel/types";
import { LocalStorageFunctions } from "@/modules/panel/utils";

type UseMonthlyDataLocalStorageProps = { categories: Record<string, Category> };

const getMonthProgressFromLocalStorage = () => {
	return LocalStorageFunctions.getItem("monthProgress") || initialMonthProgress;
};

const setMonthProgressInLocalStorage = (monthProgress: MonthProgress[]) => {
	LocalStorageFunctions.setItem("monthProgress", monthProgress);
};

const getCompletedTasks = (tasks: Task[], month: number) => {
	return tasks.reduce(
		(acc, t) => {
			if (getDate(t?.deadline)?.getMonth() + 1 === month) {
				acc.completedTasks++;
			}
			return acc;
		},
		{ completedTasks: 0, totalTasks: 0 },
	);
};

//TODO: criar hook para formatar data
//TODO: criar um hook para separar essa lógica de cálculo de progresso mensal
//TODO atualizar em tempo real o progresso mensal
const getDate = (date: string) => new Date(date);

export const useMonthlyDataLocalStorage = ({
	categories,
}: UseMonthlyDataLocalStorageProps) => {
	const [monthProgress, setMonthProgress] = useState<MonthProgress[]>(
		getMonthProgressFromLocalStorage(),
	);

	//TODO: esse att com o hook useEffect para atualizar o progresso baseado nos efeito das tasks
	const calculateMonthlyProgress = (monthDate: string) => {
		const allTasks = Object.values(categories)?.flatMap((cat) => cat?.tasks);

		const month = getDate(monthDate).getMonth() + 1;

		const { completedTasks, totalTasks } = getCompletedTasks(allTasks, month);

		return {
			progress: Math.round((completedTasks / totalTasks) * 100) || 0,
		};
	};

	const updateMonthProgressObservation = (
		month: string,
		field: "progress" | "notes",
		value: number | string,
	) => {
		// setMonthProgress((prev: MonthProgress[]) =>
		// 	prev.map((m) => (m.month === month ? { ...m, [field]: value } : m)),
		// );
	};

	const updateMonthProgress = () => {
		const newMonthProgress = monthProgress.map((m) => {
			return {
				...m,
				progress: calculateMonthlyProgress(m.date).progress,
			};
		});

		// setMonthProgress(newMonthProgress);
	};

	useEffect(() => {
		setMonthProgressInLocalStorage(monthProgress);
	}, [monthProgress]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		updateMonthProgress();
	}, []);

	return {
		updateMonthProgressObservation,
		monthProgress,
	};
};
