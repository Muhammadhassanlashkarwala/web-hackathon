

import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});

let logOut = document.getElementById("logout");
let createblog = document.getElementById("Createblog");
logOut.addEventListener("click", function(e) {
    e.preventDefault();
    window.location.href = "index.html";  // Redirect to login page upon logout
});

createblog.addEventListener("click", (e) => {

    console.log(createblog);
    e.preventDefault();
    Swal.fire({
      title: "Create a Blog",
      html: `
      <input id="title" type="text" placeholder="Title">
      <textarea id="description" placeholder="Description"></textarea>
      `,
      showCancelButton: true,
      confirmButtonText: "Create",
      showLoaderOnConfirm: true,
      preConfirm: () => {
        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
  
        if (!title || !description) {
          throw new Error("Title and Description are required!");
        }
  
        return { title, description };
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        let title = document.getElementById("title");
        let description = document.getElementById("description");
        section.innerHTML += `
  <div class="blog-item border border-accent mt-5 mb-5 ms-[280px] text-center w-[600px]">
            <h2 class="text-[30px] text-black">${title.value}</h2>
            <p class="text-[18px] text-black">${description.value}</p>
            <button >Read More</button>
          </div>
  `;
        Swal.fire({
          title: "Blog Created!",
          text: "Your blog has been created successfully!",
          icon: "success",
        });
      }
    });
  });