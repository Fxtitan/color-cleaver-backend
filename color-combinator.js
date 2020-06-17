const colorCombinator = (color, color2) => {
    let message = 'When you combine red and yellow, you get orange!';
    if (color + color2 === message && color + color2 === 'orange') {
return message;
    }
}

// describe('colorCombinator', () => {
//     it(`returns the combination of the two given colors`, () => {
//       expect(colorCombinator('red', 'yellow')).toBe('When you combine red and yellow, you get orange!')
//       expect(colorCombinator('red', 'blue')).toBe('When you combine red and blue, you get purple!')
//       expect(colorCombinator('yellow', 'blue')).toBe('When you combine yellow and blue, you get green!')
//     })
  
//     it(`returns a message if not given a primary color for the first parameter`, () => {
//       expect(colorCombinator('orange', 'yellow')).toBe('Sorry, one of those colors is not a primary color!');
//       expect(colorCombinator('blorgon', 'red')).toBe('Sorry, one of those colors is not a primary color!');
//       expect(colorCombinator('ted', 'red')).toBe('Sorry, one of those colors is not a primary color!');
//       expect(colorCombinator('blorgon', 'blue')).toBe('Sorry, one of those colors is not a primary color!');
//     })
  
//     it(`returns a message if not given a primary color for the second parameter`, () => {
//       expect(colorCombinator('yellow', 'purple')).toBe('Sorry, one of those colors is not a primary color!');
//       expect(colorCombinator('blue', 'white')).toBe('Sorry, one of those colors is not a primary color!');
//       expect(colorCombinator('Ted', 'from Better Off Ted')).toBe('Sorry, one of those colors is not a primary color!');
//       expect(colorCombinator('black', 'black')).toBe('Sorry, one of those colors is not a primary color!');
//     })
//   })


module.exports = colorCombinator;