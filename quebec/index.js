function insertionSort(arr) {
    const n = arr.length;

    for (let i = 1; i < n; i++) {
        // Pick the current element to be inserted
        let currentElement = arr[i];

        // Move elements of arr[0..i-1] that are greater than currentElement
        // to one position ahead of their current position
        let j = i - 1;
        while (j >= 0 && arr[j] > currentElement) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Insert the current element into the correct position
        arr[j + 1] = currentElement;
    }

    return arr;
}

// Example usage:
const arrayToSort = [5, 2, 9, 1, 5, 6];
const sortedArray = insertionSort(arrayToSort);
console.log("Sorted Array:", sortedArray);