import { App } from "./../components/App.js";
import { Projects } from "./../components/Projects.js";

function projectPageController() {
  const projectId = window.location.hash.split("#")[1];

  const currentProject = Projects.find(function (item) {
    return item.id == projectId;
  });

  //console.log("homepage");
  App.loadPage(
    "about",
    `template-page-${currentProject.id}`,
    currentProject,
    () => {
      console.log("about");
    }
  );
}
export { projectPageController };
