import debounce from "lodash.debounce";
import { Calendar } from "lucide-react";
import { useFormChange } from "@/modules/panel/hooks";
import type { Category, Task } from "@/modules/panel/types";

type PanelFormProps = {
	category: Category;
	onChange: (tasks: Task[]) => void;
};

type FormHeaderProps = {
	color: string;
	icon: React.ElementType;
	name: string;
};

const FormHeader = ({ color, icon, name }: FormHeaderProps) => {
	const Icon = icon;
	return (
		<div className="p-6 border-b border-gray-200">
			<div className="flex items-center gap-3">
				<div
					className={`${color} w-12 h-12 rounded-lg flex items-center justify-center text-white`}
				>
					<Icon className="w-5 h-5" />
				</div>
				<h2 className="text-2xl font-bold text-gray-900">{name}</h2>
			</div>
		</div>
	);
};

export const PanelForm = (props: PanelFormProps) => {
	const {
		formData,
		handleChangeEvidence,
		handleChangeFeedback,
		handleChangeStatus,
		getPriorityBadge,
		getStatusIcon,
	} = useFormChange({
		tasks: props.category?.tasks,
		onChange: props.onChange,
	});

	const inputClass =
		"w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-(--color-primary-dark) focus:border-transparent";
	console.log("props.category", props.category);
	return (
		<form className="bg-primary rounded-lg shadow-sm border border-gray-200 mb-8">
			<FormHeader
				color={props.category?.color}
				icon={props.category?.icon}
				name={props.category?.name}
			/>
			<div className="p-6 space-y-6">
				{formData?.map((task) => (
					<div
						key={task.id}
						className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow"
					>
						<div className="flex items-start gap-4">
							<button
								name="status"
								type="button"
								onClick={() => {
									handleChangeStatus(task.id, task.status);
								}}
								className="cursor-pointer mt-1 hover:scale-110 transition-transform"
							>
								{getStatusIcon(task.status)}
							</button>

							<div className="flex-1">
								<div className="flex items-start justify-between gap-4 mb-3">
									<p className="text-gray-900 font-medium flex-1">
										{task.action}
									</p>
									<div className="flex items-center gap-2">
										{getPriorityBadge(task.priority)}
										<div className="flex items-center text-sm text-gray-600">
											<Calendar className="w-4 h-4 mr-1" />
											{task.deadline}
										</div>
									</div>
								</div>

								<div className="grid md:grid-cols-2 gap-4">
									<div>
										<label className="block text-xs font-medium text-(--color-text-gray-700) mb-1">
											Evidências / Resultados
											<textarea
												name="evidence"
												placeholder="Descreva evidências ou resultados..."
												className={inputClass}
												rows={2}
												defaultValue={task.evidence}
												onChange={debounce((e) => {
													handleChangeEvidence(task.id, e.target.value);
												}, 500)}
											/>
										</label>
									</div>
									<div>
										<label className="block text-xs font-medium text-(--color-text-gray-700) mb-1">
											Feedback da Liderança
											<textarea
												name="feedback"
												placeholder="Feedback recebido..."
												className={inputClass}
												rows={2}
												defaultValue={task.feedback}
												onChange={debounce((e) => {
													handleChangeFeedback(task.id, e.target.value);
												}, 500)}
											/>
										</label>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</form>
	);
};
