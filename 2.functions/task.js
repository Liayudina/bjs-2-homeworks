function getArrayParams(...arr) {
	let min = arr[0];
	let max = arr[0];
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
		if (arr[i] > max) {
			max = arr[i];
		} else if (arr[i] < min) {
			min = arr[i];
		}
	};
	let avg = +(sum / arr.length).toFixed(2);
	return {
		min: min,
		max: max,
		avg: avg
	};
};
getArrayParams(10, 2, 3);



function summElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	};
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}



function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let min = arr[0];
	let max = arr[0];
	let difference = 0;
	for (let i = 0; i < arr.length; i++) {
		max = Math.max.apply(null, arr);
		min = Math.min.apply(null, arr);
	}

	let result = max - min;
	return result
}



function differenceEvenOddWorker(...arr) {
	if (!arr) {
		return 0;
	}
	let sumEvenElement = 0;
	let sumOddElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}
	let result = sumEvenElement - sumOddElement;
	return result
}



function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let sumEvenElement = 0;
	let countEvenElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			countEvenElement += 1;
			sumEvenElement += arr[i];
		}
	}

	let result = sumEvenElement / countEvenElement;
	return result;

}



function makeWork(arrOfArr, func) {
	let maxWorkerResult = func(...arrOfArr[0]);
	for (let i = 0; i < arrOfArr.length; i++) {
		const workerResult = func(...arrOfArr[i]);
		if (workerResult > maxWorkerResult) {
			maxWorkerResult = workerResult;
		}
	}
	return maxWorkerResult;
}
