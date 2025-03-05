arr = [1, 40, -5, 10, 0];

function Arrow(arr) {
    newArr = [];
    for (index = 0; index < arr.length - 1; index++) {
        for (index2 = 1; index2 < arr.length; index2++) {
            if (arr[index] > arr[index2]) {
                newArr.push(arr[index2]);
            }
        }
        newArr.push(arr[index]);
    }
    newArr = [...new Set(newArr)];
    console.log(newArr);
}

Arrow(arr);