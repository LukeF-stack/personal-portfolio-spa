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
    project_img: null,
    project_icons: null,
    bio: `I am a passionate and driven developer, who loves to learn
    new things and challenge myself.
      To me, one of the greatest challenges and benefits of web development is the constantly
      changing and evolving landscape. I hope that my future endeavours in the web development
      industry allow me to learn new skills and find the most efficient and eloquent ways of
  implementing design solutions. Most importantly I'm a coffee addict, Treasure Planet enthusiast and I design my own tattoos`
    //secondaryContent: "This is secondary content."
  };
  //console.log("homepage");
  App.loadPage("home", "template-page-home", data, () => {
    //console.log("home");
    Waves.init();

    const nextBtn = document.createElement("h1");
    nextBtn.innerHTML = "❯";
    nextBtn.classList.add("next-btn", "subtle-shadow");
    document.querySelector(".landing-column_2").appendChild(nextBtn);
    for (let index = 0; index < Projects.length; index++) {
      let i = 0;
      let project = Projects[i];
      project["index"] = i;
      //console.log("project object is", project);
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
        document.querySelector(".column_2-container").style.opacity = 0;
        setTimeout(() => {
          setProject(project);
        }, 500);
      });
      return;
    }
  });

  function setProject(project) {
    data.project_title = project.title;
    data.project_subtitle = project.subtitle;
    data.project_img = project.img;
    data.project_icons = project.icons;
    data.project_id = project.id;

    document.querySelector(".project-description-icons").innerHTML = null;

    //console.log(data.project_icons);
    document.querySelector("#hero-project-title").innerHTML =
      data.project_title;
    document.querySelector("#hero-project-subtitle").innerHTML =
      data.project_subtitle;
    document.querySelector(".hero-project-img").src = data.project_img;
    if (data.project_icons !== null) {
      data.project_icons.forEach((icon) => {
        const iconImg = document.createElement("img");
        iconImg.classList.add("technologies-icon");
        iconImg.src = icon.src;
        document
          .querySelector(".project-description-icons")
          .appendChild(iconImg);
      });
    }

    const viewProjectBtn = document.querySelector(".view-project-btn");
    viewProjectBtn.href = `#${data.project_id}`;
    setTimeout(() => {
      document.querySelector(".column_2-container").style.opacity = 1;
    }, 800);
  }
}
export { homePageController };
