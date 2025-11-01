import {
	PanelLegendPriority,
	PanelLegendStatus,
} from "@/modules/panel/components/PanelLegend";

export const PanelLegend = () => {
	return (
		<div className="mt-8 grid md:grid-cols-2 gap-6">
			<PanelLegendStatus />
			<PanelLegendPriority />
		</div>
	);
};
