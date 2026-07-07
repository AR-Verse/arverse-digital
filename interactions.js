/* =========================================================
   ARVERSE — STABLE UI CONTROLS
========================================================= */

(() => {


  /* =====================================================
     FIND TAB DATA
  ===================================================== */

  function getTabInfo(element) {

    const attributes =
      Array.from(
        element.attributes || []
      );


    for (const attribute of attributes) {

      const name =
        attribute.name;


      if (
        name.indexOf("data-") === 0 &&
        name.slice(-4) === "-tab"
      ) {

        return {

          prefix:
            name.slice(5, -4),

          target:
            attribute.value

        };

      }

    }


    return null;

  }



  /* =====================================================
     RESTART CONTENT ANIMATION
  ===================================================== */

  function restartSwitchAnimation(element) {

    if (!element) {
      return;
    }


    element.classList.remove(
      "arv-content-switch"
    );


    void element.offsetWidth;


    element.classList.add(
      "arv-content-switch"
    );

  }



  /* =====================================================
     GENERIC TAB ENGINE
  ===================================================== */

  function activateTab(tab, info) {

    const scope =
      tab.closest("section") ||
      document;


    const prefix =
      info.prefix;


    const target =
      info.target;


    const tabSelector =
      "[data-" +
      prefix +
      "-tab]";



    /* RESET BUTTONS */

    scope
      .querySelectorAll(tabSelector)
      .forEach((item) => {

        item.classList.remove(
          "active"
        );

      });


    tab.classList.add(
      "active"
    );



    /* FIND PANEL TYPES */

    const panelSelector =

      "." +
      prefix +
      "-tab-content, " +

      "." +
      prefix +
      "-content, " +

      "." +
      prefix +
      "-panel, " +

      "[data-" +
      prefix +
      "-content]";



    scope
      .querySelectorAll(
        panelSelector
      )
      .forEach((panel) => {

        panel.classList.remove(
          "active"
        );

      });



    /* FIND CORRECT PANEL */

    let panel =
      scope.querySelector(
        "#" +
        prefix +
        "-" +
        target
      );


    if (!panel) {

      panel =
        scope.querySelector(
          "#" + target
        );

    }


    if (!panel) {

      panel =
        scope.querySelector(

          '[data-' +
          prefix +
          '-content="' +
          target +
          '"]'

        );

    }


    if (!panel) {

      panel =
        scope.querySelector(

          '[data-tab-content="' +
          target +
          '"]'

        );

    }


    if (!panel) {

      panel =
        document.getElementById(

          prefix +
          "-" +
          target

        );

    }



    if (!panel) {

      console.warn(

        "[ARVERSE CONTROLS] Panel not found for " +
        prefix +
        ": " +
        target

      );


      return;

    }



    panel.classList.add(
      "active"
    );


    restartSwitchAnimation(
      panel
    );

  }



  /* =====================================================
     FIND STAGE PREFIX
  ===================================================== */

  function getStagePrefix(element) {

    const classes =
      Array.from(
        element.classList || []
      );


    for (const className of classes) {

      if (
        className.slice(-6) ===
        "-stage"
      ) {

        return className.slice(
          0,
          -6
        );

      }

    }


    return "";

  }



  /* =====================================================
     TEXT HELPERS
  ===================================================== */

  function toPascalCase(value) {

    return value

      .replace(
        /[-_]+(.)?/g,

        (match, character) => {

          return character
            ? character.toUpperCase()
            : "";

        }
      )

      .replace(
        /^(.)/,

        (match) =>
          match.toUpperCase()
      );

  }



  function updateTextById(
    id,
    value
  ) {

    const element =
      document.getElementById(id);


    if (
      element &&
      value !== undefined &&
      value !== null
    ) {

      element.textContent =
        value;

    }

  }



  /* =====================================================
     GENERIC STAGE ENGINE
  ===================================================== */

  function activateStage(
    stage,
    prefix
  ) {

    const scope =
      stage.closest("section") ||
      document;



    scope
      .querySelectorAll(
        "." +
        prefix +
        "-stage"
      )
      .forEach((item) => {

        item.classList.remove(
          "active"
        );

      });


    stage.classList.add(
      "active"
    );



    const data =
      stage.dataset || {};



    updateTextById(

      prefix +
      "StageTitle",

      data.title

    );


    updateTextById(

      prefix +
      "StageStatus",

      data.status

    );


    updateTextById(

      prefix +
      "StageDescription",

      data.description

    );



    Object
      .keys(data)
      .forEach((key) => {


        if (
          key === "title" ||
          key === "status" ||
          key === "description"
        ) {

          return;

        }


        const pascalKey =
          toPascalCase(key);



        updateTextById(

          prefix +
          pascalKey +
          "Metric",

          data[key]

        );


        updateTextById(

          prefix +
          pascalKey,

          data[key]

        );


      });


    restartSwitchAnimation(
      stage
    );

  }



  /* =====================================================
     LABEL NORMALIZER
  ===================================================== */

  function normalizeLabel(text) {

    return String(
      text || ""
    )

      .toLowerCase()

      .replace(
        /[0-9]/g,
        ""
      )

      .replace(
        /[^a-z]+/g,
        " "
      )

      .trim();

  }



  /* =====================================================
     FIND CAPABILITY INNER CONTROL
  ===================================================== */

  function findLabeledControl(
    startElement,
    consoleSelector,
    labels
  ) {

    const consoleElement =
      startElement.closest(
        consoleSelector
      );


    if (!consoleElement) {

      return null;

    }


    let node =
      startElement;



    while (
      node &&
      node !== consoleElement
    ) {

      const label =
        normalizeLabel(
          node.textContent
        );


      if (
        labels.indexOf(label) !== -1
      ) {

        return {

          element:
            node,

          label:
            label,

          consoleElement:
            consoleElement

        };

      }


      node =
        node.parentElement;

    }


    return null;

  }



  /* =====================================================
     SET ACTIVE INNER CONTROL
  ===================================================== */

  function setSiblingActive(
    controlInfo,
    labels
  ) {

    const element =
      controlInfo.element;


    const parent =
      element.parentElement;


    if (!parent) {
      return;
    }



    Array
      .from(parent.children)
      .forEach((child) => {

        const label =
          normalizeLabel(
            child.textContent
          );


        if (
          labels.indexOf(label) !== -1
        ) {

          child.classList.remove(
            "active"
          );

        }

      });


    element.classList.add(
      "active"
    );

  }



  /* =====================================================
     UPDATE ANALYSIS TEXT
  ===================================================== */

  function updateConsoleAnalysis(
    consoleElement,
    prefix,
    text
  ) {

    const candidates = [

      document.getElementById(
        prefix +
        "StageDescription"
      ),

      document.getElementById(
        prefix +
        "Description"
      ),

      consoleElement.querySelector(
        ".current-analysis p"
      ),

      consoleElement.querySelector(
        "[class*='analysis'] p"
      ),

      consoleElement.querySelector(
        "p"
      )

    ];


    const target =
      candidates.find(Boolean);


    if (target) {

      target.textContent =
        text;


      restartSwitchAnimation(
        target
      );

    }

  }



  /* =====================================================
     E-COMMERCE INNER CONTENT
  ===================================================== */

  const ecommerceCopy = {

    discovery:
      "Traffic quality and first-touch relevance determine whether the right audience enters the commerce journey.",


    product:
      "Product communication must make value, differentiation and purchase confidence immediately clear.",


    cart:
      "Cart momentum depends on clarity, trust, friction reduction and a strong path towards checkout.",


    checkout:
      "Checkout performance improves when unnecessary friction, hesitation and technical barriers are removed."

  };



  /* =====================================================
     BACKEND INNER CONTENT
  ===================================================== */

  const backendCopy = {

    edge:
      "Incoming requests enter through the edge layer where traffic is validated, routed and prepared for controlled application access.",


    api:
      "The API layer coordinates secure communication between interfaces, services and external systems.",


    auth:
      "Authentication and authorization protect identity, permissions and access across the system architecture.",


    data:
      "The data layer stores, retrieves and structures application information with reliability, consistency and scalability."

  };



  /* =====================================================
     CAPABILITIES INNER CONSOLE HANDLER
  ===================================================== */

  function handleCapabilityConsole(
    event
  ) {


    /* E-COMMERCE */

    const ecommerceLabels =
      Object.keys(
        ecommerceCopy
      );


    const ecommerceControl =
      findLabeledControl(

        event.target,

        ".ecs-console",

        ecommerceLabels

      );


    if (ecommerceControl) {

      setSiblingActive(

        ecommerceControl,

        ecommerceLabels

      );


      updateConsoleAnalysis(

        ecommerceControl.consoleElement,

        "ecs",

        ecommerceCopy[
          ecommerceControl.label
        ]

      );


      return true;

    }



    /* BACKEND */

    const backendLabels =
      Object.keys(
        backendCopy
      );


    const backendControl =
      findLabeledControl(

        event.target,

        ".bds-console",

        backendLabels

      );


    if (backendControl) {

      setSiblingActive(

        backendControl,

        backendLabels

      );


      updateConsoleAnalysis(

        backendControl.consoleElement,

        "bds",

        backendCopy[
          backendControl.label
        ]

      );


      return true;

    }


    return false;

  }



  /* =====================================================
     WORK FILTER
  ===================================================== */

  function handleWorkFilter(button) {

    const section =

      button.closest(
        ".wrk-index-section"
      ) ||

      document;


    const selectedFilter =

      button.getAttribute(
        "data-work-filter"
      ) ||

      "all";



    section
      .querySelectorAll(
        ".wrk-filter"
      )
      .forEach((item) => {

        item.classList.remove(
          "active"
        );

      });


    button.classList.add(
      "active"
    );



    section
      .querySelectorAll(
        ".wrk-case-card"
      )
      .forEach((card) => {


        const categories =

          String(

            card.getAttribute(
              "data-work-category"
            ) || ""

          )

            .split(/\s+/)

            .filter(Boolean);



        const shouldShow =

          selectedFilter === "all" ||

          categories.indexOf(
            selectedFilter
          ) !== -1;



        card.classList.toggle(

          "wrk-hidden",

          !shouldShow

        );


      });

  }



  /* =====================================================
     WORK RESULTS MATRIX
  ===================================================== */

  function handleResultsNode(node) {

    const section =

      node.closest(
        ".wrf-results-section"
      ) ||

      document;



    section
      .querySelectorAll(
        ".wrf-network-node"
      )
      .forEach((item) => {

        item.classList.remove(
          "active"
        );

      });


    node.classList.add(
      "active"
    );



    updateTextById(
      "wrfCoreCode",
      node.dataset.code
    );


    updateTextById(
      "wrfCoreSignal",
      node.dataset.signal
    );


    updateTextById(
      "wrfActiveTitle",
      node.dataset.title
    );


    updateTextById(
      "wrfActiveDescription",
      node.dataset.description
    );


    updateTextById(
      "wrfMetricOne",
      node.dataset.primary
    );


    updateTextById(
      "wrfMetricTwo",
      node.dataset.secondary
    );


    updateTextById(
      "wrfMetricThree",
      node.dataset.tertiary
    );


    updateTextById(
      "wrfLabelOne",
      node.dataset.labelOne
    );


    updateTextById(
      "wrfLabelTwo",
      node.dataset.labelTwo
    );


    updateTextById(
      "wrfLabelThree",
      node.dataset.labelThree
    );

  }



  /* =====================================================
     SINGLE GLOBAL CLICK ENGINE
  ===================================================== */

  document.addEventListener(
    "click",
    (event) => {


      /* =========================================
         MAIN TABS
      ========================================= */

      const tab =
        event.target.closest(

          "[data-gas-tab], " +

          "[data-mas-tab], " +

          "[data-seo-tab], " +

          "[data-ecs-tab], " +

          "[data-bds-tab], " +

          "[data-wps-tab], " +

          "[data-wcs-tab], " +

          "[data-wcc-tab], " +

          "[data-wso-tab], " +

          "[data-wwb-tab], " +

          "[data-wld-tab], " +

          "[data-wco-tab]"

        );


      if (tab) {

        const info =
          getTabInfo(tab);


        if (info) {

          event.preventDefault();


          activateTab(
            tab,
            info
          );


          return;

        }

      }



      /* =========================================
         WORK + CAPABILITY STAGES
      ========================================= */

      const stage =
        event.target.closest(

          ".wcs-stage, " +

          ".wcc-stage, " +

          ".wso-stage, " +

          ".wwb-stage, " +

          ".wld-stage, " +

          ".wco-stage, " +

          ".ecs-stage, " +

          ".bds-stage, " +

          ".wps-stage"

        );


      if (stage) {

        const prefix =
          getStagePrefix(stage);


        if (prefix) {

          event.preventDefault();


          activateStage(
            stage,
            prefix
          );


          return;

        }

      }



      /* =========================================
         WORK FILTERS
      ========================================= */

      const filterButton =
        event.target.closest(
          ".wrk-filter"
        );


      if (filterButton) {

        event.preventDefault();


        handleWorkFilter(
          filterButton
        );


        return;

      }



      /* =========================================
         RESULTS MATRIX NODES
      ========================================= */

      const resultsNode =
        event.target.closest(
          ".wrf-network-node"
        );


      if (resultsNode) {

        event.preventDefault();


        handleResultsNode(
          resultsNode
        );


        return;

      }



      /* =========================================
         CAPABILITIES INNER CONTROLS
      ========================================= */

      handleCapabilityConsole(
        event
      );


    }
  );



  console.log(
    "[ARVERSE CONTROLS] Stable UI controls ready."
  );


})();
/* =========================================================
   WORK PAGE — DEMAND CAPTURE INTERACTION
========================================================= */

(() => {


  const cards =
    Array.from(
      document.querySelectorAll(
        ".wdc-journey-card"
      )
    );


  const analysisOutput =
    document.getElementById(
      "wdcActiveAnalysis"
    );


  if (
    !cards.length ||
    !analysisOutput
  ) {

    return;

  }



  const activateCard =
    (selectedCard) => {


      cards.forEach(
        (card) => {


          card.classList.remove(
            "is-active"
          );


          card.setAttribute(
            "aria-pressed",
            "false"
          );


        }
      );


      selectedCard.classList.add(
        "is-active"
      );


      selectedCard.setAttribute(
        "aria-pressed",
        "true"
      );


      const analysis =
        selectedCard.dataset.analysis;


      if (analysis) {

        analysisOutput.textContent =
          analysis;

      }


    };



  cards.forEach(
    (card) => {


      card.addEventListener(
        "click",
        () => {

          activateCard(card);

        }
      );



      card.addEventListener(
        "keydown",
        (event) => {


          if (
            event.key === "Enter" ||
            event.key === " "
          ) {


            event.preventDefault();


            activateCard(card);


          }


        }
      );


    }
  );


  console.log(
    "[ARVERSE WORK] Demand Capture interaction ready."
  );


})();