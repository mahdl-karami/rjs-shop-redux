function shortIt(string, words_length) {
  const wordList = string.split(" ");
  wordList.splice(words_length, wordList.length);
  return wordList.join(" ");
}

export default shortIt;
