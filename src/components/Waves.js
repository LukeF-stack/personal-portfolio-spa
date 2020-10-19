const Waves = {
  init: () => {
    //const homepage_waves = document.querySelector(".waves");
    anime({
      targets: ".waves path",
      loop: true,
      duration: 15000,
      easing: "easeInOutSine",
      d: [
        {
          value:
            "M0 82.6554L107 122.388C213 162.12 296 245.732 509 206C722 166.267 688.5 122.388 959 43.5C1172 3.76773 1422.5 -18.5 1696 20.9999L1920 82.6554V556.703H1813C1759.69 556.703 1674.07 556.703 1580 556.703C1487.01 556.703 1385.88 556.703 1280 556.703C1067 556.703 853 556.703 640 556.703C427 556.703 213 556.703 107 556.703H0V82.6554Z"
        },
        {
          value:
            "M0 66.3767L107 106.109C213 145.841 268.343 44.2617 503.5 27.2213C814 4.72118 841.217 107.83 965 143C1280 232.5 1422.5 -34.7787 1696 4.72118L1920 66.3767V540.424H1813C1759.69 540.424 1674.07 540.424 1580 540.424C1487.01 540.424 1385.88 540.424 1280 540.424C1067 540.424 853 540.424 640 540.424C427 540.424 213 540.424 107 540.424H0V66.3767Z"
        },
        {
          value:
            "M0 45.6687L77 31C178 2.98697 302.702 -41.346 499.5 88.5C839 312.5 1038.5 212 1109 174C1628.12 -105.81 1552.5 168.487 1841.5 64.0001L1920 45.6687V519.716H1813C1759.69 519.716 1674.07 519.716 1580 519.716C1487.01 519.716 1385.88 519.716 1280 519.716C1067 519.716 853 519.716 640 519.716C427 519.716 213 519.716 107 519.716H0V45.6687Z"
        },
        {
          value:
            "M0 82.6554L107 122.388C213 162.12 296 245.732 509 206C722 166.267 688.5 122.388 959 43.5C1172 3.76773 1422.5 -18.5 1696 20.9999L1920 82.6554V556.703H1813C1759.69 556.703 1674.07 556.703 1580 556.703C1487.01 556.703 1385.88 556.703 1280 556.703C1067 556.703 853 556.703 640 556.703C427 556.703 213 556.703 107 556.703H0V82.6554Z"
        },
        {
          value:
            "M0 128.656L107 168.388C213 208.12 427 287.585 640 247.852C853 208.12 1067 50.561 1280 10.8287C1493 -28.9036 1707 50.561 1813 90.2933L1920 128.656V602.703H1813C1759.69 602.703 1674.07 602.703 1580 602.703C1487.01 602.703 1385.88 602.703 1280 602.703C1067 602.703 853 602.703 640 602.703C427 602.703 213 602.703 107 602.703H0V128.656Z"
        }
      ]
    });
  }
};

export { Waves };
