const form = document.getElementById('form');
const Button = document.getElementById('convert-btn');
const output = document.getElementById('output');

const convertToRoman = num => {
  const ref = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];
  const res = [];

  ref.forEach((arr)=> {
    while (num >= arr[1]) {
      res.push(arr[0]);
      num -= arr[1];
    }
  });

  return res.join('');
};

const isValid = (str, int) => {
  let err = '';

  if (!str || str.match(/[e.]/g)) {
    err = 'Please enter a valid number.';
  } else if (int < 1) {
    err = 'Please enter a number greater than or equal to 1.';
  } else if (int > 3999) {
    err = 'Please enter a number less than or equal to 3999.';
  } else {
    // No errors detected
    return true;
  }

  // Handle error text and output styling
  output.innerText = err;
  output.classList.add('alert');

  return false;
};

const clear = () => {
  output.innerText = '';
  output.classList.remove('alert');
};

form.addEventListener('submit', e => {
  e.preventDefault();
  convert();
});

Button.addEventListener('click', () => {
  convert();
});

const convert = () => {
  const numStr = document.getElementById('number').value;
  const int = parseInt(numStr, 10);

  output.classList.remove('hidden');

  clear();

  if (isValid(numStr, int)) {
    output.innerText = convertToRoman(int);
  }
};
