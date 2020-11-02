const isPalindrome = str => {
  str = str.toLowerCase();
  const charArr = str.split('');

  const alphabetsArr = 'abcdefghijklmnopqrstuvwxyz'.split('');

  const characterArr = [];
  charArr.forEach(char => {
    if (alphabetsArr.indexOf(char) != -1) characterArr.push(char);
  });
  if (characterArr.join('') === characterArr.reverse().join('')) return true;
  else return false;
};

module.exports = isPalindrome;
