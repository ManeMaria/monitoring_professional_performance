export const formatDateToBrazilianLocale = (date?: string) => {
	const dateFormatted = new Date(date ?? "");
	if (dateFormatted.toString() === "Invalid Date") return date;
	return dateFormatted.toLocaleDateString("pt-BR", {
		day: "2-digit",
		month: "2-digit",
		year: "2-digit",
	});
};
