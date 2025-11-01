import { createFileRoute } from "@tanstack/react-router";
import { PanelOwnershipPage } from "@/modules/panel/pages";

export const Route = createFileRoute("/painel/ownership")({
	component: PanelOwnershipPage,
});
