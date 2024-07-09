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
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    let Name = document.querySelector("#name").value;
    let comment = document.querySelector("#comment").value;

    const commentSection = document.querySelector('#comments');
    const newComment = document.createElement("div");

    newComment.classList.add("comment"); // Add class without the #
    newComment.innerHTML = `
    <p>${comment}</p>
    <strong>${Name}</strong>`; // Directly use <strong>

    commentSection.appendChild(newComment);
    Name = '';
    comment= '';
});
})
  
  


/** TODO: Add an active state **/


