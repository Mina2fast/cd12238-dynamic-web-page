document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const navBarItem = document.getElementById('navbar__list');

  // Build navbar
  sections.forEach(section => {
    const newListItem = document.createElement('li');
    newListItem.textContent = section.dataset.nav;
    newListItem.addEventListener('click', () => {
      section.scrollIntoView({ behavior: 'smooth' });
    });
    navBarItem.appendChild(newListItem);
  });

  // Handle form submission
  const form = document.querySelector('.comment__form');
  form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    let name = document.querySelector('#name').value;
    let comment = document.querySelector('#comment').value;
    let email = document.querySelector('#email').value;

    if (!name || !comment || !email) {
      alert("All fields are required and email must be valid.");
      return;
    }

    const commentSection = document.querySelector('#comments');
    const newComment = document.createElement('div');

    newComment.classList.add('comment'); 
    newComment.innerHTML = `
    <p>${comment}</p>
    <p><strong>${name}</strong> (${email})</p>`;
    commentSection.appendChild(newComment);

    document.querySelector("#name").value = '';
    document.querySelector("#comment").value = '';
    document.querySelector('#email').value = '';
  });

  // Get section position
  function getSectionPosition(sections) {
    return sections.getBoundingClientRect();
  }

  // Check if section is in viewport
  function isSectionInViewport(sections) {
    const position = getSectionPosition(sections);
    return (position.top >= 0 && position.top <= window.innerHeight);
  }

  // Toggle 'active' class on sections
  function toggleActiveClass() {
    sections.forEach(section => {
      if (isSectionInViewport(section)) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', toggleActiveClass);
});
