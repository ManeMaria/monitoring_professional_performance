import { createFileRoute } from "@tanstack/react-router";
import { PanelQualityPage } from "@/modules/panel/pages";

export const Route = createFileRoute("/painel/qualidade")({
	component: PanelQualityPage,
});
