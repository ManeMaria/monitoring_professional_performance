import { PanelForm } from "@/modules/panel/components";
import { useTasksDataLocalStorage } from "@/modules/panel/hooks";

export const PanelCommitmentPage = () => {
	const { commitment, setCommitmentTasks } = useTasksDataLocalStorage();

	return <PanelForm category={commitment} onChange={setCommitmentTasks} />;
};
