// 1st Approach

// function validAnagram(first, second) {
// 	if (first.length !== second.length) {
// 		return false;
// 	}
// 	let frequencyCounter1 = {};
// 	let frequencyCounter2 = {};

// 	for (let letter of first) {
// 		frequencyCounter1[letter] = (frequencyCounter1[letter] || 0) + 1;
// 	};
// 	for (let letter of second) {
// 		frequencyCounter2[letter] = (frequencyCounter2[letter] || 0) + 1;
// 	}

// 	for (let key in frequencyCounter1) {
// 		if (!(key in frequencyCounter2)) {
// 			return false;
// 		}
// 		if(frequencyCounter2[key] !== frequencyCounter1[key]) {
// 			return false;
// 		}
// 	}
// 	return true;
// }

// 2nd Approach

function validAnagram(first, second) {
	if (first.length !== second.length) {
		return false;
	}
	const lookup = {};

	for (const letter of first) {
		lookup[letter] ? lookup[letter]++ : lookup[letter] = 1;
	}

	for (const letter of second) {
		if (!lookup[letter]) {
			return false;
		} else {
			lookup[letter]--;
		}
	}
	return true;
}
console.log(validAnagram('anagram', 'nagaram'));
