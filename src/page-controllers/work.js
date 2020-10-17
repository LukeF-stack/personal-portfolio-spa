import { App } from "./../components/App.js";
//import { Notify } from "./../components/Notify.js";
//import { Modal } from "./../components/Modal.js";

function workPageController() {
  // alert("this is the home page");
  let data = {
    intro: "Welcome to the Work page."
    //secondaryContent: "This is secondary content."
  };
  //console.log("homepage");
  App.loadPage("home", "template-page-work", data, () => {
    console.log("work");
  });
}
export { workPageController };
