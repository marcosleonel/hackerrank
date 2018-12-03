// Complete the hourglassSum function below.
function hourglassSum(arr) {
	const array = arr;
	let hourglasses = [];

	/** Iterates vertically in the 2D array to find the hourglasses
	 * in this direction.
	*/
	for (let vert = 0; vert <= 3; vert++) {
			let currentHg = [
					[array[vert][vert], array[vert][vert + 1], array[vert][vert + 2]],
					[array[vert + 1][vert + 1]],
					[array[vert + 2][vert], array[vert + 2][vert + 1], array[vert + 2][vert + 2]]
			];


	}
}
