/** TODO: Build the navigation bar using JavaScript **/
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navBarItem = document.getElementById('navbar__list');
  
    sections.forEach(section => {
      const newListItem = document.createElement('li');
      newListItem.textContent = section.dataset.nav;
      newListItem.addEventListener('click', () => {
        section.scrollIntoView({ behavior: 'smooth' });
      });
      navBarItem.appendChild(newListItem);
    });

  const form = document.querySelector('.comment__form');
  form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    let Name = document.querySelector("#name").value;
    let comment = document.querySelector("#comment").value;
    let email = document.querySelector('#email').value

    const commentSection = document.querySelector('#comments');
    const newComment = document.createElement("div");

    newComment.classList.add("comment"); 
    newComment.innerHTML = `
    <p>${comment}</p>
    <p><strong>${Name}</strong> (${email})</p>`
    commentSection.appendChild(newComment);
    Name = '';
    comment= '';
});
function getSectionPosition(sections) {
  return sections.getBoundingClientRect();
}

function isSectionInViewport(sections) {
  const position = getSectionPosition(sections);
  return (position.top >= 0 && position.top <= window.innerHeight);
}


function toggleActiveClass() {
  sections.forEach(sections => {
      if (isSectionInViewport(sections)) {
          sections.classList.add('active');
      } else {
          sections.classList.remove('active');
      }
  });
}


window.addEventListener('scroll', toggleActiveClass);
})
  
  




