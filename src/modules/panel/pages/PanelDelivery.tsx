import { PanelForm } from "@/modules/panel/components";
import { useDataLocalStorage } from "@/modules/panel/hooks";

export const PanelDeliveryPage = () => {
	const { delivery, setDeliveryTasks } = useDataLocalStorage();

	return <PanelForm category={delivery} onChange={setDeliveryTasks} />;
};
