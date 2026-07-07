/* =========================================================
   ARVERSE INTELLIGENCE — OBSERVATORY INTERACTIONS
========================================================= */

(() => {

  const observatory =
    document.querySelector(
      ".intel-observatory"
    );


  if (!observatory) {
    return;
  }


  const lenses =
    observatory.querySelectorAll(
      ".intel-lens"
    );


  const coreCode =
    document.getElementById(
      "intelCoreCode"
    );


  const coreIndex =
    document.getElementById(
      "intelCoreIndex"
    );


  const activeCode =
    document.getElementById(
      "intelActiveCode"
    );


  const activeTitle =
    document.getElementById(
      "intelActiveTitle"
    );


  const activeDescription =
    document.getElementById(
      "intelActiveDescription"
    );


  const signalOne =
    document.getElementById(
      "intelSignalOne"
    );


  const valueOne =
    document.getElementById(
      "intelValueOne"
    );


  const signalTwo =
    document.getElementById(
      "intelSignalTwo"
    );


  const valueTwo =
    document.getElementById(
      "intelValueTwo"
    );


  const signalThree =
    document.getElementById(
      "intelSignalThree"
    );


  const valueThree =
    document.getElementById(
      "intelValueThree"
    );



  lenses.forEach((lens) => {

    lens.addEventListener(
      "click",
      () => {


        lenses.forEach((item) => {

          item.classList.remove(
            "active"
          );

        });


        lens.classList.add(
          "active"
        );



        const code =
          lens.getAttribute(
            "data-intel-code"
          );


        const index =
          lens.getAttribute(
            "data-intel-index"
          );


        const title =
          lens.getAttribute(
            "data-intel-title"
          );


        const description =
          lens.getAttribute(
            "data-intel-description"
          );



        if (coreCode) {

          coreCode.textContent =
            code;

        }


        if (coreIndex) {

          coreIndex.textContent =
            index + " / 05";

        }


        if (activeCode) {

          activeCode.textContent =
            "LENS // " + index;

        }


        if (activeTitle) {

          activeTitle.textContent =
            title;

        }


        if (activeDescription) {

          activeDescription.textContent =
            description;

        }



        if (signalOne) {

          signalOne.textContent =
            lens.getAttribute(
              "data-intel-signal-one"
            );

        }


        if (valueOne) {

          valueOne.textContent =
            lens.getAttribute(
              "data-intel-value-one"
            );

        }


        if (signalTwo) {

          signalTwo.textContent =
            lens.getAttribute(
              "data-intel-signal-two"
            );

        }


        if (valueTwo) {

          valueTwo.textContent =
            lens.getAttribute(
              "data-intel-value-two"
            );

        }


        if (signalThree) {

          signalThree.textContent =
            lens.getAttribute(
              "data-intel-signal-three"
            );

        }


        if (valueThree) {

          valueThree.textContent =
            lens.getAttribute(
              "data-intel-value-three"
            );

        }


        const activePanel =
          observatory.querySelector(
            ".intel-active-panel"
          );


        if (activePanel) {

          activePanel.animate(

            [
              {
                opacity:.35,
                transform:
                  "translateY(10px)"
              },

              {
                opacity:1,
                transform:
                  "translateY(0)"
              }
            ],

            {
              duration:450,

              easing:
                "cubic-bezier(.16,1,.3,1)"
            }

          );

        }


      }
    );

  });


  console.log(
    "[ARVERSE INTELLIGENCE] Observatory ready."
  );

})();