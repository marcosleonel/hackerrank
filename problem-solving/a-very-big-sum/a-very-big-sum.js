// Complete the aVeryBigSum function below.
function aVeryBigSum(ar) {
    let sum = 0;

    ar.forEach(item => {
        sum += parseInt(item);
    });

    return parseInt(sum);

}
