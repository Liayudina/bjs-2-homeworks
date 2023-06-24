function compareArrays(arr1, arr2) {
	let compare = arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
	return compare;
}

function getUsersNamesInAgeRange(users, gender) {
	let filteredUsers = users.filter(user => user.gender === gender);
	let usersAge = filteredUsers.map(user => user.age);

	if (!users.length) {
		return 0;
	} else if (!gender.includes('женский') && !gender.includes('мужской')) {
		return 0;
	} else return usersAge.reduce((summAge, ageValue) => summAge + ageValue, 0) / usersAge.length;
}
