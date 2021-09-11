const subtract = require('./subtract');

test('Properly subtract two numbers', () => {
    expect(subtract(1, 2)).toBe(-1)
});