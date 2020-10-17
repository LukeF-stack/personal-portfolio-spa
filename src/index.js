// Imports -- components ---------------------------------------------
import { App } from "/components/App.js";

// Imports -- pageControllers ----------------------------------------

import { homePageController } from "/page-controllers/home.js";

// Routes ---------------------------------------------
// # (home)
App.addRoute("#", homePageController);

document.addEventListener("DOMContentLoaded", App.init);
