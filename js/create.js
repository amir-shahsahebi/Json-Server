// javascript for create.html
const form = document.querySelector("form")

const createPost = async (e) => {
    e.preventDefault()
    const doc = {
      title: form.title.value, // .title is the naqme that we assing in html
      body: form.body.value, // .body is the naqme that we assing in html
      likes: 0,
      //dont need to add id because json makes it default
    };

    await fetch("http://localhost:3000/posts", { // this is the posts link that we want to post new posts there
        method: 'POST', // method is type of request that we want and 'POST' used for posting
        body: JSON.stringify(doc),// body is inner documents that is in the links above, because of that it must be JSON format, we use JSON.strinify() 
        headers: {'Content-Type' : 'application/json'} // we have to say headers and Content-Type that we're sending json
    });

    window.location.replace('/index.html')  // relocate user back to the home page
}

form.addEventListener("submit",createPost)