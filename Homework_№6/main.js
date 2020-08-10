let getSel = n => document.querySelector(n);
const regName = /^[a-zA-Z ]+$/;
const regEmail = /\S+@\S+\.\S+/;
const regPass = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/;
let signUpForm = document.forms['signUpForm'];
let signInForm = document.forms['signInForm'];
let users = [];

getSel('.showSignIn').addEventListener('click', function() {
    getSel('.signIn').classList.remove('d-none'), getSel('.signUp').classList.add('d-none')
   }
)

getSel('.showSignUp').addEventListener('click', function() {
       getSel('.signIn').classList.add('d-none') , 
       getSel('.signUp').classList.remove('d-none'
    )
  }
)

class User {
    constructor(first, last, email, password) {
        this.firstName = first;
        this.lastName = last;
        this.email = email;
        this.password = password
    }
}

getSel('.register-btn').addEventListener('click', function() {
    let email = signUpForm.email.value;
    let lname = signUpForm.lname.value;
    let fname = signUpForm.fname.value;
    let pass = signUpForm.pass.value;
    let validated = true;
    let user = new User(fname, lname, email, pass);

    if(!regName.test(lname)) {
      validated = false;
      signUpForm.lname.classList.add('is-invalid');
      signUpForm.lname.classList.remove('is-valid');
      getSel('.invalid-name').classList.remove('d-none');
    }  else {
      signUpForm.lname.classList.remove('is-invalid');
      signUpForm.lname.classList.add('is-valid');
      getSel('.invalid-name').classList.add('d-none');
    }



    if(!regEmail.test(email)){
        validated = false;
        signUpForm.email.classList.add('is-invalid');
        signUpForm.email.classList.remove('is-valid');
        getSel('.invalid-email').classList.remove('d-none');
    } else {
        signUpForm.email.classList.remove('is-invalid');
        signUpForm.email.classList.add('is-valid');
        getSel('.invalid-email').classList.add('d-none')
    }

  if(!regName.test(fname)){
    validated = false;
    signUpForm.fname.classList.add('is-invalid');
    signUpForm.fname.classList.remove('is-valid');
    getSel('.invalid-fname').classList.remove('d-none')
  } else {
    signUpForm.fname.classList.remove('is-invalid');
    signUpForm.fname.classList.add('is-valid');
    getSel('.invalid-fname').classList.add('d-none');
  }

  if(!regPass.test(pass)){
    validated = false;
    signUpForm.pass.classList.add('is-invalid');
    signUpForm.pass.classList.remove('is-valid');
    getSel('.invalid-pass').classList.remove('d-none');
  }  else {
    signUpForm.pass.classList.remove('is-invalid');
    signUpForm.pass.classList.add('is-valid');
    getSel('.invalid-pass').classList.add('d-none')
   }

   if(localStorage.length > 0 && localStorage.getItem('users')){

      users = JSON.parse(localStorage.getItem('users'));

     if(users.some( name => name.email === email)){
      validated = false;
      signUpForm.email.classList.remove('is-valid');
      signUpForm.email.classList.add('is-invalid');
      getSel('.wrong-email').classList.remove('d-none');
    }
      
     else if(validated){
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
      getSel('.wrong-email').classList.add('d-none');
      signUpForm.reset();
      resetBorders(); 
     }
    }

    else if(validated){
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
       getSel('.wrong-email').classList.add('d-none');
       signUpForm.reset();
       resetBorders();
     }
  })


function resetBorders(){
  signUpForm.email.classList.remove('is-valid');
  signUpForm.fname.classList.remove('is-valid');
  signUpForm.lname.classList.remove('is-valid');
  signUpForm.pass.classList.remove('is-valid');
}


getSel('.sign-in-btn').addEventListener('click', function() {

    if(localStorage.length > 0 && localStorage.getItem('users')) {
        users = JSON.parse(localStorage.getItem('users'))
        for(names of users) {
            if(names.email === signInForm.email.value && names.password === signInForm.password.value){
              getSel('.tab-content').classList.add('d-none');
              getSel('.user-card').classList.remove('d-none');
              getSel('.user-name').innerText = names.firstName + ' ' + names.lastName;
              getSel('.user-email').innerText = names.email;
              getSel('.local-empty').classList.add('d-none')
              signInForm.reset()
            }  else getSel('.local-empty').classList.remove('d-none')
         } 
      }

    else getSel('.local-empty').classList.remove('d-none')
 })


 getSel('.signOut').addEventListener('click', function() {
     getSel('.user-card').classList.add('d-none');
     getSel('.tab-content').classList.remove('d-none');
     getSel('.signIn').classList.add('d-none')
     getSel('.signUp').classList.remove('d-none');
     getSel('.local-empty').classList.add('d-none');
 })
 

 