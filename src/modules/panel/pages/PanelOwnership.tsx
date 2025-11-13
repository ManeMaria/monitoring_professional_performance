import { PanelForm } from "@/modules/panel/components";
import { useTasksDataLocalStorage } from "@/modules/panel/hooks";

export const PanelOwnershipPage = () => {
	const { ownership, setOwnershipTasks } = useTasksDataLocalStorage();
	return <PanelForm category={ownership} onChange={setOwnershipTasks} />;
};
