const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const target = 99;
function binarySearch() {
    let start = 0;
    let end = numbers.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (numbers[mid] === target) {
            console.log('Items Found', mid);
            return mid;
        }
        if (numbers[mid] < target) {
            start = mid + 1;
        }
        if (numbers[mid] > target) {
            end = mid - 1;
        }
    }
    return -1;
}

const index = binarySearch(numbers, target)
console.log(index);