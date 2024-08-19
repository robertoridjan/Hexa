let session = new Session();
session = session.getSession();

if(session !== '') {
  window.location.href = 'hexa.html'
}

// Registration modal open
document.querySelector('#registracija').addEventListener('click', () => {
  document.querySelector('.custom_modal').style.display = "block";
});

// Registration modal close
document.querySelector('#closeModal').addEventListener('click', () => {
  document.querySelector('.custom_modal').style.display = "none";
});

// Validation register form
let config = {
  'korisniko_ime': {
    required: true,
    minlength: 5,
    maxlength:50
  },

  'register_email': {
    required: true,
    email: true,
    minlength: 5,
    maxlength:50
  },

  'register_lozinka': {
    required: true,
    minlength: 5,
    maxlength:50,
    matching: 'ponovi_lozinka'
  },

  'ponovi_lozinka': {
    required: true,
    minlength: 7,
    maxlength:25,
    matching: 'register_lozinka'
  },
}

let validator = new Validator(config, '#registrationForm')

document.querySelector('#registrationForm').addEventListener('submit', e => {
  e.preventDefault();

  if(validator.validationPassed()) {
     let user = new User();
     user.username = document.querySelector('#korisniko_ime').value
     user.email = document.querySelector('#email').value
     user.password = document.querySelector('#lozinka').value
     user.create();

  } else {
    alert('Nesto ne radi')
  }
})

document.querySelector('#loginForm').addEventListener('submit', e => {
  e.preventDefault();

  let email = document.querySelector('#login_email').value;
  let password = document.querySelector('#login_lozinka').value;

  let user = new User();
  user.email = email
  user.password = password
  user.login()
})