import { AlertCircle, CheckCircle2, Circle } from "lucide-react";

export const PanelLegendStatus = () => {
	return (
		<div className="bg-primary rounded-lg shadow-sm border border-gray-200 p-6">
			<h3 className="font-bold text-gray-900 mb-4">Legenda de Status</h3>
			<div className="space-y-2 text-sm">
				<div className="flex items-center gap-2">
					<Circle className="w-5 h-5 text-gray-400" />
					<span>Não iniciado</span>
				</div>
				<div className="flex items-center gap-2">
					<AlertCircle className="w-5 h-5 text-warning" />
					<span>Em andamento</span>
				</div>
				<div className="flex items-center gap-2">
					<CheckCircle2 className="w-5 h-5 text-success" />
					<span>Concluído</span>
				</div>
				<div className="flex items-center gap-2">
					<AlertCircle className="w-5 h-5 text-info" />
					<span>Revisão necessária</span>
				</div>
			</div>
		</div>
	);
};
