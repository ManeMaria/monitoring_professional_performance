import { Outlet } from "@tanstack/react-router";
import {
	PanelCategoryNavigation,
	PanelHeader,
	PanelLegend,
	PanelMonthlyProgressForm,
} from "@/modules/panel/components";
import { initialCategories } from "@/modules/panel/data/initial-categories";
import { useMonthlyDataLocalStorage } from "@/modules/panel/hooks";
import { useTasksData } from "@/modules/panel/stories";

//TODO: criar hooks para persistência de dados com zustand
export const PanelPage = () => {
	const { commitment, delivery, ownership, impact, quality, communication } =
		useTasksData();

	const {
		updateMonthProgressObservation,
		monthProgress,
		monthProgressOverall,
	} = useMonthlyDataLocalStorage({
		categories: {
			commitment,
			delivery,
			ownership,
			impact,
			quality,
			communication,
		},
	});

	//TODO: criar loading com skeleton suspense
	// if (loading) {
	// 	return (
	// 		<div className="min-h-screen bg-gray-50 flex items-center justify-center">
	// 			<div className="text-gray-600">Carregando...</div>
	// 		</div>
	// 	);
	// }

	return (
		<section className="min-h-screen bg-gray-50">
			{/* Header */}
			<PanelHeader overallProgress={monthProgressOverall} />
			<div className="max-w-7xl mx-auto px-4 py-8">
				{/* Category Navigation */}
				<PanelCategoryNavigation categories={initialCategories} />
				<Outlet />
				{/* Monthly Progress */}
				<PanelMonthlyProgressForm
					onUpdateMonthProgress={updateMonthProgressObservation}
					monthProgressData={monthProgress}
				/>
				{/* Legend */}
				<PanelLegend />
			</div>
		</section>
	);
};
