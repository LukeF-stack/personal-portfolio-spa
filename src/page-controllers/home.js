import { App } from "./../components/App.js";
import { Waves } from "./../components/Waves.js";
import { Projects } from "./../components/Projects.js";
//import { Notify } from "./../components/Notify.js";
//import { Modal } from "./../components/Modal.js";

function homePageController() {
  // alert("this is the home page");
  let data = {
    intro: "I create meaningful, digital experiences",
    project_title: null,
    project_subtitle: null,
    project_img: null
    //secondaryContent: "This is secondary content."
  };
  //console.log("homepage");
  App.loadPage("home", "template-page-home", data, () => {
    //console.log("home");
    Waves.init();

    const nextBtn = document.createElement("h1");
    nextBtn.innerHTML = "&#10140;";
    nextBtn.classList.add("next-btn", "subtle-shadow");
    document.querySelector(".landing-column_2").appendChild(nextBtn);
    for (let index = 0; index < Projects.length; index++) {
      let i = 0;
      let project = Projects[i];
      project["index"] = i;
      //console.log(project);
      setProject(project);
      nextBtn.addEventListener("click", () => {
        if (i < Projects.length - 1) {
          i += 1;
        } else {
          i = 0;
        }
        project = Projects[i];
        project["index"] = i;
        console.log(project);
        setProject(project);
      });
      return;
    }
  });

  function setProject(project) {
    data.project_title = project.title;
    data.project_subtitle = project.subtitle;
    data.project_img = project.img;

    document.querySelector("#hero-project-title").innerHTML =
      data.project_title;
    document.querySelector("#hero-project-subtitle").innerHTML =
      data.project_subtitle;
    document.querySelector(".hero-project-img").src = data.project_img;
  }
}
export { homePageController };
