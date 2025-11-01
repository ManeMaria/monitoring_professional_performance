import { PanelForm } from "@/modules/panel/components";
import { useDataLocalStorage } from "@/modules/panel/hooks";

export const PanelCommitmentPage = () => {
	const { commitment, setCommitmentTasks } = useDataLocalStorage();

	return <PanelForm category={commitment} onChange={setCommitmentTasks} />;
};
