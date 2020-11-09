const Waves = {
  init: () => {
    //const homepage_waves = document.querySelector(".waves");
    anime({
      targets: ".waves path",
      loop: true,
      duration: 12000,
      easing: "linear",
      direction: "alternate",
      d: [
        {
          value:
            "M0 659.286V7.7858C0 7.7858 66.5 -20.995 537 32.9997C1007.5 86.9943 1257.5 223 1920 7.78588V659.286H0Z"
        },

        {
          value:
            "M0 652.162V0.662109C0 0.662109 105.5 154 670 59C1234.5 -36 1257.5 215.876 1920 0.662189V652.162H0Z"
        },
        {
          value:
            "M0 659.959V8.45889C0 8.45889 210 139.746 859 33.458C1508 -72.8302 1711.15 118.039 1920 8.45897V659.959H0Z"
        }
      ]
    });
  }
};

export { Waves };
