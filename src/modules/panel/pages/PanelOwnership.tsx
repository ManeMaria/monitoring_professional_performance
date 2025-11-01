import { PanelForm } from "@/modules/panel/components";
import { useDataLocalStorage } from "@/modules/panel/hooks";

export const PanelOwnershipPage = () => {
	const { ownership, setOwnershipTasks } = useDataLocalStorage();

	return <PanelForm category={ownership} onChange={setOwnershipTasks} />;
};
