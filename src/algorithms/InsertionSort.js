const insertionSort = (array, steps, colors) => {
    let colorKey = colors[colors.length - 1].slice();
    let i,j;
    colorKey[0] = 2;
    for (i = 1; i < array.length; i++) {
        for (j=i-1;j>=0;j--)
        {
            if (array[j+1]<array[j])
            {
                array=swap(array,j,j+1);
                colorKey[j+1] = 1;
                colorKey[j] = 1;
                steps.push(array.slice());
                colors.push(colorKey.slice());
                colorKey[j+1] = 2;
                colorKey[j] = 2;
            }
            else
            {
                colorKey[j+1] = 1;
                colorKey[j] = 1;
                steps.push(array.slice());
                colors.push(colorKey.slice());
                colorKey[j+1] = 2;
                colorKey[j] = 2;
                break;
            }
        }
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

export default insertionSort;