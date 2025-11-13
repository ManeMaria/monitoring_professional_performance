import { PanelForm } from "@/modules/panel/components";
import { useTasksDataLocalStorage } from "@/modules/panel/hooks";

export const PanelQualityPage = () => {
	const { quality, setQualityTasks } = useTasksDataLocalStorage();
	return <PanelForm category={quality} onChange={setQualityTasks} />;
};
