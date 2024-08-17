import { app, auth, analytics , signInWithEmailAndPassword} from "./firebase.js";

let btns = document.getElementById("login");

btns.addEventListener("click", (e)=>{
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
 

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
    //   console.log(user);
   if (email.value == '' || password.value == '') {
    alert("Fill all requirement questions")
   }else{

       Swal.fire({
           position: "top-end",
        icon: "success",
        title: "Login successed",
        showConfirmButton: false,
        timer: 1500
    });
    window.location.href = 'blog.html'
}
    // ...
})
.catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
});
});