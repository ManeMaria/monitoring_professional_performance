import { Outlet } from "@tanstack/react-router";
import { useTasksData } from "@/modules/panel/stories";
import {
	PanelCategoryNavigation,
	PanelHeader,
	PanelLegend,
	PanelMonthlyProgressPage,
} from "@/modules/panel/components";
import { initialCategories } from "@/modules/panel/data/initial-categories";
import {
	useMonthlyDataLocalStorage,
} from "@/modules/panel/hooks";

//TODO: criar hooks para persistência de dados com zustand
export const PanelPage = () => {
	const { commitment, delivery, ownership, impact, quality, communication } =
		useTasksData();

	const { updateMonthProgressObservation, monthProgress } =
		useMonthlyDataLocalStorage({
			categories: {
				commitment,
				delivery,
				ownership,
				impact,
				quality,
				communication,
			},
		});
	//TODO: criar store zustand para calcular o progresso geral
	const calculateOverallProgress = () => {
		const allTasks = [
			commitment,
			delivery,
			ownership,
			impact,
			quality,
			communication,
		]?.flatMap((cat) => cat?.tasks);
		const completed = allTasks?.filter((t) => t?.status === "completed").length;
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
				<PanelMonthlyProgressPage
					onUpdateMonthProgress={updateMonthProgressObservation}
					monthProgressData={monthProgress}
				/>
				{/* Legend */}
				<PanelLegend />
			</div>
		</div>
	);
};
