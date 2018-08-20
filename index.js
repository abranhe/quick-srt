'use strict';

const quickSort = (arr) => {
	if (!arr.length) return [];

	const [head, ...tail] = arr;
	const left = tail.filter( e => e < head);
	const right = tail.filter( e => e >= head);

	return quickSort(left).concat(head, quickSort(right));
}

module.exports = quickSort;
