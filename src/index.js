import drawMain from "./home";
import './style.css';
 
const content = document.getElementById('content');

function drawNav() {
  const navbar = document.createElement('nav');
  navbar.classList = 'yellowbg';
  const navbar_ul = document.createElement('ul');
  const home_li = createLi('Home');
  home_li.classList.add('currentPage');
  const menu_li = createLi('Menu');
  const contacts_li = createLi('Contacts');

  navbar_ul.append(home_li, menu_li, contacts_li);
  navbar.appendChild(navbar_ul);
  content.appendChild(navbar);
}

function createLi(text) {
  const li = document.createElement("li");
  li.textContent = text;
  return li;
}

function drawFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('bluebg');
  footer.textContent = "@Trademark. 2023. All Rights Reserved.";
  content.appendChild(footer);
}

drawNav();
drawMain(content);
drawFooter();


