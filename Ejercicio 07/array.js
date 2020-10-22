let array10 = []

function array (num) {
    for (let i = 0; i < 10; i++) {
        num++
        array10[i] = num;
    }
    return array10;
}

module.exports = array;