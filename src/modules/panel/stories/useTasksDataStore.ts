import { create } from "zustand";
import { initialCategories } from "@/modules/panel/data/initial-categories";
import type { CategoriesNames, Category, Task } from "@/modules/panel/types";
import { LocalStorageFunctions } from "@/modules/panel/utils";
import { useShallow } from "zustand/shallow";

type TasksDataStoreState = Record<CategoriesNames, Category>;

type TasksDataStoreActions = {
	updateTasks: (category: CategoriesNames, tasks: Task[]) => void;
};

const initialState: TasksDataStoreState = [
	"commitment",
	"delivery",
	"ownership",
	"impact",
	"quality",
	"communication",
].reduce((acc, category) => {
	acc[category as CategoriesNames] = {
		...initialCategories[category],
		tasks:
			LocalStorageFunctions.getItem(category) ||
			initialCategories[category]?.tasks,
	};
	return acc;
}, {} as TasksDataStoreState);
// Create your store, which includes both state and (optionally) actions
export const useTasksDataStore = create<
	TasksDataStoreState & TasksDataStoreActions
>((set) => ({
	...initialState,
	updateTasks: (category: CategoriesNames, tasks: Task[]) => {
		set((state) => ({
			[category]: { ...state[category], tasks },
		}));
		LocalStorageFunctions.setItem(category, tasks);
	},
}));

export const useTasksData = () => {
	return useTasksDataStore(useShallow((state) => ({...state})));
};
