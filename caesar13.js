const caesar13 = (input) => {
  if (typeof input !== 'string') {
    throw new Error('Input is not a string!');
  } else if (input === '') {
    throw new Error('Input is empty!');
  }
  const inputArray = Array.from(input);
  const alphabetArray = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  const caesar13Array = inputArray.map((element) => {
    if (!parseInt(element) && element !== ' ' && element !== '0') {
      if (element === element.toUpperCase()) {
        return alphabetArray[
          (alphabetArray.indexOf(element.toLowerCase()) + 13) %
            alphabetArray.length
        ].toUpperCase();
      } else
        return alphabetArray[
          (alphabetArray.indexOf(element) + 13) % alphabetArray.length
        ];
    } else return element;
  });

  return caesar13Array.toString().replace(/,/g, '');
};

export default caesar13;
