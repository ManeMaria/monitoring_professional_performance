import { createFileRoute } from "@tanstack/react-router";
import { PanelImpactPage } from "@/modules/panel/pages";

export const Route = createFileRoute("/painel/impacto")({
	component: PanelImpactPage,
});
