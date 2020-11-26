const Projects = [
  {
    title: "Powder Japan - React Web Application",
    id: "powder-japan",
    img: "/images/powder_japan_display.png",
    display_img: "/images/powder_japan_display.png",
    subtitle: "Full-Stack, React JS Single Page Application",
    case_img_1: "/images/powder_japan_case1.png",
    case_img_2: "/images/powder_japan_case2.png",
    link: {
      link: "https://powder-japan.netlify.app/",
      link_title: "See live website here"
    },
    frontend_repo: {
      link: "https://github.com/LukeF-stack/japan-powder-frontend",
      link_title: "Front End project repository"
    },
    backend_repo: {
      link: "https://github.com/LukeF-stack/japan-snow-backend",
      link_title: "Back End project repository"
    },
    description:
      "Powder Japan is a digital experience which helps users find out about snowboarding/skiing destinations in Japan. Its aim is to stimulate tourism in Japan, post COVID-19, through showcasing Japan's beautiful snow destinations.",
    technology_description:
      "Powder Japan is a Full-Stack web application and was created using a MERN stack (MongoDB, Express JS, React JS & Node.js). This project was the first time I've used React and I thoroughly enjoyed both the challenges involved and the outcomes that I reached. The project demonstrates CRUD funationality, allowing users to sign up, log in, read other users' reviews and create & edit their own. Users are also able to explore different destinations & resorts and can even view live weather and forecast information (sourced from a public weather API).",
    icons: [
      { src: "/images/react-icon.svg" },
      { src: "/images/nodejs-icon.svg" },
      { src: "/images/mongodb-icon.svg" }
    ]
  },
  {
    title: "Car Rental Web Application",
    id: "car-rental",
    cover_img: "/images/car_rental_cover.png",
    img: "/images/car_rental_display.png",
    display_img: "/images/car_rental_display.png",
    subtitle: "Full-Stack, Vanilla JS Single Page Application",
    case_img_1: "/images/car_rental_case1.png",
    case_img_2: "/images/car_rental_case2.png",
    link: {
      link: "https://car-rentals.netlify.app",
      link_title: "See live website here"
    },
    frontend_repo: {
      link: "https://github.com/LukeF-stack/car-rentals-frontend",
      link_title: "Front End project repository"
    },
    backend_repo: {
      link: "https://github.com/LukeF-stack/car-rentals-backend",
      link_title: "Back End project repository"
    },
    description:
      "Car Rentals is a concept project for a mock car rental company. The project allows users to filter through different rental cars by brand and 'book' cars, which adds their booking to the project database.",
    technology_description:
      "Car Rentals is a Full-Stack Single Page Application, created in Vanilla ES6 JavaScript and leverages Express JS, Node.js & MongoDB in the backend Rest API. The project demonstrates CRUD functionality; allowing users to sign up, log in, view cars & reviews, and create, edit & delete their own reviews",
    icons: [
      { src: "/images/js-icon.svg" },
      { src: "/images/nodejs-icon.svg" },
      { src: "/images/mongodb-icon.svg" }
    ]
  },

  {
    title: "Ducati Motorcycles - Concept Website",
    id: "ducati-motorcycles",
    img: "/images/ducati_website_display.png",
    display_img: "/images/ducati_website_display.png",
    subtitle: "Static HTML, CSS & jQuery Website",
    case_img_1: "/images/ducati_project_card.png",
    case_img_2: "/images/ducati_motorcycles_case2.png",
    description:
      "This project is a concept website for Ducati Motorcycles. The website is largely informational, providing the user with relevant technical information about each model of motorcycle and presenting the motorcycles in a visually striking & appealing way. Basic user interactions and transitions are implemented, using jQuery and CSS.",
    icons: [
      { src: "/images/html-icon.svg" },
      { src: "/images/css-icon.svg" },
      { src: "/images/jquery-icon.svg" }
    ],
    link: {
      link: "https://ducati-motorcycles-concept.netlify.app",
      link_title: "See live website here"
    }
  }
];

export { Projects };
