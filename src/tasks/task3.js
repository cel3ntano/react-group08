const string = 'string To upper Case';

const upperReverse = string => {
  const stringArr = string.split(' ');
  return stringArr
    .map(item => {
      const str = item.charAt(0);
      if (str === str.toUpperCase()) {
        return item.split('').reverse().join('');
      }
      return item;
    })
    .join(' ');
};

console.log(upperReverse(string));
