import { Outlet } from "@tanstack/react-router";
import {
	PanelCategoryNavigation,
	PanelHeader,
	PanelLegend,
} from "@/modules/panel/components";
import { initialCategories } from "@/modules/panel/data/initial-categories";
import { useDataLocalStorage } from "@/modules/panel/hooks";

//TODO: criar hooks para persistência de dados com zustand
export const PanelPage = () => {
	const { commitment, delivery, ownership, impact, quality, communication } =
		useDataLocalStorage();

	//TODO: criar store zustand para calcular o progresso geral
	const calculateOverallProgress = () => {
		const allTasks = [
			commitment,
			delivery,
			ownership,
			impact,
			quality,
			communication,
		]?.flatMap((cat) => cat.tasks);
		const completed = allTasks?.filter((t) => t.status === "completed").length;
		return Math.round((completed / allTasks?.length) * 100);
	};

	//TODO: criar loading com skeleton suspense
	// if (loading) {
	// 	return (
	// 		<div className="min-h-screen bg-gray-50 flex items-center justify-center">
	// 			<div className="text-gray-600">Carregando...</div>
	// 		</div>
	// 	);
	// }

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Header */}
			<PanelHeader calculateOverallProgress={calculateOverallProgress} />
			<div className="max-w-7xl mx-auto px-4 py-8">
				{/* Category Navigation */}
				<PanelCategoryNavigation categories={initialCategories} />

				<Outlet />

				{/* Monthly Progress */}
				{/* <div className="bg-primary rounded-lg shadow-sm border border-gray-200">
					<div className="p-6 border-b border-gray-200">
						<h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
							<FileText className="w-6 h-6" />
							Resumo de Evolução Mensal
						</h2>
					</div>

					<div className="p-6 space-y-6">
						{monthProgress.map((month) => (
							<div
								key={month.month}
								className="border border-gray-200 rounded-lg p-5"
							>
								<div className="flex items-center justify-between mb-4">
									<div>
										<h3 className="text-lg font-bold text-gray-900">
											{month.month}
										</h3>
										<p className="text-sm text-gray-600">{month.focus}</p>
									</div>
									<div className="text-right">
										<input
											type="number"
											min="0"
											max="100"
											value={month.progress}
											onChange={(e) =>
												updateMonthProgress(
													month.month,
													"progress",
													parseInt(e.target.value) || 0,
												)
											}
											className="w-20 px-3 py-2 border border-gray-300 rounded-md text-right font-bold text-blue-600"
										/>
										<span className="text-sm text-gray-600 ml-1">%</span>
									</div>
								</div>

								<div className="w-full bg-gray-200 rounded-full h-2 mb-4">
									<div
										className="bg-blue-600 h-2 rounded-full transition-all duration-500"
										style={{ width: `${month.progress}%` }}
									/>
								</div>

								<textarea
									value={month.notes}
									onChange={(e) =>
										updateMonthProgress(month.month, "notes", e.target.value)
									}
									placeholder="Aprendizados / Reflexões..."
									className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
									rows={3}
								/>
							</div>
						))}
					</div>
				</div> */}
				{/* Legend */}
				<PanelLegend />
			</div>
		</div>
	);
};
