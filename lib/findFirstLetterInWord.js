module.exports = function findFirstLetterInWord(word) {
    if (!word) throw new Error('No word was passed');
    return word.search(/[a-zà-ú]/i)
}