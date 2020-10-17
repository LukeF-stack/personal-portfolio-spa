import { App } from "./../components/App.js";
//import { Notify } from "./../components/Notify.js";
//import { Modal } from "./../components/Modal.js";

function aboutPageController() {
  // alert("this is the home page");
  let data = {
    intro: "Welcome to the About page."
    //secondaryContent: "This is secondary content."
  };
  //console.log("homepage");
  App.loadPage("about", "template-page-about", data, () => {
    console.log("about");
  });
}
export { aboutPageController };
