const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const emailError = document.querySelector('.error-msg');
const emailSuccess = document.querySelector('.success-msg');
const submitBtn = document.getElementById('submit-btn');
const copyBtn = document.getElementById('copy-btn-lg');
const copyBtnSm = document.getElementById('copy-btn-sm');

console.log(copyBtnSm);

emailInput.value = '';

let data = {
  email: ''
};

const checkEmail = () => {
  const customConfig = {
    headers: {
      'Content-Type': 'application/json',
      'X-Master-Key':
        '$2b$10$ugKF2f7g3ehNYK.HTb./yeDDa.oENHmeS.pGXorQUJOAUORjyc8IW'
    }
  };

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  form.addEventListener('submit', e => {
    e.preventDefault();

    if (emailInput.value === '' || !emailInput.value.match(emailPattern)) {
      emailError.style.display = 'block';
      return false;
    }

    data = {
      email: emailInput.value
    };

    submitBtn.style.display = 'none';
    copyBtn.style.display = 'block';
    copyBtnSm.style.display = 'block';
    emailError.style.display = 'none';
    emailInput.value = 'https://ratepunk.com/referral';
    emailSuccess.style.display = 'flex';

    axios
      .put(
        'https://api.jsonbin.io/v3/b/6342a4d465b57a31e690362f',
        data,
        customConfig
      )
      .then(resp => {
        console.log(resp.data);
      })
      .catch(err => console.log(err));
  });
};

checkEmail();
