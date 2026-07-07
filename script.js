const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});
/* =========================================
   CURRENT YEAR
========================================= */

const currentYear = document.getElementById("currentYear");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}
/* =========================================
   ARVERSE SESSION PRELOADER
========================================= */

const arvPreloader =
  document.getElementById(
    "arvPreloader"
  );


if (arvPreloader) {

  const preloaderSeen =
    sessionStorage.getItem(
      "arversePreloaderSeen"
    );


  if (preloaderSeen) {

    arvPreloader.remove();

    document.body.classList.remove(
      "arv-loading"
    );

  } else {

    window.addEventListener(
      "load",
      () => {

        sessionStorage.setItem(
          "arversePreloaderSeen",
          "true"
        );


        setTimeout(() => {

          arvPreloader.classList.add(
            "arv-preloader-exit"
          );

          document.body.classList.remove(
            "arv-loading"
          );

        }, 4400);


        setTimeout(() => {

          arvPreloader.remove();

        }, 5300);

      }
    );

  }

}
/* =========================================
   ARVERSE SCROLL REVEAL SYSTEM
========================================= */

const revealElements = document.querySelectorAll(`
  .manifesto-copy,
  .signal-terminal,
  .home-section-heading,
  .work-panel,
  .network-header,
  .network-stage,
  .network-data-row,
  .protocol-heading,
  .protocol-step,
  .intel-content,
  .intel-visual,
  .intel-principles,
  .portal-cta-content,
  .arv-footer-contact,
  .footer-system-bar,
  .footer-grid
`);

revealElements.forEach((element, index) => {

  element.classList.add("arv-reveal");

});


const leftRevealElements = document.querySelectorAll(`
  .protocol-heading,
  .intel-content
`);

leftRevealElements.forEach((element) => {

  element.classList.remove("arv-reveal");

  element.classList.add("arv-reveal-left");

});


const rightRevealElements = document.querySelectorAll(`
  .intel-visual
`);

rightRevealElements.forEach((element) => {

  element.classList.remove("arv-reveal");

  element.classList.add("arv-reveal-right");

});


const scaleRevealElements = document.querySelectorAll(`
  .network-stage,
  .signal-terminal
`);

scaleRevealElements.forEach((element) => {

  element.classList.remove("arv-reveal");

  element.classList.add("arv-reveal-scale");

});


const staggerElements = document.querySelectorAll(`
  .signal-grid,
  .protocol-steps,
  .intel-principles,
  .network-data-row
`);

staggerElements.forEach((element) => {

  element.classList.add("arv-stagger");

});


const scrollRevealObserver = new IntersectionObserver(

  (entries, observer) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("arv-visible");

        observer.unobserve(entry.target);

      }

    });

  },

  {
    threshold:0.12,

    rootMargin:
      "0px 0px -60px 0px"
  }

);


document.querySelectorAll(`
  .arv-reveal,
  .arv-reveal-left,
  .arv-reveal-right,
  .arv-reveal-scale,
  .arv-stagger
`).forEach((element) => {

  scrollRevealObserver.observe(element);

});
/* ==================================================
   ARVERSE FOOTER — SMOOTH CURSOR GLOW
================================================== */

let footerGlow =
  footer.querySelector(
    ".arf-mouse-glow"
  );


if (!footerGlow) {

  footerGlow =
    document.createElement("div");


  footerGlow.className =
    "arf-mouse-glow";


  footer.appendChild(
    footerGlow
  );

}



/* TARGET POSITION */

let footerGlowTargetX = 0;
let footerGlowTargetY = 0;


/* CURRENT POSITION */

let footerGlowCurrentX = 0;
let footerGlowCurrentY = 0;


/* STATE */

let footerGlowStarted = false;
let footerGlowActive = false;



/* POINTER ENTER */

footer.addEventListener(
  "pointerenter",
  () => {

    footerGlowActive = true;

    footerGlow.style.opacity = "1";

  }
);



/* POINTER MOVE */

footer.addEventListener(
  "pointermove",
  (event) => {

    const rect =
      footer.getBoundingClientRect();


    footerGlowTargetX =
      event.clientX -
      rect.left;


    footerGlowTargetY =
      event.clientY -
      rect.top;


    if (!footerGlowStarted) {

      footerGlowCurrentX =
        footerGlowTargetX;


      footerGlowCurrentY =
        footerGlowTargetY;


      footerGlowStarted = true;

    }

  }
);



/* POINTER LEAVE */

footer.addEventListener(
  "pointerleave",
  () => {

    footerGlowActive = false;

    footerGlow.style.opacity = ".12";

  }
);



/* SMOOTH ANIMATION LOOP */

const runFooterGlow =
  () => {

    if (footerGlowStarted) {


      footerGlowCurrentX +=
        (
          footerGlowTargetX -
          footerGlowCurrentX
        ) * .085;


      footerGlowCurrentY +=
        (
          footerGlowTargetY -
          footerGlowCurrentY
        ) * .085;



      footerGlow.style.transform =
        `
          translate3d(
            ${footerGlowCurrentX - 300}px,
            ${footerGlowCurrentY - 300}px,
            0
          )
        `;

    }


    requestAnimationFrame(
      runFooterGlow
    );

  };


runFooterGlow();
/* =========================================
   GOOGLE ADS SYSTEM TABS
========================================= */

const gasTabs =
  document.querySelectorAll(".gas-tab");


const gasContents =
  document.querySelectorAll(".gas-tab-content");


gasTabs.forEach((tab) => {

  tab.addEventListener("click", () => {

    const target =
      tab.dataset.gasTab;


    gasTabs.forEach((item) => {

      item.classList.remove("active");

    });


    gasContents.forEach((content) => {

      content.classList.remove("active");

    });


    tab.classList.add("active");


    const activeContent =
      document.getElementById(
        "gas-" + target
      );


    if (activeContent) {

      activeContent.classList.add("active");

    }

  });

});
/* =========================================
   META ADS — 3x3 INTERACTIVE CREATIVE SYSTEM
========================================= */

const masSection = document.querySelector(".mas-section");

if (masSection) {

  const masTabs =
    masSection.querySelectorAll(".mas-tab");

  const masContents =
    masSection.querySelectorAll(".mas-tab-content");

  const masAdCards =
    masSection.querySelectorAll(".mas-ad-card");

  const masActiveScore =
    document.getElementById("masActiveScore");

  const masActiveLabel =
    document.getElementById("masActiveLabel");


  let activeCreative = "stop";
  let activeTab = "hook";


  /* =========================================
     CONTENT DATABASE
  ========================================= */

  const masCreativeData = {


    /* =====================================
       STOP SCROLL
    ===================================== */

    stop: {

      hook: {

        variable:"VARIABLE // 01A",

        title:"Stop the Scroll",

        description:
          "The first seconds determine whether attention is captured or lost. This creative direction uses interruption, tension and immediate relevance to break passive scrolling.",

        items:[
          ["01","Pattern Interrupt","ACTIVE"],
          ["02","Direct Problem Hook","TESTING"],
          ["03","Unexpected Statement","ACTIVE"],
          ["04","Visual Disruption","QUEUED"]
        ]

      },


      offer: {

        variable:"OFFER SYSTEM // 01A",

        title:"Make the Next Step Obvious",

        description:
          "Once attention is captured, the offer must feel immediately understandable. The message reduces friction by presenting a clear problem, solution and next action.",

        items:[
          ["01","Clear Core Promise","ACTIVE"],
          ["02","Immediate Value","TESTING"],
          ["03","Low-Friction Entry","ACTIVE"],
          ["04","Urgency Layer","QUEUED"]
        ]

      },


      visual: {

        variable:"VISUAL SYSTEM // 01A",

        title:"Disrupt the Pattern",

        description:
          "The visual language is designed to feel different from surrounding feed content. Strong framing, motion and contrast create an immediate break in visual repetition.",

        items:[
          ["01","Motion Opening","ACTIVE"],
          ["02","Founder Close-Up","TESTING"],
          ["03","High Contrast Text","ACTIVE"],
          ["04","Fast Cut Sequence","QUEUED"]
        ]

      }

    },



    /* =====================================
       CURIOSITY
    ===================================== */

    curiosity: {

      hook: {

        variable:"VARIABLE // 01B",

        title:"Create the Curiosity Gap",

        description:
          "The message reveals enough information to create interest while deliberately withholding the full answer. The objective is to make the next second feel necessary.",

        items:[
          ["01","Open Loop","ACTIVE"],
          ["02","Hidden Mechanism","TESTING"],
          ["03","Unexpected Question","ACTIVE"],
          ["04","Incomplete Reveal","QUEUED"]
        ]

      },


      offer: {

        variable:"OFFER SYSTEM // 01B",

        title:"Reveal More Than Expected",

        description:
          "The curiosity offer turns initial interest into action by promising access to a mechanism, insight or advantage the audience does not yet fully understand.",

        items:[
          ["01","Secret Mechanism","ACTIVE"],
          ["02","Exclusive Insight","TESTING"],
          ["03","Discovery Angle","ACTIVE"],
          ["04","Access Incentive","QUEUED"]
        ]

      },


      visual: {

        variable:"VISUAL SYSTEM // 01B",

        title:"Show Less. Suggest More.",

        description:
          "Instead of explaining everything visually, the creative uses mystery, partial reveals and controlled information gaps to make the audience investigate further.",

        items:[
          ["01","Partial Reveal","ACTIVE"],
          ["02","Blurred Detail","TESTING"],
          ["03","Question Symbol","ACTIVE"],
          ["04","Progressive Reveal","QUEUED"]
        ]

      }

    },



    /* =====================================
       OUTCOME
    ===================================== */

    outcome: {

      hook: {

        variable:"VARIABLE // 01C",

        title:"Lead With the Outcome",

        description:
          "The desired transformation appears immediately. Instead of beginning with process or explanation, the audience first sees the result and then wants to understand how it happened.",

        items:[
          ["01","Result First","ACTIVE"],
          ["02","Before / After","TESTING"],
          ["03","Growth Signal","ACTIVE"],
          ["04","Proof Statement","QUEUED"]
        ]

      },


      offer: {

        variable:"OFFER SYSTEM // 01C",

        title:"Sell the Transformation",

        description:
          "The offer focuses on the business or personal change the audience wants. Features become supporting evidence rather than the centre of the message.",

        items:[
          ["01","Transformation Promise","ACTIVE"],
          ["02","Proof Layer","TESTING"],
          ["03","Time-to-Value","ACTIVE"],
          ["04","Risk Reversal","QUEUED"]
        ]

      },


      visual: {

        variable:"VISUAL SYSTEM // 01C",

        title:"Make Progress Visible",

        description:
          "Charts, comparisons, milestones and visible transformations turn an abstract promise into something the audience can understand instantly.",

        items:[
          ["01","Growth Graph","ACTIVE"],
          ["02","Before / After Frame","TESTING"],
          ["03","Metric Overlay","ACTIVE"],
          ["04","Progress Timeline","QUEUED"]
        ]

      }

    }

  };



  /* =========================================
     RENDER ACTIVE PANEL
  ========================================= */

  function renderMasContent() {

    const creativeData =
      masCreativeData[activeCreative];

    if (!creativeData) return;


    const currentData =
      creativeData[activeTab];

    if (!currentData) return;


    const activeContent =
      masSection.querySelector(
        "#mas-" + activeTab
      );

    if (!activeContent) return;


    const variable =
      activeContent.querySelector(
        ".mas-mode-copy small"
      );

    const title =
      activeContent.querySelector(
        ".mas-mode-copy h3"
      );

    const description =
      activeContent.querySelector(
        ".mas-mode-copy p"
      );

    const list =
      activeContent.querySelector(
        ".mas-test-list"
      );


    if (variable) {
      variable.textContent =
        currentData.variable;
    }


    if (title) {
      title.textContent =
        currentData.title;
    }


    if (description) {
      description.textContent =
        currentData.description;
    }


    if (list) {

      list.innerHTML =
        currentData.items
          .map((item) => {

            return `
              <div>
                <span>${item[0]}</span>
                <strong>${item[1]}</strong>
                <small>${item[2]}</small>
              </div>
            `;

          })
          .join("");

    }

  }



  /* =========================================
     HOOK / OFFER / VISUAL BUTTONS
  ========================================= */

  masTabs.forEach((tab) => {

    tab.addEventListener("click", () => {

      activeTab =
        tab.dataset.masTab;


      masTabs.forEach((item) => {

        item.classList.remove("active");

      });


      masContents.forEach((content) => {

        content.classList.remove("active");

      });


      tab.classList.add("active");


      const targetContent =
        masSection.querySelector(
          "#mas-" + activeTab
        );


      if (targetContent) {

        targetContent.classList.add("active");

      }


      renderMasContent();

    });

  });



  /* =========================================
     STOP / CURIOSITY / OUTCOME CARDS
  ========================================= */

  masAdCards.forEach((card) => {

    card.addEventListener("click", () => {


      activeCreative =
        card.dataset.creative;


      masAdCards.forEach((item) => {

        item.classList.remove("active");

      });


      card.classList.add("active");


      /* SCORE UPDATE */

      if (masActiveScore) {

        masActiveScore.textContent =
          card.dataset.adScore;

      }


      /* LABEL UPDATE */

      if (masActiveLabel) {

        masActiveLabel.textContent =
          card.dataset.adLabel;

      }


      renderMasContent();

    });

  });



  /* INITIAL STATE */

  renderMasContent();

}
/* =========================================
   SEO INTELLIGENCE TABS
========================================= */

const seoSection =
  document.querySelector(".seo-section");


if (seoSection) {

  const seoTabs =
    seoSection.querySelectorAll(".seo-tab");

  const seoContents =
    seoSection.querySelectorAll(".seo-tab-content");


  seoTabs.forEach((tab) => {

    tab.addEventListener("click", () => {

      const target =
        tab.dataset.seoTab;


      seoTabs.forEach((item) => {

        item.classList.remove("active");

      });


      seoContents.forEach((content) => {

        content.classList.remove("active");

      });


      tab.classList.add("active");


      const activeContent =
        seoSection.querySelector(
          "#seo-" + target
        );


      if (activeContent) {

        activeContent.classList.add("active");

      }

    });

  });

}
/* =========================================
   ECOMMERCE COMMERCE CORE
========================================= */

const ecsSection =
  document.querySelector(".ecs-section");


if (ecsSection) {

  /* =====================================
     STOREFRONT / CONVERSION / RETENTION
  ===================================== */

  const ecsTabs =
    ecsSection.querySelectorAll(".ecs-tab");

  const ecsContents =
    ecsSection.querySelectorAll(
      ".ecs-tab-content"
    );


  ecsTabs.forEach((tab) => {

    tab.addEventListener("click", () => {

      const target =
        tab.dataset.ecsTab;


      ecsTabs.forEach((item) => {

        item.classList.remove("active");

      });


      ecsContents.forEach((content) => {

        content.classList.remove("active");

      });


      tab.classList.add("active");


      const activeContent =
        ecsSection.querySelector(
          "#ecs-" + target
        );


      if (activeContent) {

        activeContent.classList.add(
          "active"
        );

      }

    });

  });



  /* =====================================
     FUNNEL STAGES
  ===================================== */

  const ecsStages =
    ecsSection.querySelectorAll(".ecs-stage");


  const stageTitle =
    document.getElementById(
      "ecsStageTitle"
    );


  const stageStatus =
    document.getElementById(
      "ecsStageStatus"
    );


  const stageDescription =
    document.getElementById(
      "ecsStageDescription"
    );


  const conversionMetric =
    document.getElementById(
      "ecsConversionMetric"
    );


  const cartMetric =
    document.getElementById(
      "ecsCartMetric"
    );


  const revenueMetric =
    document.getElementById(
      "ecsRevenueMetric"
    );


  ecsStages.forEach((stage) => {

    stage.addEventListener("click", () => {


      ecsStages.forEach((item) => {

        item.classList.remove("active");

      });


      stage.classList.add("active");


      if (stageTitle) {

        stageTitle.textContent =
          stage.dataset.title;

      }


      if (stageStatus) {

        stageStatus.textContent =
          stage.dataset.status;

      }


      if (stageDescription) {

        stageDescription.textContent =
          stage.dataset.description;

      }


      if (conversionMetric) {

        conversionMetric.textContent =
          stage.dataset.conversion;

      }


      if (cartMetric) {

        cartMetric.textContent =
          stage.dataset.cart;

      }


      if (revenueMetric) {

        revenueMetric.textContent =
          stage.dataset.revenue;

      }

    });

  });

}
/* =========================================
   BACKEND INFRASTRUCTURE ENGINE
========================================= */

const bdsSection =
  document.querySelector(".bds-section");


if (bdsSection) {

  /* TABS */

  const bdsTabs =
    bdsSection.querySelectorAll(".bds-tab");

  const bdsContents =
    bdsSection.querySelectorAll(
      ".bds-tab-content"
    );


  bdsTabs.forEach((tab) => {

    tab.addEventListener("click", () => {

      const target =
        tab.dataset.bdsTab;


      bdsTabs.forEach((item) => {

        item.classList.remove("active");

      });


      bdsContents.forEach((content) => {

        content.classList.remove("active");

      });


      tab.classList.add("active");


      const activeContent =
        bdsSection.querySelector(
          "#bds-" + target
        );


      if (activeContent) {

        activeContent.classList.add(
          "active"
        );

      }

    });

  });



  /* PIPELINE STAGES */

  const bdsStages =
    bdsSection.querySelectorAll(".bds-stage");


  const bdsStageTitle =
    document.getElementById(
      "bdsStageTitle"
    );


  const bdsStageStatus =
    document.getElementById(
      "bdsStageStatus"
    );


  const bdsStageDescription =
    document.getElementById(
      "bdsStageDescription"
    );


  const bdsLatency =
    document.getElementById(
      "bdsLatency"
    );


  const bdsAvailability =
    document.getElementById(
      "bdsAvailability"
    );


  const bdsRequestState =
    document.getElementById(
      "bdsRequestState"
    );


  bdsStages.forEach((stage) => {

    stage.addEventListener("click", () => {


      bdsStages.forEach((item) => {

        item.classList.remove("active");

      });


      stage.classList.add("active");


      if (bdsStageTitle) {

        bdsStageTitle.textContent =
          stage.dataset.title;

      }


      if (bdsStageStatus) {

        bdsStageStatus.textContent =
          stage.dataset.status;

      }


      if (bdsStageDescription) {

        bdsStageDescription.textContent =
          stage.dataset.description;

      }


      if (bdsLatency) {

        bdsLatency.textContent =
          stage.dataset.latency;

      }


      if (bdsAvailability) {

        bdsAvailability.textContent =
          stage.dataset.availability;

      }


      if (bdsRequestState) {

        bdsRequestState.textContent =
          stage.dataset.state;

      }

    });

  });

}
/* =========================================
   WORDPRESS + WOOCOMMERCE WEB SYSTEM
========================================= */

const wpsSection =
  document.querySelector(".wps-section");


if (wpsSection) {


  /* =====================================
     BUILD / PERFORMANCE / COMMERCE TABS
  ===================================== */

  const wpsTabs =
    wpsSection.querySelectorAll(".wps-tab");


  const wpsContents =
    wpsSection.querySelectorAll(
      ".wps-tab-content"
    );


  wpsTabs.forEach((tab) => {

    tab.addEventListener("click", () => {


      const target =
        tab.dataset.wpsTab;


      wpsTabs.forEach((item) => {

        item.classList.remove("active");

      });


      wpsContents.forEach((content) => {

        content.classList.remove("active");

      });


      tab.classList.add("active");


      const activeContent =
        wpsSection.querySelector(
          "#wps-" + target
        );


      if (activeContent) {

        activeContent.classList.add(
          "active"
        );

      }


    });

  });



  /* =====================================
     CORE / THEME / PLUGINS / COMMERCE
  ===================================== */

  const wpsLayers =
    wpsSection.querySelectorAll(".wps-layer");


  const wpsLayerTitle =
    document.getElementById(
      "wpsLayerTitle"
    );


  const wpsLayerStatus =
    document.getElementById(
      "wpsLayerStatus"
    );


  const wpsLayerDescription =
    document.getElementById(
      "wpsLayerDescription"
    );


  const wpsPerformance =
    document.getElementById(
      "wpsPerformance"
    );


  const wpsHealth =
    document.getElementById(
      "wpsHealth"
    );


  const wpsCommerceState =
    document.getElementById(
      "wpsCommerceState"
    );


  wpsLayers.forEach((layer) => {

    layer.addEventListener("click", () => {


      wpsLayers.forEach((item) => {

        item.classList.remove("active");

      });


      layer.classList.add("active");


      if (wpsLayerTitle) {

        wpsLayerTitle.textContent =
          layer.dataset.title;

      }


      if (wpsLayerStatus) {

        wpsLayerStatus.textContent =
          layer.dataset.status;

      }


      if (wpsLayerDescription) {

        wpsLayerDescription.textContent =
          layer.dataset.description;

      }


      if (wpsPerformance) {

        wpsPerformance.textContent =
          layer.dataset.performance;

      }


      if (wpsHealth) {

        wpsHealth.textContent =
          layer.dataset.health;

      }


      if (wpsCommerceState) {

        wpsCommerceState.textContent =
          layer.dataset.commerce;

      }


    });

  });


}
/* =========================================
   CONNECTED SYSTEM NETWORK
========================================= */

const csnSection =
  document.querySelector(".csn-section");


if (csnSection) {

  const csnNodes =
    csnSection.querySelectorAll(".csn-node");


  const csnActiveCode =
    document.getElementById(
      "csnActiveCode"
    );


  const csnActiveTitle =
    document.getElementById(
      "csnActiveTitle"
    );


  const csnActiveDescription =
    document.getElementById(
      "csnActiveDescription"
    );


  const csnActiveStatus =
    document.getElementById(
      "csnActiveStatus"
    );


  csnNodes.forEach((node) => {

    node.addEventListener("click", () => {


      csnNodes.forEach((item) => {

        item.classList.remove("active");

      });


      node.classList.add("active");


      if (csnActiveCode) {

        csnActiveCode.textContent =
          node.dataset.code;

      }


      if (csnActiveTitle) {

        csnActiveTitle.textContent =
          node.dataset.title;

      }


      if (csnActiveDescription) {

        csnActiveDescription.textContent =
          node.dataset.description;

      }


      if (csnActiveStatus) {

        csnActiveStatus.textContent =
          node.dataset.status;

      }

    });

  });

}
/* ==================================================
   ARVERSE CAPABILITIES — GLOBAL MOTION SYSTEM
================================================== */

(() => {

  const capMain =
    document.querySelector("main");


  const capPageExists =
    document.querySelector(
      ".gas-section, .mas-section, .seo-section, .ecs-section, .bds-section, .wps-section, .csn-section"
    );


  if (!capMain || !capPageExists) {
    return;
  }



  /* =========================================
     1. MAJOR SECTION BLOCKS
  ========================================= */

  const capShells =
    capMain.querySelectorAll(
      ".cap-page-shell"
    );


  capShells.forEach((shell) => {

    const blocks =
      Array.from(shell.children);


    blocks.forEach((block, index) => {

      block.classList.add(
        "cap-motion"
      );


      /*
        FIRST BLOCK = HEADER
      */

      if (index === 0) {

        block.classList.add(
          "cap-left"
        );

      }


      /*
        SECOND BLOCK = MAIN CONSOLE
      */

      else if (index === 1) {

        block.classList.add(
          "cap-scale"
        );

      }


      /*
        OTHER BLOCKS
      */

      else {

        block.classList.add(
          index % 2 === 0
            ? "cap-left"
            : "cap-right"
        );

      }


      block.style.setProperty(
        "--cap-delay",
        Math.min(index * 90, 270) + "ms"
      );

    });

  });



  /* =========================================
     2. FOUNDATION CARDS
  ========================================= */

  const capCards =
    capMain.querySelectorAll(
      [
        ".mas-foundation-item",
        ".seo-foundation-item",
        ".ecs-foundation-item",
        ".bds-foundation-item",
        ".wps-foundation-item",
        ".csn-principle"
      ].join(",")
    );


  capCards.forEach((card, index) => {

    card.classList.add(
      "cap-motion",
      "cap-card-motion"
    );


    card.style.setProperty(
      "--cap-delay",
      ((index % 3) * 120) + "ms"
    );

  });



  /* =========================================
     3. LARGE CONSOLES — SCAN EFFECT
  ========================================= */

  const capConsoles =
    capMain.querySelectorAll(
      [
        ".gas-console",
        ".mas-console",
        ".seo-console",
        ".ecs-console",
        ".bds-console",
        ".wps-console",
        ".csn-network-console"
      ].join(",")
    );


  capConsoles.forEach((consoleBox) => {

    consoleBox.classList.add(
      "cap-scan-host"
    );


    if (
      !consoleBox.querySelector(
        ".cap-scan-beam"
      )
    ) {

      const beam =
        document.createElement("span");


      beam.className =
        "cap-scan-beam";


      beam.setAttribute(
        "aria-hidden",
        "true"
      );


      consoleBox.appendChild(
        beam
      );

    }

  });



  /* =========================================
     4. REVEAL OBSERVER
  ========================================= */

  const revealObserver =
    new IntersectionObserver(

      (entries, observer) => {

        entries.forEach((entry) => {

          if (!entry.isIntersecting) {
            return;
          }


          entry.target.classList.add(
            "is-visible"
          );


          observer.unobserve(
            entry.target
          );

        });

      },

      {
        threshold:.12,

        rootMargin:
          "0px 0px -7% 0px"
      }

    );


  capMain
    .querySelectorAll(".cap-motion")
    .forEach((element) => {

      revealObserver.observe(
        element
      );

    });



  /* =========================================
     5. CONSOLE SCANNER OBSERVER
  ========================================= */

  const consoleObserver =
    new IntersectionObserver(

      (entries, observer) => {

        entries.forEach((entry) => {

          if (!entry.isIntersecting) {
            return;
          }


          const consoleBox =
            entry.target;


          consoleBox.classList.add(
            "scan-live"
          );



          /* METRICS INSIDE CURRENT CONSOLE */

          const metrics =
            consoleBox.querySelectorAll(
              [
                ".gas-metric",
                ".mas-metric",
                ".seo-metric",
                ".ecs-metric",
                ".bds-metric",
                ".wps-metric"
              ].join(",")
            );


          metrics.forEach(
            (metric, index) => {

              metric.style.setProperty(
                "--metric-delay",
                (index * 120) + "ms"
              );


              metric.classList.add(
                "cap-metric-live"
              );

            }
          );


          observer.unobserve(
            consoleBox
          );

        });

      },

      {
        threshold:.22
      }

    );


  capConsoles.forEach(
    (consoleBox) => {

      consoleObserver.observe(
        consoleBox
      );

    }
  );



  /* =========================================
     6. CONNECTED NETWORK CONTENT TRANSITION
  ========================================= */

  const csnSection =
    document.querySelector(
      ".csn-section"
    );


  if (csnSection) {

    const networkNodes =
      csnSection.querySelectorAll(
        ".csn-node"
      );


    const activeContent =
      csnSection.querySelector(
        ".csn-active-content"
      );


    networkNodes.forEach((node) => {

      node.addEventListener(
        "click",
        () => {

          if (!activeContent) {
            return;
          }


          activeContent.classList.remove(
            "cap-content-change"
          );


          /*
            Force browser reflow
          */

          void activeContent.offsetWidth;


          activeContent.classList.add(
            "cap-content-change"
          );

        }
      );

    });

  }

})();
/* ==================================================
   WORK PAGE — CASE STUDY FILTER
================================================== */

(() => {

  const workSection =
    document.querySelector(
      ".wrk-index-section"
    );


  if (!workSection) {
    return;
  }


  const filterButtons =
    workSection.querySelectorAll(
      ".wrk-filter"
    );


  const caseCards =
    workSection.querySelectorAll(
      ".wrk-case-card"
    );


  filterButtons.forEach((button) => {

    button.addEventListener(
      "click",
      () => {


        const selectedFilter =
          button.dataset.workFilter;



        /* ACTIVE BUTTON */

        filterButtons.forEach(
          (item) => {

            item.classList.remove(
              "active"
            );

          }
        );


        button.classList.add(
          "active"
        );



        /* FILTER CASE STUDIES */

        caseCards.forEach((card) => {


          const categories =
            card.dataset.workCategory
              .split(" ");


          const shouldShow =

            selectedFilter === "all" ||

            categories.includes(
              selectedFilter
            );


          if (shouldShow) {

            card.classList.remove(
              "wrk-hidden"
            );


            card.animate(

              [
                {
                  opacity:0,
                  transform:
                    "translateY(18px) scale(.985)"
                },

                {
                  opacity:1,
                  transform:
                    "translateY(0) scale(1)"
                }
              ],

              {
                duration:500,
                easing:
                  "cubic-bezier(.16,1,.3,1)"
              }

            );

          }

          else {

            card.classList.add(
              "wrk-hidden"
            );

          }

        });


      }
    );

  });

})();
/* ==================================================
   ARVERSE GLOBAL COSMIC OVERLAY
================================================== */

(() => {

  const isCapabilitiesPage =
    document.querySelector(
      ".gas-section, .mas-section, .seo-section, .ecs-section, .bds-section, .wps-section"
    );


  const isWorkPage =
    document.querySelector(
      ".wrk-page"
    );


  /*
    Only run on Capabilities + Work pages
  */

  if (
    !isCapabilitiesPage &&
    !isWorkPage
  ) {
    return;
  }


  /*
    Prevent duplicate cosmic overlay
  */

  if (
    document.querySelector(
      ".arv-cosmic-overlay"
    )
  ) {
    return;
  }



  /* =========================================
     CREATE MAIN OVERLAY
  ========================================= */

  const cosmicOverlay =
    document.createElement("div");


  cosmicOverlay.className =
    "arv-cosmic-overlay";


  cosmicOverlay.setAttribute(
    "aria-hidden",
    "true"
  );



  /* =========================================
     DUST
  ========================================= */

  const cosmicDust =
    document.createElement("div");


  cosmicDust.className =
    "arv-cosmic-dust";


  cosmicOverlay.appendChild(
    cosmicDust
  );



  /* =========================================
     STARS
  ========================================= */

  const starField =
    document.createElement("div");


  starField.className =
    "arv-cosmic-stars";


  const totalStars = 95;


  for (
    let index = 0;
    index < totalStars;
    index++
  ) {

    const star =
      document.createElement("span");


    star.className =
      "arv-cosmic-star";


    const x =
      Math.random() * 100;


    const y =
      Math.random() * 100;


    const size =
      (
        Math.random() * 1.8 +
        0.6
      ).toFixed(2);


    const opacity =
      (
        Math.random() * 0.55 +
        0.18
      ).toFixed(2);


    const speed =
      (
        Math.random() * 3.5 +
        2.2
      ).toFixed(2);


    const delay =
      (
        Math.random() * -7
      ).toFixed(2);


    star.style.setProperty(
      "--star-x",
      x + "%"
    );


    star.style.setProperty(
      "--star-y",
      y + "%"
    );


    star.style.setProperty(
      "--star-size",
      size + "px"
    );


    star.style.setProperty(
      "--star-opacity",
      opacity
    );


    star.style.setProperty(
      "--star-speed",
      speed + "s"
    );


    star.style.setProperty(
      "--star-delay",
      delay + "s"
    );


    starField.appendChild(
      star
    );

  }


  cosmicOverlay.appendChild(
    starField
  );



  /* =========================================
     COMETS
  ========================================= */

  const cometClasses = [

    "arv-comet-one",

    "arv-comet-two",

    "arv-comet-three",

    "arv-comet-four"

  ];


  cometClasses.forEach(
    (cometClass) => {

      const comet =
        document.createElement("span");


      comet.className =
        "arv-comet " +
        cometClass;


      cosmicOverlay.appendChild(
        comet
      );

    }
  );



  /* =========================================
     ADD TO BODY
  ========================================= */

  document.body.prepend(
    cosmicOverlay
  );

})();
/* ==================================================
   WORK CASE STUDY 001
================================================== */

(() => {

  const caseSection =
    document.querySelector(".wcs-section");


  if (!caseSection) {
    return;
  }



  /* =========================================
     CHALLENGE / SYSTEM / OUTCOME TABS
  ========================================= */

  const caseTabs =
    caseSection.querySelectorAll(
      ".wcs-tab"
    );


  const caseContents =
    caseSection.querySelectorAll(
      ".wcs-tab-content"
    );


  caseTabs.forEach((tab) => {

    tab.addEventListener("click", () => {


      const target =
        tab.dataset.wcsTab;


      caseTabs.forEach((item) => {

        item.classList.remove("active");

      });


      caseContents.forEach((content) => {

        content.classList.remove("active");

      });


      tab.classList.add("active");


      const targetContent =
        caseSection.querySelector(
          "#wcs-" + target
        );


      if (targetContent) {

        targetContent.classList.add(
          "active"
        );

      }

    });

  });



  /* =========================================
     FUNNEL STAGES
  ========================================= */

  const stages =
    caseSection.querySelectorAll(
      ".wcs-stage"
    );


  const stageTitle =
    document.getElementById(
      "wcsStageTitle"
    );


  const stageStatus =
    document.getElementById(
      "wcsStageStatus"
    );


  const stageDescription =
    document.getElementById(
      "wcsStageDescription"
    );


  const leadMetric =
    document.getElementById(
      "wcsLeadMetric"
    );


  const costMetric =
    document.getElementById(
      "wcsCostMetric"
    );


  const returnMetric =
    document.getElementById(
      "wcsReturnMetric"
    );


  stages.forEach((stage) => {

    stage.addEventListener("click", () => {


      stages.forEach((item) => {

        item.classList.remove("active");

      });


      stage.classList.add("active");


      if (stageTitle) {

        stageTitle.textContent =
          stage.dataset.title;

      }


      if (stageStatus) {

        stageStatus.textContent =
          stage.dataset.status;

      }


      if (stageDescription) {

        stageDescription.textContent =
          stage.dataset.description;

      }


      if (leadMetric) {

        leadMetric.textContent =
          stage.dataset.lead;

      }


      if (costMetric) {

        costMetric.textContent =
          stage.dataset.cost;

      }


      if (returnMetric) {

        returnMetric.textContent =
          stage.dataset.return;

      }

    });

  });

})();
/* ==================================================
   WORK CASE STUDY 002 — COMMERCE
================================================== */

(() => {

  const commerceCase =
    document.querySelector(
      ".wcc-section"
    );


  if (!commerceCase) {
    return;
  }



  /* =========================================
     STOREFRONT / CONVERSION / RETENTION
  ========================================= */

  const commerceTabs =
    commerceCase.querySelectorAll(
      ".wcc-tab"
    );


  const commerceContents =
    commerceCase.querySelectorAll(
      ".wcc-tab-content"
    );


  commerceTabs.forEach((tab) => {

    tab.addEventListener(
      "click",
      () => {


        const target =
          tab.dataset.wccTab;


        commerceTabs.forEach((item) => {

          item.classList.remove(
            "active"
          );

        });


        commerceContents.forEach((content) => {

          content.classList.remove(
            "active"
          );

        });


        tab.classList.add(
          "active"
        );


        const activeContent =
          commerceCase.querySelector(
            "#wcc-" + target
          );


        if (activeContent) {

          activeContent.classList.add(
            "active"
          );

        }


      }
    );

  });



  /* =========================================
     COMMERCE JOURNEY
  ========================================= */

  const journeyStages =
    commerceCase.querySelectorAll(
      ".wcc-stage"
    );


  const stageTitle =
    document.getElementById(
      "wccStageTitle"
    );


  const stageStatus =
    document.getElementById(
      "wccStageStatus"
    );


  const stageDescription =
    document.getElementById(
      "wccStageDescription"
    );


  const revenueMetric =
    document.getElementById(
      "wccRevenueMetric"
    );


  const cvrMetric =
    document.getElementById(
      "wccCvrMetric"
    );


  const aovMetric =
    document.getElementById(
      "wccAovMetric"
    );


  journeyStages.forEach((stage) => {

    stage.addEventListener(
      "click",
      () => {


        journeyStages.forEach((item) => {

          item.classList.remove(
            "active"
          );

        });


        stage.classList.add(
          "active"
        );


        if (stageTitle) {

          stageTitle.textContent =
            stage.dataset.title;

        }


        if (stageStatus) {

          stageStatus.textContent =
            stage.dataset.status;

        }


        if (stageDescription) {

          stageDescription.textContent =
            stage.dataset.description;

        }


        if (revenueMetric) {

          revenueMetric.textContent =
            stage.dataset.revenue;

        }


        if (cvrMetric) {

          cvrMetric.textContent =
            stage.dataset.cvr;

        }


        if (aovMetric) {

          aovMetric.textContent =
            stage.dataset.aov;

        }


      }
    );

  });

})();
/* ==================================================
   WORK CASE STUDY 003 — SEO
================================================== */

(() => {

  const seoCase =
    document.querySelector(
      ".wso-section"
    );


  if (!seoCase) {
    return;
  }



  /* =========================================
     TECHNICAL / CONTENT / AUTHORITY
  ========================================= */

  const seoTabs =
    seoCase.querySelectorAll(
      ".wso-tab"
    );


  const seoContents =
    seoCase.querySelectorAll(
      ".wso-tab-content"
    );


  seoTabs.forEach((tab) => {

    tab.addEventListener(
      "click",
      () => {


        const target =
          tab.dataset.wsoTab;


        seoTabs.forEach((item) => {

          item.classList.remove(
            "active"
          );

        });


        seoContents.forEach((content) => {

          content.classList.remove(
            "active"
          );

        });


        tab.classList.add(
          "active"
        );


        const activeContent =
          seoCase.querySelector(
            "#wso-" + target
          );


        if (activeContent) {

          activeContent.classList.add(
            "active"
          );

        }


      }
    );

  });



  /* =========================================
     SEO PIPELINE STAGES
  ========================================= */

  const seoStages =
    seoCase.querySelectorAll(
      ".wso-stage"
    );


  const stageTitle =
    document.getElementById(
      "wsoStageTitle"
    );


  const stageStatus =
    document.getElementById(
      "wsoStageStatus"
    );


  const stageDescription =
    document.getElementById(
      "wsoStageDescription"
    );


  const trafficMetric =
    document.getElementById(
      "wsoTrafficMetric"
    );


  const keywordMetric =
    document.getElementById(
      "wsoKeywordMetric"
    );


  const leadMetric =
    document.getElementById(
      "wsoLeadMetric"
    );


  seoStages.forEach((stage) => {

    stage.addEventListener(
      "click",
      () => {


        seoStages.forEach((item) => {

          item.classList.remove(
            "active"
          );

        });


        stage.classList.add(
          "active"
        );


        if (stageTitle) {

          stageTitle.textContent =
            stage.dataset.title;

        }


        if (stageStatus) {

          stageStatus.textContent =
            stage.dataset.status;

        }


        if (stageDescription) {

          stageDescription.textContent =
            stage.dataset.description;

        }


        if (trafficMetric) {

          trafficMetric.textContent =
            stage.dataset.traffic;

        }


        if (keywordMetric) {

          keywordMetric.textContent =
            stage.dataset.keywords;

        }


        if (leadMetric) {

          leadMetric.textContent =
            stage.dataset.leads;

        }


      }
    );

  });

})();
/* ==================================================
   WORK CASE STUDY 004 — WEBSITE REBUILD
================================================== */

(() => {

  const websiteCase =
    document.querySelector(
      ".wwb-section"
    );


  if (!websiteCase) {
    return;
  }



  /* =========================================
     EXPERIENCE / PERFORMANCE / CONVERSION
  ========================================= */

  const websiteTabs =
    websiteCase.querySelectorAll(
      ".wwb-tab"
    );


  const websiteContents =
    websiteCase.querySelectorAll(
      ".wwb-tab-content"
    );


  websiteTabs.forEach((tab) => {

    tab.addEventListener(
      "click",
      () => {


        const target =
          tab.dataset.wwbTab;


        websiteTabs.forEach((item) => {

          item.classList.remove(
            "active"
          );

        });


        websiteContents.forEach((content) => {

          content.classList.remove(
            "active"
          );

        });


        tab.classList.add(
          "active"
        );


        const activeContent =
          websiteCase.querySelector(
            "#wwb-" + target
          );


        if (activeContent) {

          activeContent.classList.add(
            "active"
          );

        }


      }
    );

  });



  /* =========================================
     WEBSITE PIPELINE
  ========================================= */

  const websiteStages =
    websiteCase.querySelectorAll(
      ".wwb-stage"
    );


  const stageTitle =
    document.getElementById(
      "wwbStageTitle"
    );


  const stageStatus =
    document.getElementById(
      "wwbStageStatus"
    );


  const stageDescription =
    document.getElementById(
      "wwbStageDescription"
    );


  const performanceMetric =
    document.getElementById(
      "wwbPerformanceMetric"
    );


  const bounceMetric =
    document.getElementById(
      "wwbBounceMetric"
    );


  const conversionMetric =
    document.getElementById(
      "wwbConversionMetric"
    );


  websiteStages.forEach((stage) => {

    stage.addEventListener(
      "click",
      () => {


        websiteStages.forEach((item) => {

          item.classList.remove(
            "active"
          );

        });


        stage.classList.add(
          "active"
        );


        if (stageTitle) {

          stageTitle.textContent =
            stage.dataset.title;

        }


        if (stageStatus) {

          stageStatus.textContent =
            stage.dataset.status;

        }


        if (stageDescription) {

          stageDescription.textContent =
            stage.dataset.description;

        }


        if (performanceMetric) {

          performanceMetric.textContent =
            stage.dataset.performance;

        }


        if (bounceMetric) {

          bounceMetric.textContent =
            stage.dataset.bounce;

        }


        if (conversionMetric) {

          conversionMetric.textContent =
            stage.dataset.conversion;

        }


      }
    );

  });

})();
/* ==================================================
   WORK CASE STUDY 005 — LOCAL DEMAND
================================================== */

(() => {

  const localCase =
    document.querySelector(
      ".wld-section"
    );


  if (!localCase) {
    return;
  }



  /* =========================================
     PAID / LOCAL SEO / CONVERSION TABS
  ========================================= */

  const localTabs =
    localCase.querySelectorAll(
      ".wld-tab"
    );


  const localContents =
    localCase.querySelectorAll(
      ".wld-tab-content"
    );


  localTabs.forEach((tab) => {

    tab.addEventListener(
      "click",
      () => {


        const target =
          tab.dataset.wldTab;


        localTabs.forEach((item) => {

          item.classList.remove(
            "active"
          );

        });


        localContents.forEach((content) => {

          content.classList.remove(
            "active"
          );

        });


        tab.classList.add(
          "active"
        );


        const activeContent =
          localCase.querySelector(
            "#wld-" + target
          );


        if (activeContent) {

          activeContent.classList.add(
            "active"
          );

        }


      }
    );

  });



  /* =========================================
     SHARED METRIC ELEMENTS
  ========================================= */

  const enquiryMetric =
    document.getElementById(
      "wldEnquiryMetric"
    );


  const cpaMetric =
    document.getElementById(
      "wldCpaMetric"
    );


  const visibilityMetric =
    document.getElementById(
      "wldVisibilityMetric"
    );



  /* =========================================
     LOCATION RADAR ZONES
  ========================================= */

  const zones =
    localCase.querySelectorAll(
      ".wld-zone"
    );


  const zoneTitle =
    document.getElementById(
      "wldZoneTitle"
    );


  const zoneStatus =
    document.getElementById(
      "wldZoneStatus"
    );


  const zoneDescription =
    document.getElementById(
      "wldZoneDescription"
    );


  zones.forEach((zone) => {

    zone.addEventListener(
      "click",
      () => {


        zones.forEach((item) => {

          item.classList.remove(
            "active"
          );

        });


        zone.classList.add(
          "active"
        );


        if (zoneTitle) {

          zoneTitle.textContent =
            zone.dataset.title;

        }


        if (zoneStatus) {

          zoneStatus.textContent =
            zone.dataset.status;

        }


        if (zoneDescription) {

          zoneDescription.textContent =
            zone.dataset.description;

        }


        if (enquiryMetric) {

          enquiryMetric.textContent =
            zone.dataset.enquiries;

        }


        if (cpaMetric) {

          cpaMetric.textContent =
            zone.dataset.cpa;

        }


        if (visibilityMetric) {

          visibilityMetric.textContent =
            zone.dataset.visibility;

        }


      }
    );

  });



  /* =========================================
     ACQUISITION PIPELINE
  ========================================= */

  const localStages =
    localCase.querySelectorAll(
      ".wld-stage"
    );


  const stageTitle =
    document.getElementById(
      "wldStageTitle"
    );


  const stageStatus =
    document.getElementById(
      "wldStageStatus"
    );


  const stageDescription =
    document.getElementById(
      "wldStageDescription"
    );


  localStages.forEach((stage) => {

    stage.addEventListener(
      "click",
      () => {


        localStages.forEach((item) => {

          item.classList.remove(
            "active"
          );

        });


        stage.classList.add(
          "active"
        );


        if (stageTitle) {

          stageTitle.textContent =
            stage.dataset.title;

        }


        if (stageStatus) {

          stageStatus.textContent =
            stage.dataset.status;

        }


        if (stageDescription) {

          stageDescription.textContent =
            stage.dataset.description;

        }


        if (enquiryMetric) {

          enquiryMetric.textContent =
            stage.dataset.enquiries;

        }


        if (cpaMetric) {

          cpaMetric.textContent =
            stage.dataset.cpa;

        }


        if (visibilityMetric) {

          visibilityMetric.textContent =
            stage.dataset.visibility;

        }


      }
    );

  });

})();
/* ==================================================
   WORK CASE STUDY 006 — WOOCOMMERCE
================================================== */

(() => {

  const wooCase =
    document.querySelector(
      ".wco-section"
    );


  if (!wooCase) {
    return;
  }



  /* =========================================
     PRODUCT / CART / CHECKOUT TABS
  ========================================= */

  const wooTabs =
    wooCase.querySelectorAll(
      ".wco-tab"
    );


  const wooContents =
    wooCase.querySelectorAll(
      ".wco-tab-content"
    );


  wooTabs.forEach((tab) => {

    tab.addEventListener(
      "click",
      () => {


        const target =
          tab.dataset.wcoTab;


        wooTabs.forEach((item) => {

          item.classList.remove(
            "active"
          );

        });


        wooContents.forEach((content) => {

          content.classList.remove(
            "active"
          );

        });


        tab.classList.add(
          "active"
        );


        const activeContent =
          wooCase.querySelector(
            "#wco-" + target
          );


        if (activeContent) {

          activeContent.classList.add(
            "active"
          );

        }


      }
    );

  });



  /* =========================================
     TRANSACTION FLOW
  ========================================= */

  const wooStages =
    wooCase.querySelectorAll(
      ".wco-stage"
    );


  const stageTitle =
    document.getElementById(
      "wcoStageTitle"
    );


  const stageStatus =
    document.getElementById(
      "wcoStageStatus"
    );


  const stageDescription =
    document.getElementById(
      "wcoStageDescription"
    );


  const checkoutMetric =
    document.getElementById(
      "wcoCheckoutMetric"
    );


  const aovMetric =
    document.getElementById(
      "wcoAovMetric"
    );


  const recoveryMetric =
    document.getElementById(
      "wcoRecoveryMetric"
    );


  wooStages.forEach((stage) => {

    stage.addEventListener(
      "click",
      () => {


        wooStages.forEach((item) => {

          item.classList.remove(
            "active"
          );

        });


        stage.classList.add(
          "active"
        );


        if (stageTitle) {

          stageTitle.textContent =
            stage.dataset.title;

        }


        if (stageStatus) {

          stageStatus.textContent =
            stage.dataset.status;

        }


        if (stageDescription) {

          stageDescription.textContent =
            stage.dataset.description;

        }


        if (checkoutMetric) {

          checkoutMetric.textContent =
            stage.dataset.checkout;

        }


        if (aovMetric) {

          aovMetric.textContent =
            stage.dataset.aov;

        }


        if (recoveryMetric) {

          recoveryMetric.textContent =
            stage.dataset.recovery;

        }


      }
    );

  });

})();
/* ==================================================
   WORK PAGE FINALE
================================================== */

(() => {

  const finale =
    document.querySelector(
      ".wrf-results-section"
    );


  if (!finale) {
    return;
  }



  /* =========================================
     INTERACTIVE PERFORMANCE NETWORK
  ========================================= */

  const nodes =
    finale.querySelectorAll(
      ".wrf-network-node"
    );


  const coreCode =
    document.getElementById(
      "wrfCoreCode"
    );


  const coreSignal =
    document.getElementById(
      "wrfCoreSignal"
    );


  const activeContent =
    finale.querySelector(
      ".wrf-active-content"
    );


  const activeTitle =
    document.getElementById(
      "wrfActiveTitle"
    );


  const activeDescription =
    document.getElementById(
      "wrfActiveDescription"
    );


  const activeCode =
    document.getElementById(
      "wrfActiveCode"
    );


  const metricOne =
    document.getElementById(
      "wrfMetricOne"
    );


  const metricTwo =
    document.getElementById(
      "wrfMetricTwo"
    );


  const metricThree =
    document.getElementById(
      "wrfMetricThree"
    );


  const labelOne =
    document.getElementById(
      "wrfLabelOne"
    );


  const labelTwo =
    document.getElementById(
      "wrfLabelTwo"
    );


  const labelThree =
    document.getElementById(
      "wrfLabelThree"
    );



  nodes.forEach((node, index) => {

    node.addEventListener(
      "click",
      () => {


        nodes.forEach((item) => {

          item.classList.remove(
            "active"
          );

        });


        node.classList.add(
          "active"
        );


        if (coreCode) {

          coreCode.textContent =
            node.dataset.code;

        }


        if (coreSignal) {

          coreSignal.textContent =
            node.dataset.signal;

        }


        if (activeCode) {

          activeCode.textContent =
            "SYSTEM // " +
            String(index + 1).padStart(
              2,
              "0"
            );

        }


        if (activeTitle) {

          activeTitle.textContent =
            node.dataset.title;

        }


        if (activeDescription) {

          activeDescription.textContent =
            node.dataset.description;

        }


        if (metricOne) {

          metricOne.textContent =
            node.dataset.primary;

        }


        if (metricTwo) {

          metricTwo.textContent =
            node.dataset.secondary;

        }


        if (metricThree) {

          metricThree.textContent =
            node.dataset.tertiary;

        }


        if (labelOne) {

          labelOne.textContent =
            node.dataset.labelOne;

        }


        if (labelTwo) {

          labelTwo.textContent =
            node.dataset.labelTwo;

        }


        if (labelThree) {

          labelThree.textContent =
            node.dataset.labelThree;

        }


        if (activeContent) {

          activeContent.classList.remove(
            "wrf-changing"
          );


          void activeContent.offsetWidth;


          activeContent.classList.add(
            "wrf-changing"
          );

        }


      }
    );

  });



  /* =========================================
     RESULT COUNTERS
  ========================================= */

  const counters =
    finale.querySelectorAll(
      ".wrf-count"
    );


  const animateCounter =
    (counter) => {


      const target =
        Number(
          counter.dataset.target
        );


      const prefix =
        counter.dataset.prefix || "";


      const suffix =
        counter.dataset.suffix || "";


      const decimals =
        Number.isInteger(target)
          ? 0
          : 1;


      const duration =
        1500;


      const startTime =
        performance.now();


      const update =
        (currentTime) => {


          const progress =
            Math.min(
              (
                currentTime -
                startTime
              ) / duration,
              1
            );


          const eased =
            1 -
            Math.pow(
              1 - progress,
              3
            );


          const current =
            target * eased;


          counter.textContent =
            prefix +
            current.toFixed(decimals) +
            suffix;


          if (progress < 1) {

            requestAnimationFrame(
              update
            );

          }

        };


      requestAnimationFrame(
        update
      );

    };



  const counterObserver =
    new IntersectionObserver(

      (entries, observer) => {

        entries.forEach((entry) => {

          if (
            entry.isIntersecting
          ) {

            animateCounter(
              entry.target
            );


            observer.unobserve(
              entry.target
            );

          }

        });

      },

      {
        threshold:.6
      }

    );


  counters.forEach((counter) => {

    counterObserver.observe(
      counter
    );

  });

})();