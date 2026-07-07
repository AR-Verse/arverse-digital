/* =========================================================
   ARVERSE PROTOCOL — INTERACTIVE CORE
========================================================= */

(() => {

  const protocol =
    document.querySelector(
      ".prt-core-console"
    );


  if (!protocol) {
    return;
  }


  const phases =
    protocol.querySelectorAll(
      ".prt-phase"
    );


  const coreCode =
    document.getElementById(
      "prtCoreCode"
    );


  const coreIndex =
    document.getElementById(
      "prtCoreIndex"
    );


  const activeStatus =
    document.getElementById(
      "prtActiveStatus"
    );


  const activeTitle =
    document.getElementById(
      "prtActiveTitle"
    );


  const activeDescription =
    document.getElementById(
      "prtActiveDescription"
    );


  const progressText =
    document.getElementById(
      "prtProgressText"
    );


  const progressFill =
    document.getElementById(
      "prtProgressFill"
    );



  phases.forEach((phase) => {

    phase.addEventListener(
      "click",
      () => {


        phases.forEach((item) => {

          item.classList.remove(
            "active"
          );

        });


        phase.classList.add(
          "active"
        );



        const index =
          phase.getAttribute(
            "data-prt-index"
          );


        const code =
          phase.getAttribute(
            "data-prt-code"
          );


        const title =
          phase.getAttribute(
            "data-prt-title"
          );


        const status =
          phase.getAttribute(
            "data-prt-status"
          );


        const description =
          phase.getAttribute(
            "data-prt-description"
          );



        if (coreCode) {

          coreCode.textContent =
            code;

        }


        if (coreIndex) {

          coreIndex.textContent =
            index + " / 06";

        }


        if (activeStatus) {

          activeStatus.textContent =
            status;

        }


        if (activeTitle) {

          activeTitle.textContent =
            title;

        }


        if (activeDescription) {

          activeDescription.textContent =
            description;

        }


        if (progressText) {

          progressText.textContent =
            index + " / 06";

        }


        if (progressFill) {

          const numericIndex =
            Number(index);


          const progress =
            (
              numericIndex /
              6
            ) * 100;


          progressFill.style.width =
            progress + "%";

        }


      }
    );

  });


  console.log(
    "[ARVERSE PROTOCOL] Interactive core ready."
  );

})();