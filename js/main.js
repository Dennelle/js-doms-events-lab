// Task 3.0 Copy the following data structure to the top of script.js:
const menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

//Task 1.0 Select and cache the <main> element in a variable named mainEl.√
const mainEl = document.querySelector("main")
//console.log(mainEl)

// Task 1.1 Set the background color of mainEl using the --main-bg CSS custom property. Hint: Assign a string that uses the CSS var() function like this:'var(--main-bg)' √
mainEl.style.backgroundColor = 'var(--main-bg)'

// Task 1.2
// Set the content of mainEl to <h1>SEI Rocks!</h1>.√
const h1 = document.createElement('h1')
h1.textContent = 'SEI Rocks!'
mainEl.appendChild(h1)
//console.log(h1)

// Task 1.3 Add a class of flex-ctr to mainEl. Hint: Element.classList API √

mainEl.classList.add('flex-ctr')
//console.log(mainEl)
mainEl.style.textAlign = 'center'

// Task 2.0 - Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.√
const topMenuEl = document.querySelector('#top-menu')
//console.log(topMenuEl);

// Task 2.1 - Set the height topMenuEl element to be 100%. √
topMenuEl.style.height = "100%"

// Task 2.2 - Set the background color of topMenuEl using the --top-menu-bg CSS custom property. √
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'

// Task 2.3 - Add a class of flex-around to topMenuEl.√
topMenuEl.classList.add('flex-around')

// Task 3.1 - Iterate over the entire menuLinks array and for each "link" object: Create an <a> element. √ On the new element, add an href attribute with its value set to the href property of the "link" object.√
// Set the new element's content to the value of the text property of the "link" object.√
//console.log(anchorEl)√
// Append the new element to the topMenuEl element.

menuLinks.forEach(function(link) {
  const linkEl = document.createElement('a');
  linkEl.setAttribute('href', link.href);
  linkEl.textContent = link.text;
  topMenuEl.appendChild(linkEl);
});

//4.0 Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.√
const subMenuEl = document.querySelector('#sub-menu');

//4.1 Set the height subMenuEl element to be 100%. √
subMenuEl.style.height = '100%';
//console.log(subMenuEl)

//4.2 Set the background color of subMenuEl using the --sub-menu-bg CSS custom property. √
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

//4.3 Add the class of flex-around to the subMenuEl element. √
subMenuEl.classList.add('flex-around');

//4.4 Set the CSS position property of subMenuEl to the value of absolute. √
subMenuEl.style.position = 'absolute';

//4.5 Set the CSS top property of subMenuEl to the value of 0.√
subMenuEl.style.top = '0';

//5.0 Replace the menuLinks array in script.js with this version that adds sub-menu data. √

//5.1 Select and cache all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.√
const topMenuLinks = document.querySelectorAll('#top-menu a');

//Declare a global showingSubMenu variable and initialize it to false;√
let showingSubMenu = false;

// Task 5.2
topMenuEl.addEventListener('click', function(evt) {
  evt.preventDefault();
  const link = evt.target;
  if (link.tagName !== 'A') return;
  console.log(link.textContent);
  // Task 5.3
  if (link.classList.contains('active')) {
    link.classList.remove('active');
    showingSubMenu = false;
    subMenuEl.style.top = '0';
    return;
  }
  // Task 5.4
  topMenuLinks.forEach(function(link) {
    link.classList.remove('active');
  });
  // Task 5.5
  link.classList.add('active');
  // Task 5.6
  const linkData = menuLinks.find(function(linkObj) {
    return linkObj.text === link.textContent;
  });
  showingSubMenu = 'subLinks' in linkData;
  // Task 6.4
  // Task 5.7
  if (showingSubMenu) {
    buildSubMenu(linkData.subLinks);
    subMenuEl.style.top = '100%';
  } else {
    subMenuEl.style.top = '0';
    mainEl.innerHTML = '<h1>about</h1>';
  }
});

// Task 5.8
function buildSubMenu(subLinks) {
  subMenuEl.innerHTML = '';
  subLinks.forEach(function(link) {
    const linkEl = document.createElement('a');
    linkEl.setAttribute('href', link.href);
    linkEl.textContent = link.text;
    subMenuEl.appendChild(linkEl);
  });
}

// Task 6.0
subMenuEl.addEventListener('click', function(evt) {
  evt.preventDefault();
  const link = evt.target;
  if (link.tagName !== 'A') return;
  console.log(link.textContent);
  // Task 6.1
  showingSubMenu = false;
  subMenuEl.style.top = '0';
  // Task 6.2
  topMenuLinks.forEach(function(link) {
    link.classList.remove('active');
  });
  // Task 6.3
  mainEl.innerHTML = `<h1>${link.textContent}</h1>`;
});


