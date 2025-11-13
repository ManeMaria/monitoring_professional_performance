type PanelHeaderProps = {
	calculateOverallProgress: () => number;
};

export const PanelHeader = ({ calculateOverallProgress }: PanelHeaderProps) => {
	return (
		<header className="bg-primary shadow-sm border-b border-(--color-border-gray-300)">
			<div className="max-w-7xl mx-auto px-4 py-6">
				<div className="flex items-center justify-between">
					<div>
						<h1 className="text-3xl font-bold">Painel de Acompanhamento</h1>
						<p className="text-(--color-text-gray-600) mt-1">
							César Damasceno • Nov/25 → Jan/26
						</p>
					</div>
					<div className="text-right">
						<div className="text-sm text-(--color-text-gray-600)">
							Nível Atual
						</div>
						<div className="text-2xl font-bold text-(--color-category-blue)">
							Júnior 4
						</div>
					</div>
				</div>

				{/* Progress Overview */}
				<div className="mt-6 bg-blue-50 rounded-lg p-4">
					<div className="flex items-center justify-between mb-2">
						<span className="text-sm font-medium text-gray-700">
							Progresso Geral
						</span>
						<span className="text-sm font-bold text-(--color-category-blue)">
							{calculateOverallProgress()}%
						</span>
					</div>
					<div className="w-full bg-(--color-bg-gray-200) rounded-full h-3">
						<div
							className="bg-(--color-category-blue) h-3 rounded-full transition-all duration-500"
							style={{ width: `${calculateOverallProgress()}%` }}
						/>
					</div>
					{[
						{
							title: "Objetivo",
							description:
								"Consolidar performance fullstack e evoluir rumo ao Pleno",
						},
						{
							title: "Foco técnico",
							description:
								"Testes automatizados (unit, integração, e2e com Vitest e Playwright)",
						},
					].map((item) => (
						<p
							key={item.title}
							className="text-xs text-(--color-text-gray-600) mt-2"
						>
							<strong>{item.title}:</strong> {item.description}
						</p>
					))}
				</div>
			</div>
		</header>
	);
};
