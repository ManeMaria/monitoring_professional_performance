import { createFileRoute } from "@tanstack/react-router";
import { PanelCommunicationPage } from "@/modules/panel/pages";

export const Route = createFileRoute("/painel/comunicacao")({
	component: PanelCommunicationPage,
});
