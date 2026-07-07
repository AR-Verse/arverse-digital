/* =========================================================
   ARVERSE PRICING — ENGAGEMENT MODEL SELECTOR
========================================================= */

(() => {

  const consoleElement =
    document.querySelector(
      ".pea-console"
    );


  if (!consoleElement) {
    return;
  }


  const models =
    consoleElement.querySelectorAll(
      ".pea-model"
    );


  const coreCode =
    document.getElementById(
      "peaCoreCode"
    );


  const coreIndex =
    document.getElementById(
      "peaCoreIndex"
    );


  const title =
    document.getElementById(
      "peaActiveTitle"
    );


  const subtitle =
    document.getElementById(
      "peaActiveSubtitle"
    );


  const description =
    document.getElementById(
      "peaActiveDescription"
    );


  const duration =
    document.getElementById(
      "peaDuration"
    );


  const mode =
    document.getElementById(
      "peaMode"
    );


  const fit =
    document.getElementById(
      "peaFit"
    );


  const output =
    document.getElementById(
      "peaOutput"
    );



  models.forEach((model) => {

    model.addEventListener(
      "click",
      () => {


        models.forEach((item) => {

          item.classList.remove(
            "active"
          );

        });


        model.classList.add(
          "active"
        );



        const codeValue =
          model.getAttribute(
            "data-pea-code"
          );


        const indexValue =
          model.getAttribute(
            "data-pea-index"
          );



        coreCode.textContent =
          codeValue;


        coreIndex.textContent =
          indexValue + " / 03";


        title.textContent =
          model.getAttribute(
            "data-pea-title"
          );


        subtitle.textContent =
          model.getAttribute(
            "data-pea-subtitle"
          );


        description.textContent =
          model.getAttribute(
            "data-pea-description"
          );


        duration.textContent =
          model.getAttribute(
            "data-pea-duration"
          );


        mode.textContent =
          model.getAttribute(
            "data-pea-mode"
          );


        fit.textContent =
          model.getAttribute(
            "data-pea-fit"
          );


        output.textContent =
          model.getAttribute(
            "data-pea-output"
          );


        const panel =
          consoleElement.querySelector(
            ".pea-active-panel"
          );


        if (panel) {

          panel.animate(

            [
              {
                opacity:.35,
                transform:"translateY(10px)"
              },

              {
                opacity:1,
                transform:"translateY(0)"
              }
            ],

            {
              duration:420,

              easing:
                "cubic-bezier(.16,1,.3,1)"
            }

          );

        }


      }
    );

  });


  console.log(
    "[ARVERSE PRICING] Engagement selector ready."
  );

})();
/* =========================================================
   ARVERSE — REGIONAL PRICING ENGINE
========================================================= */

/* =========================================================
   ARVERSE PRICING — REGION SWITCHER
========================================================= */

(() => {


  const regionButtons =
    document.querySelectorAll(
      ".prm-region-btn"
    );


  const prices =
    document.querySelectorAll(
      ".prm-price"
    );


  if (
    regionButtons.length === 0 ||
    prices.length === 0
  ) {

    return;

  }



  const market =
    document.getElementById(
      "prmActiveMarket"
    );


  const currency =
    document.getElementById(
      "prmActiveCurrency"
    );


  const model =
    document.getElementById(
      "prmActiveModel"
    );



  function switchRegion(region) {


    /* =========================================
       ACTIVE BUTTON
    ========================================= */

    regionButtons.forEach(
      (button) => {


        const isActive =
          button.dataset.region === region;


        button.classList.toggle(
          "active",
          isActive
        );


        button.setAttribute(
          "aria-pressed",
          String(isActive)
        );


      }
    );



    /* =========================================
       UPDATE PRICES
    ========================================= */

    prices.forEach(
      (price) => {


        const newPrice =
          region === "pk"
            ? price.dataset.pk
            : price.dataset.intl;


        if (newPrice) {

          price.textContent =
            newPrice;

        }


      }
    );



    /* =========================================
       UPDATE MARKET PANEL
    ========================================= */

    if (market) {

      market.textContent =
        region === "pk"
          ? "PAKISTAN"
          : "INTERNATIONAL";

    }


    if (currency) {

      currency.textContent =
        region === "pk"
          ? "PKR"
          : "USD";

    }


    if (model) {

      model.textContent =
        region === "pk"
          ? "REGIONAL ACCESS"
          : "GLOBAL ACCESS";

    }



    console.log(
      "[ARVERSE PRICING] Active region:",
      region
    );


  }



  /* =========================================
     BUTTON EVENTS
  ========================================= */

  regionButtons.forEach(
    (button) => {


      button.addEventListener(
        "click",
        (event) => {


          event.preventDefault();


          const region =
            button.dataset.region;


          switchRegion(
            region
          );


        }
      );


    }
  );



  /* DEFAULT REGION */

  switchRegion(
    "pk"
  );


})();
/* =========================================================
   ARVERSE PRICING — FAQ ENGINE
========================================================= */

(() => {

  const faqItems =
    document.querySelectorAll(
      ".pfq-item"
    );


  if (faqItems.length === 0) {
    return;
  }



  faqItems.forEach((item) => {

    const question =
      item.querySelector(
        ".pfq-question"
      );


    if (!question) {
      return;
    }



    question.addEventListener(
      "click",
      () => {


        const isActive =
          item.classList.contains(
            "active"
          );



        faqItems.forEach((faq) => {

          faq.classList.remove(
            "active"
          );

        });



        if (!isActive) {

          item.classList.add(
            "active"
          );

        }


      }
    );

  });



  console.log(
    "[ARVERSE PRICING] FAQ engine ready."
  );

})();