import debounce from "lodash.debounce";
import { FileText } from "lucide-react";
import type { MonthProgress } from "@/modules/panel/types";

type PanelMonthlyProgressFormProps = {
	monthProgressData: MonthProgress[];
	onUpdateMonthProgress: (
		month: string,
		field: "progress" | "notes",
		value: number | string,
	) => void;
};

export const PanelMonthlyProgressForm = ({
	monthProgressData,
	onUpdateMonthProgress,
}: PanelMonthlyProgressFormProps) => {
	const inputClass =
		"w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-(--color-primary-dark) focus:border-transparent";
	return (
		<div className="bg-primary rounded-lg shadow-sm border border-(--color-bg-gray-200)">
			<div className="p-6 border-b border-(--color-bg-gray-200)">
				<h2 className="text-2xl text-(--color-text-primary) flex items-center gap-2">
					<FileText className="w-6 h-6" />
					Resumo de Evolução Mensal
				</h2>
			</div>

			<div className="p-6 space-y-6">
				{monthProgressData.map((month) => (
					<div
						key={month.month}
						className="border border-(--color-bg-gray-200) rounded-lg p-5"
					>
						<div className="flex items-center justify-between mb-4">
							<div>
								<h3 className="text-lg font-bold text-(--color-text-gray-900)">
									{month.month}
								</h3>
								<p className="text-sm text-(--color-text-gray-600)">
									{month.focus}
								</p>
							</div>
							<div className="text-right">
								<input
									type="number"
									min="0"
									max="100"
									readOnly
									value={month.progress}
									className="w-20 px-3 py-2 border border-(--color-bg-gray-200) rounded-md text-right font-bold text-(--color-primary-dark)"
								/>
								<span className="text-sm text-(--color-text-gray-600) ml-1">
									%
								</span>
							</div>
						</div>

						<div className="w-full bg-(--color-bg-gray-200) rounded-full h-2 mb-4">
							<div
								className="bg-(--color-primary-dark) h-2 rounded-full transition-all duration-500"
								style={{ width: `${month.progress}%` }}
							/>
						</div>

						<textarea
							defaultValue={month.notes}
							onChange={debounce((e) => {
								onUpdateMonthProgress(month.month, "notes", e.target.value);
							}, 500)}
							placeholder="Aprendizados / Reflexões..."
							className={inputClass}
							rows={3}
						/>
					</div>
				))}
			</div>
		</div>
	);
};
