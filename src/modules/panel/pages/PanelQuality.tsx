import { PanelForm } from "@/modules/panel/components";
import { useDataLocalStorage } from "@/modules/panel/hooks";

export const PanelQualityPage = () => {
	const { quality, setQualityTasks } = useDataLocalStorage();

	return <PanelForm category={quality} onChange={setQualityTasks} />;
};
