import { AlertCircle, CheckCircle, Circle } from "lucide-react";
import type { Priority, Status, Task } from "@/modules/panel/types";

type useFormChangeProps = {
	tasks: Task[];
	onChange: (tasks: Task[]) => void;
};

const statuses: Status[] = [
	"not_started",
	"in_progress",
	"completed",
	"review",
];

const classes = {
	high: "badge badge-high",
	medium: "badge badge-medium",
	low: "badge badge-low",
};

const labels = { high: "Alta", medium: "Média", low: "Baixa" };

export const useFormChange = ({ tasks, onChange }: useFormChangeProps) => {
console.log("🚀 ~ useFormChange ~ tasks:", tasks)

	const handleChange = (
		taskId: string,
		task: {
			status?: Status;
			evidence?: string;
			feedback?: string;
		},
	) => {
		const newFormData = tasks.map((taskData) =>
			taskData.id === taskId ? { ...taskData, ...task } : taskData,
		);
		onChange(newFormData);
	};

	const handleChangeEvidence = (taskId: string, evidence: string) => {
		handleChange(taskId, { evidence });
	};

	const handleChangeFeedback = (taskId: string, feedback: string) => {
		handleChange(taskId, { feedback });
	};

	const handleChangeStatus = (taskId: string, status: Status) => {
		const currentIndex = statuses.indexOf(status);
		const nextStatus = statuses[(currentIndex + 1) % statuses.length];

		handleChange(taskId, { status: nextStatus });
	};

	const getPriorityBadge = (priority: Priority) => {
		return <span className={classes[priority]}>{labels[priority]}</span>;
	};

	const getStatusIcon = (status: Status) => {
		const statusObject: Record<Status, React.ReactNode> = {
			not_started: <Circle className="w-5 h-5 text-gray-400" />,
			completed: <CheckCircle className="w-5 h-5 text-success" />,
			in_progress: <AlertCircle className="w-5 h-5 text-warning" />,
			review: <AlertCircle className="w-5 h-5 text-info" />,
		};
		return (
			statusObject?.[status] || <Circle className="w-5 h-5 text-gray-400" />
		);
	};

	return {
		formData: tasks,
		handleChangeEvidence,
		handleChangeFeedback,
		handleChangeStatus,
		getPriorityBadge,
		getStatusIcon,
	};
};
