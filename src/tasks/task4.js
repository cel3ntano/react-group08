function getUniqueCharacters(str) {
  let result = '';
  const string = str.split('');

  //   for (let i = 0; i < str.length; i++) {
  //     if (result.indexOf(str[i]) === -1) {
  //       result += str[i];
  //     }
  //   }

  string.filter((item, index) => {
    const it = result.indexOf(string[index]);
    if (it === -1) {
      result += string[index];
    }
  });

  return result;
}

const input = 'привіт світ';
const uniqueChars = getUniqueCharacters(input);
console.log(uniqueChars);

// console.log('Hi' + ' ' + ['David'] + '!');
