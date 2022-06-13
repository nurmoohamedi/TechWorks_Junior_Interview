function solveEquation(a, b, c) {
    let arr = [];

    const discriminant = b * b - (4 * a * c);

    if (discriminant < 0)
        return arr;
    else if (discriminant === 0) {
        arr.push((-b / (2 * a)));
        return arr;
    } else {
        arr.push((-b + Math.sqrt(discriminant)) / (2 * a));
        arr.push((-b - Math.sqrt(discriminant)) / (2 * a));
        return arr; // array
    }

}