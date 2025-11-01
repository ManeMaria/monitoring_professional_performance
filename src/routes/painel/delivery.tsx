import { createFileRoute } from "@tanstack/react-router";
import { PanelDeliveryPage } from "@/modules/panel/pages";

export const Route = createFileRoute("/painel/delivery")({
	component: PanelDeliveryPage,
});
