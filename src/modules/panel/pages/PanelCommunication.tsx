import { PanelForm } from "@/modules/panel/components";
import { useTasksDataLocalStorage } from "@/modules/panel/hooks";

export const PanelCommunicationPage = () => {
	const { communication, setCommunicationTasks } = useTasksDataLocalStorage();
	return <PanelForm category={communication} onChange={setCommunicationTasks} />;
};
