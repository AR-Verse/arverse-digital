/* ==================================================
   ARVERSE — INDEPENDENT VISUAL EFFECTS SYSTEM
   COSMIC FIELD + COMETS + FOOTER CURSOR GLOW
================================================== */

(() => {

  const startEffects = () => {


    /* ==================================================
       01 — COSMIC PAGE DETECTION
    ================================================== */

    const cosmicPage =
      document.querySelector(
        ".wrk-page, .prt-page, .terms-page, .privacy-page, .thank-you-page, .intel-page, .contact-page, .pricing-page, .gas-section, .mas-section, .seo-section, .ecs-section, .bds-section, .pricing-page, .wps-section"
      );


    if (
      cosmicPage &&
      !document.querySelector(".arx-cosmos")
    ) {


      /* MAIN OVERLAY */

      const cosmos =
        document.createElement("div");


      cosmos.className =
        "arx-cosmos";


      cosmos.setAttribute(
        "aria-hidden",
        "true"
      );



      /* STAR FIELD */

      const starField =
        document.createElement("div");


      starField.className =
        "arx-star-field";


      const totalStars =
        window.innerWidth < 700
          ? 45
          : 95;


      for (
        let index = 0;
        index < totalStars;
        index++
      ) {

        const star =
          document.createElement("span");


        star.className =
          "arx-star";


        star.style.setProperty(
          "--arx-x",
          Math.random() * 100 + "%"
        );


        star.style.setProperty(
          "--arx-y",
          Math.random() * 100 + "%"
        );


        star.style.setProperty(
          "--arx-size",
          (
            Math.random() * 1.8 +
            .6
          ).toFixed(2) + "px"
        );


        star.style.setProperty(
          "--arx-opacity",
          (
            Math.random() * .6 +
            .2
          ).toFixed(2)
        );


        star.style.setProperty(
          "--arx-speed",
          (
            Math.random() * 4 +
            2
          ).toFixed(2) + "s"
        );


        star.style.setProperty(
          "--arx-delay",
          (
            Math.random() * -8
          ).toFixed(2) + "s"
        );


        starField.appendChild(
          star
        );

      }


      cosmos.appendChild(
        starField
      );



      /* COSMIC DUST */

      const dust =
        document.createElement("div");


      dust.className =
        "arx-dust";


      cosmos.appendChild(
        dust
      );



      /* COMETS */

      const cometSettings = [

        {
          className:
            "arx-comet arx-comet-one",

          delay:
            "1s",

          duration:
            "12s"
        },

        {
          className:
            "arx-comet arx-comet-two",

          delay:
            "5s",

          duration:
            "17s"
        },

        {
          className:
            "arx-comet arx-comet-three",

          delay:
            "10s",

          duration:
            "21s"
        }

      ];


      cometSettings.forEach(
        (settings) => {

          const comet =
            document.createElement("span");


          comet.className =
            settings.className;


          comet.style.animationDelay =
            settings.delay;


          comet.style.animationDuration =
            settings.duration;


          cosmos.appendChild(
            comet
          );

        }
      );


      document.body.prepend(
        cosmos
      );

    }



    /* ==================================================
       02 — FOOTER CURSOR GLOW
    ================================================== */

    const footer =
      document.querySelector(
        ".arf-footer"
      );


    if (footer) {


      let glow =
        footer.querySelector(
          ".arx-footer-glow"
        );


      if (!glow) {

        glow =
          document.createElement("div");


        glow.className =
          "arx-footer-glow";


        footer.prepend(
          glow
        );

      }



      let targetX = 0;
      let targetY = 0;

      let currentX = 0;
      let currentY = 0;

      let initialized = false;



      footer.addEventListener(
        "pointerenter",
        () => {

          glow.classList.add(
            "arx-glow-active"
          );

        }
      );



      footer.addEventListener(
        "pointermove",
        (event) => {

          const rect =
            footer.getBoundingClientRect();


          targetX =
            event.clientX -
            rect.left;


          targetY =
            event.clientY -
            rect.top;


          if (!initialized) {

            currentX =
              targetX;


            currentY =
              targetY;


            initialized = true;

          }

        }
      );



      footer.addEventListener(
        "pointerleave",
        () => {

          glow.classList.remove(
            "arx-glow-active"
          );

        }
      );



      const animateGlow =
        () => {


          if (initialized) {


            currentX +=
              (
                targetX -
                currentX
              ) * .1;


            currentY +=
              (
                targetY -
                currentY
              ) * .1;


            glow.style.transform =
              `
                translate3d(
                  ${currentX - 280}px,
                  ${currentY - 280}px,
                  0
                )
              `;

          }


          requestAnimationFrame(
            animateGlow
          );

        };


      animateGlow();

    }



    console.log(
      "[ARVERSE EFFECTS] Cosmic system and footer glow initialized."
    );

  };



  /* ==================================================
     SAFE INITIALIZATION
  ================================================== */

  if (
    document.readyState === "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      startEffects
    );

  } else {

    startEffects();

  }

})();
/* ==================================================
   02 — GLOBAL PAGE CURSOR GLOW
================================================== */

let pageGlow =
  document.querySelector(
    ".arx-page-glow"
  );


if (!pageGlow) {

  pageGlow =
    document.createElement("div");


  pageGlow.className =
    "arx-page-glow";


  document.body.appendChild(
    pageGlow
  );

}


/* TARGET POSITION */

let glowTargetX =
  window.innerWidth / 2;

let glowTargetY =
  window.innerHeight / 2;


/* CURRENT POSITION */

let glowCurrentX =
  glowTargetX;

let glowCurrentY =
  glowTargetY;


/* STATE */

let glowStarted = false;



/* POINTER MOVE */

window.addEventListener(
  "pointermove",
  (event) => {

    glowTargetX =
      event.clientX;


    glowTargetY =
      event.clientY;


    if (!glowStarted) {

      glowCurrentX =
        glowTargetX;


      glowCurrentY =
        glowTargetY;


      glowStarted = true;


      pageGlow.classList.add(
        "arx-page-glow-active"
      );

    }

  },
  {
    passive:true
  }
);



/* POINTER LEAVE WINDOW */

document.documentElement.addEventListener(
  "mouseleave",
  () => {

    pageGlow.classList.remove(
      "arx-page-glow-active"
    );

  }
);



/* POINTER ENTER WINDOW */

document.documentElement.addEventListener(
  "mouseenter",
  () => {

    if (glowStarted) {

      pageGlow.classList.add(
        "arx-page-glow-active"
      );

    }

  }
);



/* SMOOTH TRAILING LOOP */

const animatePageGlow =
  () => {


    glowCurrentX +=
      (
        glowTargetX -
        glowCurrentX
      ) * .075;


    glowCurrentY +=
      (
        glowTargetY -
        glowCurrentY
      ) * .075;



    pageGlow.style.transform =
      `
        translate3d(
          ${glowCurrentX - 320}px,
          ${glowCurrentY - 320}px,
          0
        )
      `;


    requestAnimationFrame(
      animatePageGlow
    );

  };


animatePageGlow();
/* =========================================================
   THANK YOU PAGE — COSMIC FALLBACK
========================================================= */

(() => {

  const thankPage =
    document.querySelector(
      ".thank-page"
    );


  if (!thankPage) {
    return;
  }


  if (
    document.querySelector(
      ".arx-cosmos"
    )
  ) {

    return;

  }


  const cosmos =
    document.createElement(
      "div"
    );


  cosmos.className =
    "arx-cosmos ty-cosmos";


  const starField =
    document.createElement(
      "div"
    );


  starField.className =
    "arx-star-field";


  for (
    let i = 0;
    i < 140;
    i++
  ) {

    const star =
      document.createElement(
        "span"
      );


    star.className =
      "arx-star";


    const size =
      Math.random() * 2.4 + 1;


    star.style.left =
      Math.random() * 100 + "%";


    star.style.top =
      Math.random() * 100 + "%";


    star.style.width =
      size + "px";


    star.style.height =
      size + "px";


    star.style.opacity =
      Math.random() * 0.7 + 0.2;


    star.style.animationDelay =
      Math.random() * 5 + "s";


    starField.appendChild(
      star
    );

  }


  const dust =
    document.createElement(
      "div"
    );


  dust.className =
    "arx-dust";


  const cometOne =
    document.createElement(
      "span"
    );


  cometOne.className =
    "arx-comet arx-comet-one";


  const cometTwo =
    document.createElement(
      "span"
    );


  cometTwo.className =
    "arx-comet arx-comet-two";


  const cometThree =
    document.createElement(
      "span"
    );


  cometThree.className =
    "arx-comet arx-comet-three";


  cosmos.appendChild(
    starField
  );


  cosmos.appendChild(
    dust
  );


  cosmos.appendChild(
    cometOne
  );


  cosmos.appendChild(
    cometTwo
  );


  cosmos.appendChild(
    cometThree
  );


  document.body.prepend(
    cosmos
  );


  console.log(
    "[ARVERSE THANK YOU] Cosmic fallback active."
  );

})();
/* =========================================================
   MOBILE COSMIC OPTIMIZATION
========================================================= */

(() => {

  if (
    window.innerWidth > 700
  ) {

    return;

  }


  const optimizeMobileCosmos =
    () => {


      const stars =
        document.querySelectorAll(
          ".arx-star-field span, .arx-star"
        );


      stars.forEach(
        (star, index) => {

          if (
            index > 45
          ) {

            star.remove();

          }

        }
      );


      document
        .querySelectorAll(
          ".arx-dust, .arx-page-glow"
        )
        .forEach(
          (effect) => {

            effect.remove();

          }
        );


      console.log(
        "[ARVERSE MOBILE] Performance mode active."
      );

    };


  if (
    document.readyState ===
    "loading"
  ) {


    document.addEventListener(
      "DOMContentLoaded",
      () => {

        setTimeout(
          optimizeMobileCosmos,
          50
        );

      }
    );


  } else {


    setTimeout(
      optimizeMobileCosmos,
      50
    );


  }

})();
/* =========================================================
   ARVERSE MOBILE COSMIC CLEANUP
   STATIC STARS + ANIMATED COMETS
========================================================= */

(() => {


  if (
    window.innerWidth > 768
  ) {

    return;

  }


  const cleanMobileCosmos =
    () => {


      const stars =
        document.querySelectorAll(
          ".arx-star-field span, .arx-star"
        );


      stars.forEach(
        (star, index) => {

          if (
            index >= 38
          ) {

            star.remove();

          }

        }
      );



      document
        .querySelectorAll(
          ".arx-dust, .arx-page-glow"
        )
        .forEach(
          (effect) => {

            effect.remove();

          }
        );


      console.log(
        "[ARVERSE MOBILE] Static stars and animated comets active."
      );

    };


  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      cleanMobileCosmos
    );

  } else {

    cleanMobileCosmos();

  }


})();