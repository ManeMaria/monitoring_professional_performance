import { Link } from "@tanstack/react-router";
import { useState } from "react";
import type { Category } from "@/modules/panel/types";
import { cn } from "@/shared/libs";

type PanelCategoryNavigationProps = {
	categories: Record<string, Category>;
};

enum CategoryIdNameEnum {
	COMMITMENT = "commitment",
	COMMUNICATION = "communication",
	QUALITY = "quality",
	DELIVERY = "delivery",
	OWNERSHIP = "ownership",
	IMPACT = "impact",
}

const PATHNAMES_MAP: Record<CategoryIdNameEnum, string> = {
	[CategoryIdNameEnum.COMMITMENT]: "/painel/compromisso",
	[CategoryIdNameEnum.COMMUNICATION]: "/painel/comunicacao",
	[CategoryIdNameEnum.QUALITY]: "/painel/qualidade",
	[CategoryIdNameEnum.DELIVERY]: "/painel/delivery",
	[CategoryIdNameEnum.OWNERSHIP]: "/painel/ownership",
	[CategoryIdNameEnum.IMPACT]: "/painel/impacto",
} as const;

const matchPath = (pathname: string) => {
	return (
		Object.entries(PATHNAMES_MAP).find(
			([_, value]) => value === pathname,
		)?.[0] ?? CategoryIdNameEnum.COMMITMENT
	);
};

export const PanelCategoryNavigation = ({
	categories,
}: PanelCategoryNavigationProps) => {
	const [isActivePathname, setIsActivePathname] = useState(
		matchPath(window?.location?.pathname),
	);

	const categoriesArray = Object.values(categories);

	return (
		<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
			{categoriesArray?.map((cat) => {
				const completed = cat?.tasks.filter(
					(t) => t.status === "completed",
				).length;

				const total = cat?.tasks.length;
				const isSelected = cat.id === isActivePathname;
				const Icon = cat.icon;
				return (
					<Link
						key={cat.id}
						to={PATHNAMES_MAP[cat.id as CategoryIdNameEnum]}
						onClick={() => setIsActivePathname(cat.id as CategoryIdNameEnum)}
					>
						<div
							className={cn(
								"p-4 rounded-lg border-2 transition-all",
								isSelected
									? "border-blue-500 bg-blue-50"
									: "border-gray-200 bg-primary hover:border-blue-300",
							)}
						>
							<div
								className={`${cat.color} w-10 h-10 rounded-lg flex items-center justify-center text-white mb-2`}
							>
								<Icon className="w-5 h-5" />
							</div>
							<div className="text-sm font-medium text-gray-900">
								{cat.name}
							</div>
							<div className="text-xs text-gray-600 mt-1">
								{completed}/{total} concluídas
							</div>
						</div>
					</Link>
				);
			})}
		</div>
	);
};
