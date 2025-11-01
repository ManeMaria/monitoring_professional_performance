import { createFileRoute } from "@tanstack/react-router";
import { PanelPage } from "@/modules/panel/pages";

export const Route = createFileRoute("/painel")({
	component: PanelPage,
});
