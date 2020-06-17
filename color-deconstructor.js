let colorDeconstructor = (givenColor) => {
    if (givenColor === 'orange') {
        return "Orange is made by combining red and yellow!";
    } else if (givenColor === 'purple') {
        return "Purple is made by combining red and blue!";
    } else if (givenColor === 'green') {
        return 'Green is made by combining blue and yellow!';
    } else {
        return "Sorry, that's not a secondary color!";
    }
}

module.exports = colorDeconstructor