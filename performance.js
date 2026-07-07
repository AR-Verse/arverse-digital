/* =========================================================
   ARVERSE — SAFE PERFORMANCE SYSTEM
========================================================= */

(() => {

  const startPerformanceSystem = () => {

    const root =
      document.documentElement;


    /* =====================================================
       DEVICE DETECTION
    ===================================================== */

    const isMobile =
      window.matchMedia(
        "(max-width: 700px)"
      ).matches;


    const isTouch =
      window.matchMedia(
        "(pointer: coarse)"
      ).matches;


    if (isMobile) {

      root.classList.add(
        "arv-mobile-performance"
      );

    }


    if (
      isTouch &&
      window.innerWidth <= 900
    ) {

      root.classList.add(
        "arv-low-power"
      );

    }



    /* =====================================================
       PAGE VISIBILITY
    ===================================================== */

    document.addEventListener(
      "visibilitychange",
      () => {

        root.classList.toggle(
          "arv-page-hidden",
          document.hidden
        );

      }
    );



    /* =====================================================
       SCROLL STATE
    ===================================================== */

    let scrollTimer;


    window.addEventListener(
      "scroll",
      () => {

        root.classList.add(
          "arv-is-scrolling"
        );


        clearTimeout(
          scrollTimer
        );


        scrollTimer =
          setTimeout(
            () => {

              root.classList.remove(
                "arv-is-scrolling"
              );

            },
            160
          );

      },
      {
        passive:true
      }
    );



    /* =====================================================
       SAFE RESIZE STATE
    ===================================================== */

    let resizeTimer;


    window.addEventListener(
      "resize",
      () => {

        clearTimeout(
          resizeTimer
        );


        resizeTimer =
          setTimeout(
            () => {

              root.classList.toggle(
                "arv-mobile-performance",
                window.innerWidth <= 700
              );

            },
            200
          );

      },
      {
        passive:true
      }
    );


    console.log(
      "[ARVERSE PERFORMANCE] Safe optimization initialized."
    );

  };


  if (
    document.readyState === "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      startPerformanceSystem
    );

  } else {

    startPerformanceSystem();

  }

})();