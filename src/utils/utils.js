export const formatNumberToDecimal = (number, min = 0, max = 0) => {
	const options = {
		style: 'decimal',
		useGrouping: true,
		minimumFractionDigits: min,
		maximumFractionDigits: max
	};

	return parseFloat(number).toLocaleString('es-AR', options);
};