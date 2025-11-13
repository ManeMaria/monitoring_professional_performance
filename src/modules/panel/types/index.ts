// Types
export type Status = "not_started" | "in_progress" | "completed" | "review";
export type Priority = "high" | "medium" | "low";

export type Task = {
	id: string;
	action: string;
	priority: Priority;
	deadline: string;
	status: Status;
	evidence: string;
	feedback: string;
};

export type Category = {
	id: string;
	name: string;
	icon: React.ElementType;
	color: string;
	tasks: Task[];
};

export type MonthProgress = {
	month: string;
	focus: string;
	progress: number;
	notes: string;
	date: string;
};

export type CategoriesNames =
	| "commitment"
	| "delivery"
	| "ownership"
	| "impact"
	| "quality"
	| "communication";
