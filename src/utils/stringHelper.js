import moment from 'moment';
import uuid from 'react-uuid'

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

// Include Ads
export const addAds = (arr) => {

	let newArray = []

	for(let i=0; i<arr.length; i++){

		if(i * 20 < arr.length){
			
			let startIndex = i * 20
			let endIndex = startIndex + 20

			const insert = (arr, index, newItem) => [
				...arr.slice(0, index),
				newItem,
				...arr.slice(index)
			]

			let adsCount = (arr.length / 20).toFixed()
			let adsObj = {
				name:"ads",
				id:uuid(),
				description: "Ads Here",
				date_added: moment()
			}

			if(i < adsCount){
				let result = insert(arr, endIndex, adsObj)

				console.log("result", result)

				let newSet = result.slice(startIndex, endIndex+1)
				newArray.push(...newSet)
			}else{
				let result = insert(arr, endIndex, adsObj)
				console.log(result.length)
				let newSet = result.slice(startIndex, result.length-1)

				newArray.push(...newSet)
			}
		}
	}
	
	return newArray
}