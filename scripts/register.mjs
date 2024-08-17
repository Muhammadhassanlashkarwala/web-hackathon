import { app , analytics , createUserWithEmailAndPassword  , auth} from "./firebase.js";

let btn = document.getElementById('btn')

btn.addEventListener("click", (e)=>{
   e.preventDefault();
    let  name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    createUserWithEmailAndPassword(auth, email, password, name)
    .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // console.log(user);
    if (email.value == '' || password.value == '' || name.value == '') {
        alert("Fill all requirement questions")
    }else{

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Registration successed",
            showConfirmButton: false,
            timer: 1500
        });
        window.location.href = 'index.html'
    }
        // ...
    
    })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    // ..
  });
});