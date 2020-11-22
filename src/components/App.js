// import * as typeformEmbed from "@typeform/embed";
//import { User } from "./User.js";
//import { Auth } from "./Auth.js";

//import { render } from "mustache";

//const Mustache = require("mustache");

const App = {
  // properties
  name: "Luke Fordham",
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
    document.getElementById("app").classList.add("hidden");
    setTimeout(() => {
      document.getElementById("app").classList.remove("hidden");
    }, 1000);
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
      App.loadFooter();
      App.loadContact();
      App.burgerListener();
      // run callback
      if (typeof callback === "function") {
        callback();
      }
    }, 300);
  },

  loadNav: () => {
    // get main nav div
    let mainNav = document.querySelector(".nav-links");
    let logo = document.querySelector("#logo");
    const logoBtn = document.createElement("a");
    logoBtn.href = "#";
    logoBtn.classList.add("nav-logo", "subtle-shadow");
    logo.appendChild(logoBtn);
    const logoImg = document.createElement("img");
    logoImg.src = "/images/logo.svg";
    logoBtn.appendChild(logoImg);
    const homeBtn = document.createElement("a");
    homeBtn.href = "#";
    homeBtn.innerText = "Home";
    mainNav.appendChild(homeBtn);
    const workBtn = document.createElement("a");
    workBtn.href = "#work";
    workBtn.innerText = "Work";
    mainNav.appendChild(workBtn);
    // const aboutBtn = document.createElement("a");
    // aboutBtn.href = "#about";
    // aboutBtn.innerText = "About";
    // mainNav.appendChild(aboutBtn);
    const contactBtn = document.createElement("a");
    contactBtn.href = "#contact";
    contactBtn.innerText = "Contact";
    mainNav.appendChild(contactBtn);

    const socialsDiv = document.createElement("div");
    socialsDiv.classList.add("socials");
    App.rootEl.appendChild(socialsDiv);

    const linkedinBtn = document.createElement("a");
    linkedinBtn.classList.add("social-btn");
    linkedinBtn.href = "https://www.linkedin.com/in/luke-fordham-5411451b5/";
    socialsDiv.appendChild(linkedinBtn);
    const linkedinIcon = document.createElement("img");
    linkedinIcon.src = "/images/linkedin-icon.svg";
    linkedinBtn.appendChild(linkedinIcon);

    const behanceBtn = document.createElement("a");
    behanceBtn.classList.add("social-btn");
    behanceBtn.href = "https://www.behance.com/lukefordham1";
    socialsDiv.appendChild(behanceBtn);
    const behanceIcon = document.createElement("img");
    behanceIcon.src = "/images/behance-icon.svg";
    behanceBtn.appendChild(behanceIcon);

    const dribbbleBtn = document.createElement("a");
    dribbbleBtn.classList.add("social-btn");
    dribbbleBtn.href = "https://www.dribbble.com/lukefordham-design";
    socialsDiv.appendChild(dribbbleBtn);
    const dribbbleIcon = document.createElement("img");
    dribbbleIcon.src = "/images/dribbble-icon.svg";
    dribbbleBtn.appendChild(dribbbleIcon);

    const igBtn = document.createElement("a");
    igBtn.classList.add("social-btn");
    igBtn.href = "https://www.instagram.com/lukefordham.design";
    socialsDiv.appendChild(igBtn);
    const igIcon = document.createElement("img");
    igIcon.src = "/images/ig-icon.svg";
    igBtn.appendChild(igIcon);

    // const twitterBtn = document.createElement("a");
    // twitterBtn.classList.add("social-btn");
    // twitterBtn.href = "https://www.twitter.com";
    // socialsDiv.appendChild(twitterBtn);
    // const twitterIcon = document.createElement("img");
    // twitterIcon.src = "/images/twitter-icon.svg";
    // twitterBtn.appendChild(twitterIcon);

    App.refreshNav();
  },

  refreshNav: () => {
    // get current path
    let currentPath = window.location.hash || "#";
    let navItems = document.querySelectorAll(".nav-links > a");
    navItems.forEach((navLink) => {
      if (navLink.getAttribute("href") === currentPath) {
        navLink.classList.add("active");
      }
    });
  },

  loadFooter: () => {
    if (document.querySelector("footer")) {
      const footer = document.querySelector("footer");
      const creditsDiv = document.createElement("div");
      creditsDiv.classList.add("credits");
      creditsDiv.innerHTML = "<p>&#xa9; &nbsp; 2020 • Luke Fordham</p>";
      footer.appendChild(creditsDiv);

      //socials

      const socialsDiv = document.createElement("div");
      socialsDiv.classList.add("socials-footer");
      footer.appendChild(socialsDiv);

      const linkedinBtn = document.createElement("a");
      linkedinBtn.classList.add("social-btn", "social-dark");
      linkedinBtn.href = "https://www.linkedin.com/in/luke-fordham-5411451b5/";
      socialsDiv.appendChild(linkedinBtn);
      const linkedinIcon = document.createElement("img");
      linkedinIcon.src = "/images/linkedin-icon.svg";
      linkedinBtn.appendChild(linkedinIcon);

      const behanceBtn = document.createElement("a");
      behanceBtn.classList.add("social-btn", "social-dark");
      behanceBtn.href = "https://www.behance.com/lukefordham1";
      socialsDiv.appendChild(behanceBtn);
      const behanceIcon = document.createElement("img");
      behanceIcon.src = "/images/behance-icon.svg";
      behanceBtn.appendChild(behanceIcon);

      const dribbbleBtn = document.createElement("a");
      dribbbleBtn.classList.add("social-btn", "social-dark");
      dribbbleBtn.href = "https://www.dribbble.com/lukefordham-design";
      socialsDiv.appendChild(dribbbleBtn);
      const dribbbleIcon = document.createElement("img");
      dribbbleIcon.src = "/images/dribbble-icon.svg";
      dribbbleBtn.appendChild(dribbbleIcon);

      const igBtn = document.createElement("a");
      igBtn.classList.add("social-btn", "social-dark");
      igBtn.href = "https://www.instagram.com/lukefordham.design";
      socialsDiv.appendChild(igBtn);
      const igIcon = document.createElement("img");
      igIcon.src = "/images/ig-icon.svg";
      igBtn.appendChild(igIcon);

      // const twitterBtn = document.createElement("a");
      // twitterBtn.classList.add("social-btn", "social-dark");
      // twitterBtn.href = "https://www.twitter.com";
      // socialsDiv.appendChild(twitterBtn);
      // const twitterIcon = document.createElement("img");
      // twitterIcon.src = "/images/twitter-icon.svg";
      // twitterBtn.appendChild(twitterIcon);
    }
  },

  loadContact: () => {
    if (document.querySelector(".contact-section")) {
      typeformEmbed.makeWidget(
        document.querySelector(".contact-section"),
        "https://lukefordham01.typeform.com/to/VCWxNxsP",
        {
          opacity: 0
        }
      );
    }
  },

  burgerListener: () => {
    const burger = document.querySelector(".burger");
    if (burger) {
      burger.addEventListener("click", () => {
        const lines = document.getElementsByClassName("burger-line");
        lines.forEach((line) => {
          line.classList.toggle("line-true");
        });
        document.querySelector("#main-nav").classList.toggle("show");
      });
    }
  }
};

export { App };
