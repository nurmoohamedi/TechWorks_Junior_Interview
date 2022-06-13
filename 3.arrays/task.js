function compareArrays(arr1, arr2) {

    let result = (arr1, arr2) => {

        if (arr1.length !== arr2.length)
            return false;

        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i])
                return false;
        }

        return true;
    };

    return result(arr1, arr2); // boolean
}

function advancedFilter(arr) {
    let resultArr = [];

    arr.forEach(item => {
        if (item > 0 && item % 3 === 0)
            resultArr.push(item*10);
    })

    return resultArr; // array
}
