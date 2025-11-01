import { createFileRoute } from "@tanstack/react-router";
import { PanelCommitmentPage } from "@/modules/panel/pages";

export const Route = createFileRoute("/painel/compromisso")({
	component: PanelCommitmentPage,
});
