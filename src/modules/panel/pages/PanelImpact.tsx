import { PanelForm } from "@/modules/panel/components";
import { useDataLocalStorage } from "@/modules/panel/hooks";

export const PanelImpactPage = () => {
	const { impact, setImpactTasks } = useDataLocalStorage();

	return <PanelForm category={impact} onChange={setImpactTasks} />;
};
