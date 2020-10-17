//import { Notify } from "./Notify.js";
//import { User } from "./User.js";
//import { Auth } from "./Auth.js";

//import { render } from "mustache";

//const Mustache = require("mustache");

const App = {
  // properties
  name: "Booklist App",
  version: "1.0.0",
  author: "Luke Fordham",
  rootEl: document.querySelector("#app"),
  routes: {},

  // methods

  init: () => {
    //Notify.init();
    //console.log("init");
    App.router();
    // listen for hash change and run App.router
    window.addEventListener("hashchange", App.router);
    /*Auth.check(() => {

    });*/
  },

  addRoute: (path, pageController) => {
    // adding an entry to App.routes
    App.routes[path] = {
      controller: pageController
    };
  },

  router: () => {
    //console.log("router");
    // get the current hash location
    const path = window.location.hash || "#";
    // find route for this path in App.routes
    const route = App.routes[path];
    // if routes exists for this path
    if (route) {
      // run the route.contorller
      //console.log("exists");
      route.controller();
    } else {
      // load 404 page
      //console.log("doesn't exist");
      App.loadPage("404 page/file not found", "template-page-404", {});
    }
  },

  loadPage: (title, templateId, data, callback) => {
    // set document title
    document.title = title;
    // grab the template and store in a variable
    let template = document.querySelector(`#${templateId}`).innerHTML;
    //console.log(template);
    let output = Mustache.render(template, data);
    // insert the output HTML into the rootEl
    //console.log("output is", output);
    //App.rootEl.innerHTML = output;

    // fade out app div
    App.rootEl.classList.add("hidden");
    // load in new HTML and fade in
    setTimeout(() => {
      //console.log("timeout");
      App.rootEl.innerHTML = output;
      App.rootEl.classList.remove("hidden");
      App.loadNav();
      App.refreshNav();
      // run callback
      if (typeof callback === "function") {
        callback();
      }
    }, 300);
  },

  loadNav: () => {
    // get main nav div
    let mainNav = document.querySelector("#main-nav");
    const homeBtn = document.createElement("a");
    homeBtn.href = "#";
    homeBtn.innerText = "Home";
    mainNav.appendChild(homeBtn);
    const booksBtn = document.createElement("a");
    booksBtn.href = "#books";
    booksBtn.innerText = "Books";
    mainNav.appendChild(booksBtn);
    const signupBtn = document.createElement("a");
    signupBtn.href = "#signup";
    signupBtn.innerText = "Sign Up";
    mainNav.appendChild(signupBtn);
    const signinBtn = document.createElement("a");
    signinBtn.href = "#signin";
    signinBtn.innerText = "Sign In";
    mainNav.appendChild(signinBtn);
    /*
    if (Auth.authenticated === true) {
      const favsBtn = document.createElement("a");
      favsBtn.href = "#favourites";
      favsBtn.innerText = "Favourites";
      mainNav.appendChild(favsBtn);
      const favsCountBtn = document.createElement("span");
      favsCountBtn.id = "favs-count";
      favsBtn.appendChild(favsCountBtn);
      const signoutBtn = document.createElement("a");
      signoutBtn.href = "#signout";
      signoutBtn.innerText = "Sign Out";
      mainNav.appendChild(signoutBtn);
      User.updateFavsCount();
    } else {
      const signupBtn = document.createElement("a");
      signupBtn.href = "#signup";
      signupBtn.innerText = "Sign Up";
      mainNav.appendChild(signupBtn);
      const signinBtn = document.createElement("a");
      signinBtn.href = "#signin";
      signinBtn.innerText = "Sign In";
      mainNav.appendChild(signinBtn);
    } */
    App.refreshNav();
  },

  refreshNav: () => {
    // get current path
    let currentPath = window.location.hash || "#";
    let navItems = document.querySelectorAll("#main-nav > a");
    navItems.forEach((navLink) => {
      if (navLink.getAttribute("href") === currentPath) {
        navLink.classList.add("active");
      }
    });
  }
};

export { App };
