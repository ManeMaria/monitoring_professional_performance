import { useTasksData } from "@/modules/panel/stories";
import type { Task } from "@/modules/panel/types";

export const useTasksDataLocalStorage = () => {
	const { updateTasks, commitment, delivery, ownership, impact, quality, communication } = useTasksData();
	console.log("🚀 ~ useTasksDataLocalStorage ~ commitment:", commitment)

	const setCommitmentTasks = (commitmentTasks: Task[]) => {
		updateTasks("commitment", commitmentTasks);
	};
	const setDeliveryTasks = (deliveryTasks: Task[]) => {
		updateTasks("delivery", deliveryTasks);
	};
	const setOwnershipTasks = (ownershipTasks: Task[]) => {
		updateTasks("ownership", ownershipTasks);
	};
	const setImpactTasks = (impactTasks: Task[]) => {
		updateTasks("impact", impactTasks);
	};
	const setQualityTasks = (qualityTasks: Task[]) => {
		updateTasks("quality", qualityTasks);
	};
	const setCommunicationTasks = (communicationTasks: Task[]) => {
		updateTasks("communication", communicationTasks);
	};

	return {
		setCommitmentTasks,
		setDeliveryTasks,
		setOwnershipTasks,
		setImpactTasks,
		setQualityTasks,
		setCommunicationTasks,
		commitment,
		delivery,
		ownership,
		impact,
		quality,
		communication,
	};
};
