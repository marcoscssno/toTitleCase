const findFirstLetterInWord = require('../lib/findFirstLetterInWord');

it('Shoult throw an error when no word is passed', () => {
    expect(() => findFirstLetterInWord().toThrow(Error));
})

it('Should return 0 when receives \'apple\'', () => {
    expect(findFirstLetterInWord('apple')).toBe(0);
});

it('Should return 1 when receives \'(apple)\'', () => {
    expect(findFirstLetterInWord('(apple)')).toBe(1);
});

it('Should return 1 when receives \"apple\"', () => {
    expect(findFirstLetterInWord('\"apple\"')).toBe(1);
});

it('Should return 2 when receives \"(apple)\"', () => {
    expect(findFirstLetterInWord('\"(apple)\"')).toBe(2);
});

// Word with accent

it('Should return 0 when receives \'régua\'', () => {
    expect(findFirstLetterInWord('régua')).toBe(0);
});

it('Should return 1 when receives \'(régua)\'', () => {
    expect(findFirstLetterInWord('(régua)')).toBe(1);
});

it('Should return 1 when receives \"régua\"', () => {
    expect(findFirstLetterInWord('\"régua\"')).toBe(1);
});

it('Should return 2 when receives \"(régua)\"', () => {
    expect(findFirstLetterInWord('\"(régua)\"')).toBe(2);
});