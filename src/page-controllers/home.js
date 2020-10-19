import { App } from "./../components/App.js";
//import { Notify } from "./../components/Notify.js";
//import { Modal } from "./../components/Modal.js";

function homePageController() {
  // alert("this is the home page");
  let data = {
    intro: "I create meaningful, digital experiences"
    //secondaryContent: "This is secondary content."
  };
  //console.log("homepage");
  App.loadPage("home", "template-page-home", data, () => {
    //console.log("home");
  });
}
export { homePageController };
