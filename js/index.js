// javascript for index.html
container = document.querySelector(".blogs");
const searchForm = document.querySelector(".search")

const renderPosts = async (term) => {
    //defaul sorting posts id by id but for any type of sort we can do the next line
//   let uri = "http://localhost:3000/posts";
    //for sort by any different properties we can use this one below: ?_sort=key
//   let uri = "http://localhost:3000/posts?_sort=likes";
// and also for sorting reverse we can use this: &_order=desc mean descending
  let uri = "http://localhost:3000/posts?_sort=likes&_order=desc";
  if (term) {
    uri += `&q=${term}` // &q=exp => it search exp in all json files
  }
  const res = await fetch(uri);
  const posts = await res.json();
  let template = "";
  posts.forEach((post) => {
    template += `
        <div class="post">
        <h2>${post.title}</h2>
        <p><small>${post.likes}</small></p>
        <p>${post.body.slice(0, 200)}</p>
        <a href="/details.html?id=${post.id}">read more ...</a> 
        </div>
        `;
  });
  container.innerHTML = template;
};


searchForm.addEventListener("submit", (e)=> { // it active when press enter
  e.preventDefault() //it dosent refresh the page 
  renderPosts(searchForm.term.value.trim())
})
window.addEventListener("DOMContentLoaded", () => renderPosts());
