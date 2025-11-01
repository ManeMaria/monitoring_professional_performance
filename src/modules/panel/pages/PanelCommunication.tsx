import { PanelForm } from "@/modules/panel/components";
import { useDataLocalStorage } from "@/modules/panel/hooks";

export const PanelCommunicationPage = () => {
	const { communication, setCommunicationTasks } = useDataLocalStorage();

	return (
		<PanelForm category={communication} onChange={setCommunicationTasks} />
	);
};
