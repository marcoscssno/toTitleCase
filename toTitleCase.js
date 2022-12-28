const findFirstLetterInWord = require('./lib/findFirstLetterInWord');

module.exports = function toTitleCase(text) {
    // if (!text) throw new Error('No text was specified');
    // Words that should be in lower case
    const shouldBeInLowerCasePattern = /^é$|^e$|^o$|^a$|^os$|^as$|^ao$|^à$|^aos$|^às$|^de$|^do$|^da$|^dos$|^das$|^no$|^na$|^para$|^nos$|^nas$|^pro$|^pra$|^pros$|^pras$|^pelo$|^pela$|^pelos$|^pelas$|^um$|^uma$|^uns$|^umas$/;
    return text
        .trim()
        .toLowerCase()
        .split(' ')
        .map((word, index) => {
            // Curent word matches shouldBeInLowerCasePattern
            if (shouldBeInLowerCasePattern.test(word)) {
                // Current word is the first in the sentence
                if (index == 0) {
                    return word.charAt(0).toUpperCase() + word.slice(1);
                }
                // Current word is the last in the sentence
                if (index == text.trim().split(' ').length - 1) {
                    return word.charAt(0).toUpperCase() + word.slice(1);
                }
                // Current word is in the middle of the sentence
                return word;
            }
            // Current word doesn't match shouldBeInLowerCasePattern
            const firstLetterInWord = findFirstLetterInWord(word);
            return word.slice(0, firstLetterInWord) + word.charAt(firstLetterInWord).toUpperCase() + word.slice(firstLetterInWord + 1)
        })
        .join(' ');
}