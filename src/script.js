const getAllPosts = document.querySelectorAll("#post-group > div");
const getSearchInput = document.querySelector("input");

function filterElements(event) {
  if(getSearchInput.value === '') {
    getAllPosts.forEach(post => post.style.display = "block");
    return;
  } else {
    for(post of getAllPosts) {
      let title = post.querySelector("h2").innerText;
      let input = event.target.value;

      const [newTitle, newInput] = transformToLowerCase(title, input);

      if(!newTitle.includes(newInput)) {
        post.style.display = "none";
      } else {
        post.style.display = "block";
      }
    } 
  }
}

function transformToLowerCase(...texts) {
  return texts.map(text => text.toLowerCase());
}

getSearchInput.addEventListener("input", filterElements);