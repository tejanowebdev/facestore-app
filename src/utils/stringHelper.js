// converting date format
export const formatDate = (date) => {
	const getDate = date.getDate();
	const getMonth = date.getMonth() + 1;
	const getYear = date.getFullYear();

	let newDate;
	let newMonth;

	if (getDate < 10) {
		newDate = "0" + getDate
	} else {
		newDate = getDate.toString();
	}

	if (getMonth < 10) {
		newMonth = "0" + getMonth;
	} else {
		newMonth = getMonth.toString();
    }
    
	return `${newMonth}/${newDate}/${getYear}`;
}
