const promise = new Promise((resolve, reject) => {
	// Generate random number between 0 and 9	
	const randomInt = Math.floor(Math.random() * 10);
	console.log(`Random Integer is: ${randomInt}`);

	if (randomInt % 2 === 0) {
		// Success
		setTimeout(() => resolve('done'), 2000);
	} else {
		// Failure
		setTimeout(() => reject('error'), 2000);
	}
});

// Your solution(s) to exercise001 here!
/*
promise
.then(response => console.log(`Yay! Promise resolved with response: ${response}`))
.catch(reason => console.log(`Boo. Promise rejected with response: ${reason}`));
*/
const getPromiseResponse = async() => {
	try {
		const response = await promise;
		console.log(`Yay! Promise resolved with response: ${response}`);
	}catch(reason){
		console.log(`Boo. Promise rejected with response: ${reason}`);
	}		 
};
getPromiseResponse();