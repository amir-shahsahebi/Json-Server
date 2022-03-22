// javascript for details.html
const id = new URLSearchParams(window.location.search).get('id')  //window.lacation.search equal to: ?id=2  AND "id" equal to key

const container = document.querySelector(".details") 

const renderPosts = async () => {
    const res = await fetch("http://localhost:3000/posts/"+id);
    const post = await res.json()
    console.log(post)
    const template = `
    <h1>${post.title}</h1>
    <p>${post.body}</p>
    `
    container.innerHTML= template
}
window.addEventListener("DOMContentLoaded", () => renderPosts());