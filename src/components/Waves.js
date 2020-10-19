const Waves = {
  init: () => {
    //const homepage_waves = document.querySelector(".waves");
    anime({
      targets: ".waves path",
      loop: true,
      duration: 28000,
      easing: "linear",
      direction: "alternate",
      d: [
        {
          value:
            "M0 67.6554L123.5 106C340 142 434.5 60.1515 548 48C987 0.999912 923 265.888 1193.5 187C1406.5 147.268 1422.5 -33.5 1696 5.99991L1920 67.6554V541.703H1813C1759.69 541.703 1674.07 541.703 1580 541.703C1487.01 541.703 1385.88 541.703 1280 541.703C1067 541.703 853 541.703 640 541.703C427 541.703 213 541.703 107 541.703H0V67.6554Z"
        },

        {
          value:
            "M0 6.60752L107 46.3398C213 86.0721 493 46.3399 706 6.60757C1145 -40.3925 1212.5 205.388 1483 126.5C1696 86.7677 1813 46.3399 1813 46.3399L1920 6.60752V480.655H1813C1759.69 480.655 1674.07 480.655 1580 480.655C1487.01 480.655 1385.88 480.655 1280 480.655C1067 480.655 853 480.655 640 480.655C427 480.655 213 480.655 107 480.655H0V6.60752Z"
        },
        {
          value:
            "M0 45.6687L77 31C178 2.98697 302.702 -41.346 499.5 88.5C839 312.5 1038.5 212 1109 174C1628.12 -105.81 1552.5 168.487 1841.5 64.0001L1920 45.6687V519.716H1813C1759.69 519.716 1674.07 519.716 1580 519.716C1487.01 519.716 1385.88 519.716 1280 519.716C1067 519.716 853 519.716 640 519.716C427 519.716 213 519.716 107 519.716H0V45.6687Z"
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
