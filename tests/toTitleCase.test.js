const toTitleCase = require('../toTitleCase');

it('Should receive an input and return an output', () => {
    expect(toTitleCase('Hello, World!')).toMatch(/hello, world!/i);
});

it('Should throw an error when no input is specified', () => {
    expect(() => toTitleCase()).toThrow(Error);
});

it('Should return words with first letter in upper case and other letters in lowercase', () => {
    expect(toTitleCase('HELLO, WORLD!')).toBe('Hello, World!');
});

it('Should return \'(Hello, World!)\' when receives \'(HELLO, WORLD!)\'', () => {
    expect(toTitleCase('(HELLO, WORLD!)')).toBe('(Hello, World!)');
});

it('Should return \'((Hello, World!))\' when receives \'((HELLO, WORLD!))\'', () => {
    expect(toTitleCase('((HELLO, WORLD!))')).toBe('((Hello, World!))');
});

it('Should return \'(\"Hello, World!\")\' when receives \'(\"HELLO, WORLD!\")\'', () => {
    expect(toTitleCase('(\"HELLO, WORLD!\")')).toBe('(\"Hello, World!\")');
});

it('Should return \'([{Hello, World!]})\' when receives \'([{HELLO, WORLD!]})\'', () => {
    expect(toTitleCase('([{HELLO, WORLD!]})')).toBe('([{Hello, World!]})');
});

it('Should return \'Ponto A\' when receives \'PONTO A\'', () => {
    expect(toTitleCase('PONTO A')).toBe('Ponto A');
});

it('Should return \'\"Fulano de Tal\"\' when receives \'\"FULANO DE TAL\"\'', () => {
    expect(toTitleCase('\"FULANO DE TAL\"')).toBe('\"Fulano de Tal\"');
});