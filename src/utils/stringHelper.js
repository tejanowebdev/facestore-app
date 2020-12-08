import moment from 'moment';
import uuid from 'react-uuid'

const randomAdds = [
	"TOYOTA", 
	"HONDA", 
	"YAMAHA",
	"KAWASAKI", 
	"MIO", 
	"ROCK",
	"HYUNDAI", 
	"MISUBISHI", 
	"COCACOLA",
	"PEPSI", 
	"YAKULT", 
	"ROYAL",
	"GATSBY",
	"OPPO", 
	"NOKIA", 
	"SONY",
	"LG", 
	"DELL", 
	"ACER",
	"LENOVO"
]


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

	let adsCount = (arr.length / 20).toFixed()
	let adsIndex = getAdsHere(adsCount)

	console.log("randomAds before: ", adsIndex)

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

			
			let adsObj = {
				name:"ads",
				id:uuid(),
				description: "Ads Here",
				date_added: moment(),
				sponsor:"",
			}

			if(i < adsCount){
					let result = insert(arr, endIndex, {...adsObj, sponsor: `${randomAdds[adsIndex[0]]}` })
					adsIndex.splice(0,1)
					console.log("randomAds after: ", result)
					let newSet = result.slice(startIndex, endIndex+1)
					newArray.push(...newSet)
			}else{
				let result = insert(arr, endIndex, {})
				console.log(result.length)
				let newSet = result.slice(startIndex, result.length-1)

				newArray.push(...newSet)
			}
		}
	}
	
	return newArray
}

// Get random ads
const getAdsHere = (arr) => {

	const getRandomNumber = (min, max) => {
		let step1 = max-min + 1;
		let step2 = Math.random() * step1;
		let result = Math.floor(step2) + min;
		return result;
	}
	
	const createNewArray = (start, end) => {
		let myArray=[];
		for(let i=start; i<=end; i++){
			myArray.push(i);
		}
		return myArray
	}
	
	let numberArray = createNewArray(0, randomAdds.length-1);
	
	const getAdsHere = (totalAds) => {
		let newAds = []
		for(let i = 0; i<totalAds; i++){
			let randomIndex = getRandomNumber(0, numberArray.length-1);
			let randumNumber = numberArray[randomIndex];
			numberArray.splice(randomIndex,1)
			newAds.push(randumNumber)
		}
		return newAds
	}

	return getAdsHere(arr)

}
