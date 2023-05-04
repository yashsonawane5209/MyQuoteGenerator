const name = document.querySelector('.name');
const email = document.querySelector('.email');

const quotes = [
  'Nothing can be done without hope and confidence.',
  ' to believe in yourself and that you are best at what you do',
  'All this hard work and sweat will surely pay someday',
  'Winners are lossers who never quit'
];




function submit() {
  const YourName = name.value;
  const YourEmail = email.value

  const randomQuote = quotes[(Math.floor(Math.random() * quotes.length))];

  document.body.innerHTML = (`Hi ${YourName}, Hope you are doing well. Always remember ${randomQuote}.
  Your are the best, I believe in you  `)

  const remove = document.querySelector('.name').value = '';
  const remove2 = document.querySelector('.email').value = '';
}









