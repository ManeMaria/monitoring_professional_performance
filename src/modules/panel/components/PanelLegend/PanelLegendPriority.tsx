export const PanelLegendPriority = () => {
	return (
		<div className="bg-primary rounded-lg shadow-sm border border-gray-200 p-6">
			<h3 className="font-bold text-gray-900 mb-4">Legenda de Prioridade</h3>
			<div className="space-y-2 text-sm">
				<div className="flex items-center gap-2">
					<span className="badge badge-high">Alta</span>
					<span>Ação crítica pro ciclo / performance visível</span>
				</div>
				<div className="flex items-center gap-2">
					<span className="badge badge-medium">Média</span>
					<span>Mantém constância e previsibilidade</span>
				</div>
				<div className="flex items-center gap-2">
					<span className="badge badge-low">Baixa</span>
					<span>Ações complementares ou contínuas</span>
				</div>
			</div>
		</div>
	);
};
