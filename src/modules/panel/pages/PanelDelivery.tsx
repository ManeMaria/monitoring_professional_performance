import { PanelForm } from "@/modules/panel/components";
import { useTasksDataLocalStorage } from "@/modules/panel/hooks";

export const PanelDeliveryPage = () => {
	const { delivery, setDeliveryTasks } = useTasksDataLocalStorage();
		return <PanelForm category={delivery} onChange={setDeliveryTasks} />;
};
