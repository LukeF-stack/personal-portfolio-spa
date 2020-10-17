import { App } from "./../components/App.js";
//import { Notify } from "./../components/Notify.js";
//import { Modal } from "./../components/Modal.js";

function contactPageController() {
  // alert("this is the home page");
  let data = {
    intro: "Welcome to the Contact page."
    //secondaryContent: "This is secondary content."
  };
  //console.log("homepage");
  App.loadPage("contact", "template-page-contact", data, () => {
    console.log("contact");
  });
}
export { contactPageController };
