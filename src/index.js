// Imports -- components ---------------------------------------------
import { App } from "/components/App.js";

// Imports -- pageControllers ----------------------------------------

import { homePageController } from "/page-controllers/home.js";

import { workPageController } from "/page-controllers/work.js";

import { aboutPageController } from "/page-controllers/about.js";

import { contactPageController } from "/page-controllers/contact.js";

// Routes ---------------------------------------------
// # (home)
App.addRoute("#", homePageController);
// #work
App.addRoute("#work", workPageController);
// #about
App.addRoute("#about", aboutPageController);
// #contact
App.addRoute("#contact", contactPageController);

document.addEventListener("DOMContentLoaded", App.init);
