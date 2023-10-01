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

  //5.2 Attach a delegated 'click' event listener to topMenuEl.√
  //The first line of code of the event listener function should call the event object's preventDefault() method.√
  //The second line of code function should immediately return if the element clicked was not an <a> element. Hint: DOM elements have a tagName property.console.log the content of the <a> to verify the handler is working.√

  topMenuEl.addEventListener('click', function(evt) {
  evt.preventDefault();
  console.log(evt.target);
  const link = evt.target;
  if( link.tagName !=='a') return;
  console.log(link.textContent);
  });

  topMenuEl.addEventListener('click', function(evt) {
    evt.preventDefault();
    const link = evt.target;
    if (link.tagName !== 'A') return;
    console.log(link.textContent);

  //Progress Check Ensure that clicking ABOUT, CATALOG, etc. logs out about, catalog, etc. when a link is clicked Clicking anywhere other than on a link should do nothing thanks to the second line of code written in Task 5.2!

  //Task 5.3 This feature "deselects" the menu item if it's clicked when it's currently active, resulting in the sub-menu sliding up as well.

  //Next in the event listener, if the clicked <a> link has a class of active: Remove the active class from the clicked <a> element.√ Set the showingSubMenu to false.√ Set the CSS top property of subMenuEl to 0.√ return; from the event listener function.√

  if (link.classList.contains('active')) {
    link.classList.remove('active');
    showingSubMenu = false;
    subMenuEl.style.top = '0';
    return;
  }


// Task 5.1
const topMenuLinks = document.querySelectorAll('#top-menu a');
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





  //Task 5.4 At this point, a new menu item has been clicked and it's time to "reset" any currently active menu item.

  //Add code to the bottom of the the event listener that iterates over each <a> element in topMenuLinks and removes the class name of active, regardless of whether the <a> element has a class of active or not.//Hint: Removing a non-existent class from an element does not cause an error, so just remove it!





  //Task 5.5 Next, the event listener should add a class name of active to the <a> element that was clicked.

  //Task 5.6 Next, add code in the event listener that sets showingSubMenu to true if the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), otherwise, set it to false.

  //Hint: Saving the "link" object in a variable will come in handy for passing its subLinks array in Task 5.7

  //Progress Check Clicking any of the links should make that link "active" and clear the others: Clicking an "active" link should clear that link.

  //Task 5.7 Next in the event listener...If showingSubMenu is true:Call a buildSubMenu function passing to it the subLinks array for the clicked <a> element. Set the CSS top property of subMenuEl to 100%. Otherwise (showingSubMenu is false):Set the CSS top property of subMenuEl to 0.Since the About link has been clicked, set mainEl.innerHTML to '<h1>about</h1>'.
  //Task 5.8 Code the buildSubMenu function so that it:Clears the contents of subMenuEl. Iterates over the subLinks array passed as an argument; and for each "link" object: Create an <a> element. On the new element, add an href attribute with its value set to the href property of the "link" object. Set the new element's content to the value of the text property of the "link" object. Append the new element to the subMenuEl element.Progress Check. Take the menu for a test drive!

  //Task 6.0 Attach a delegated 'click' event listener to subMenuEl. The first line of code of the event listener function should call the event object's preventDefault() method.

  //The second line of code function should immediately return if the element clicked was not an <a> element. console.log the content of the <a> to verify the handler is working.

  //Task 6.1 Next, subMenuEl's event listener should: Set showingSubMenu to false. Set the CSS top property of subMenuEl to 0.

  //Task 6.2 Next, subMenuEl's event listener should remove the class name of active from each <a> element in topMenuLinks - whether the active class exists or not.

  //Task 6.3 Next, subMenuEl's event listener should update the contents of mainEl to the contents of the <a> element, within an <h1>, clicked within subMenuEl.
