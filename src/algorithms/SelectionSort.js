const selectionSort = (array, steps, colors) => {
    let colorKey = colors[colors.length - 1].slice();
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[i]) {
                array=swap(array, i, j);
            }
            colorKey[i] = 1;
            colorKey[j] = 1;
            steps.push(array.slice());
            colors.push(colorKey.slice());
            colorKey[i] = 0;
            colorKey[j] = 0;
        }
        colorKey[i] = 2;
        steps.push(array.slice());
        colors.push(colorKey.slice());
    }
    colors[colors.length - 1] = new Array(array.length).fill(2);
    return;
}

const swap = (arr, x, y) => {
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
    return arr;
}

export default selectionSort;