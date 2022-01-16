/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 * 
 */
const navbarSections = document.querySelectorAll('section');
const a = document.createElement('a'); // creates 'a' tag
const li = document.createElement('li'); // creates 'li' tag

/**
 * End Global Variables
 * Start Helper Functions
 * 
 */

/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav
function navbar() {
    for (i of navbarSections) { // loop through all the sections on the page
        const sectionDataNav = i.getAttribute('data-nav')
        const section = i.getAttribute('id')
        // from Udacity 'Creating Content with Javascript' section 3, 'Add New Page Content'
        // also referenced from https://stackoverflow.com/questions/21977349/javascript-cant-add-href-to-list-item
        const a = document.createElement('a'); // creates 'a' tag
        const li = document.createElement('li'); // creates 'li' tag
        const linkText = document.createTextNode(sectionDataNav); //creates the text for the navbar
        a.appendChild(linkText); //attaches text to the a tag
        a.setAttribute('href', '#' + section); // assigns values to the a tag, hash is necessary to link within page
        li.classList.add('menu__link'); // referenced from https://www.w3schools.com/howto/howto_js_add_class.asp
        a.classList.add('menu__link') // referenced from https://www.w3schools.com/howto/howto_js_add_class.asp
        li.appendChild(a); // adds the a tag into the li tag

        document.getElementById('navbar__list').appendChild(li); // adds the li tag into the unordered list with id 'navbar__list'.
        scroll(li, i) // with help from https://knowledge.udacity.com/questions/779725
    }
}


// Add class 'active' to section when near top of viewport

//checks if element is in the viewport
const isInViewport = function(elem) { // I got this function from https://gomakethings.com/how-to-test-if-an-element-is-in-the-viewport-with-vanilla-javascript/
    const bounding = elem.getBoundingClientRect();
    return (
        bounding.top <= 150 && // numeric values with help from https://knowledge.udacity.com/questions/85408#96950
        bounding.left >= 0 &&
        bounding.bottom >= 150 && // numeric values with help from https://knowledge.udacity.com/questions/85408#96950
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};
// from Udacity 'Working With Browser Events' 'Respond to Events' and w3schools.com/jsref/met_document_addeventlistener.asp
// also https://knowledge.udacity.com/questions/85408
document.addEventListener('scroll', activeClass);

// sets "your-active-class" if the element is inside of the viewport
function activeClass() {
    if (isInViewport(section1)) { // if section 1 is in the viewport
        section1.classList.add("your-active-class"); // add the class
    } else {
        section1.classList.remove("your-active-class"); // otherwise remove the class
    }
    if (isInViewport(section2)) { // if section 2 is in the viewport
        section2.classList.add("your-active-class"); // add the class
    } else {
        section2.classList.remove("your-active-class"); // otherwise remove the class
    }
    if (isInViewport(section3)) { // if section 3 is in the viewport
        section3.classList.add("your-active-class"); // add the class
    } else {
        section3.classList.remove("your-active-class"); // otherwise remove the class
    }
    if (isInViewport(section4)) { // if section 4 is in the viewport
        section4.classList.add("your-active-class"); // add the class
    } else {
        section4.classList.remove("your-active-class"); // otherwise remove the class
    }
}

//build a scroll function
// with help from Udacity mentor https://knowledge.udacity.com/questions/779725 and https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link
function scroll(a, section) {
    a.addEventListener("click", function(e) {
        e.preventDefault();
        section.scrollIntoView({
            behavior: "smooth"
        })
    })
}

/**
 * End Main Functions
 * Begin Events
 * 
 */


navbar()