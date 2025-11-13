import { PanelForm } from "@/modules/panel/components";
import { useTasksDataLocalStorage } from "@/modules/panel/hooks";

export const PanelImpactPage = () => {
	const { impact, setImpactTasks } = useTasksDataLocalStorage();
	return <PanelForm category={impact} onChange={setImpactTasks} />;
};
