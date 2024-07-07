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
  });
  
  
  
/** TODO: Add smooth scrolling **/

/** TODO: Add an active state **/

/** TODO: Add a comment form **/
