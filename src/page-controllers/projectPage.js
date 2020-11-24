import { App } from "./../components/App.js";
import { Projects } from "./../components/Projects.js";

function projectPageController() {
  const projectId = window.location.hash.split("#")[1];

  const currentProject = Projects.find(function (item) {
    return item.id === projectId;
  });

  //console.log("homepage");
  App.loadPage(
    `${currentProject.title}`,
    `template-page-${currentProject.id}`,
    currentProject,
    () => {
      //console.log("about");
      const iconDiv = document.querySelector(".project-description-icons");

      const iconObjs = currentProject.icons.forEach((icon) => {
        const iconImg = document.createElement("img");
        iconImg.src = icon.src;
        //console.log(iconImg);
        iconDiv.appendChild(iconImg);
      });
    }
  );
}
export { projectPageController };
