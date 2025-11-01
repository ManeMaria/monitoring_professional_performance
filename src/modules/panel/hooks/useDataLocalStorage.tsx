import { initialCategories } from "@/modules/panel/data/initial-categories";
import type { Category, Task } from "@/modules/panel/types";
import { LocalStorageFunctions } from "@/modules/panel/utils";

export const useDataLocalStorage = () => {
	const { commitment, delivery, ownership, impact, quality, communication } = [
		"commitment",
		"delivery",
		"ownership",
		"impact",
		"quality",
		"communication",
	].reduce(
		(acc, category) => {
			acc[category] = {
				...initialCategories[category],
				tasks:
					LocalStorageFunctions.getItem(category) ||
					initialCategories[category].tasks,
			};
			return acc;
		},
		{} as Record<string, Category>,
	);

	const setCommitmentTasks = (commitmentTasks: Task[]) => {
		LocalStorageFunctions.setItem("commitment", commitmentTasks);
	};
	const setDeliveryTasks = (deliveryTasks: Task[]) => {
		LocalStorageFunctions.setItem("delivery", deliveryTasks);
	};
	const setOwnershipTasks = (ownershipTasks: Task[]) => {
		LocalStorageFunctions.setItem("ownership", ownershipTasks);
	};
	const setImpactTasks = (impactTasks: Task[]) => {
		LocalStorageFunctions.setItem("impact", impactTasks);
	};
	const setQualityTasks = (qualityTasks: Task[]) => {
		LocalStorageFunctions.setItem("quality", qualityTasks);
	};
	const setCommunicationTasks = (communicationTasks: Task[]) => {
		LocalStorageFunctions.setItem("communication", communicationTasks);
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
