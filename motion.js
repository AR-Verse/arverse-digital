/* =========================================================
   ARVERSE — ADVANCED CINEMATIC MOTION SYSTEM
   Reveal + Split Text + Tilt + Shockwave + Parallax
   SVG Draw + Scramble + Radar + Constellation
========================================================= */

(() => {

  const startMotionSystem = () => {


    /* =====================================================
       MOTION READY
    ===================================================== */

    document.documentElement.classList.add(
      "arm-motion-ready"
    );


    const reducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;



    /* =====================================================
       01 — MAJOR PAGE SECTIONS
    ===================================================== */

    const sectionSelectors = [

      "main > section",

      ".wrk-page > section",

      ".cap-page-shell > section",

      ".wrk-hero",

      ".wrk-index-section",

      "#case-study-001",

      "#case-study-002",

      "#case-study-003",

      "#case-study-004",

      "#case-study-005",

      "#case-study-006",

      "#google-ads",

      "#meta-ads",

      "#seo",

      "#ecommerce",

      "#backend",

      "#wordpress",

      "#connected-systems",

      "#results-matrix",

      "#methodology",

      "#work-contact"

    ].join(",");


    const sections =
      [
        ...new Set(
          document.querySelectorAll(
            sectionSelectors
          )
        )
      ];



    sections.forEach(
      (section, index) => {


        section.classList.add(
          "arm-section-reveal",
          "arm-radar-host"
        );



        /* ENERGY BEAM */

        if (
          index > 0 &&
          !section.querySelector(
            ":scope > .arm-section-beam"
          )
        ) {

          const beam =
            document.createElement("div");


          beam.className =
            "arm-section-beam";


          beam.innerHTML =
            "<span></span>";


          section.prepend(
            beam
          );

        }



        /* RADAR ENTRY */

        const shouldHaveRadar =
          section.id.startsWith(
            "case-study"
          ) ||

          section.matches(
            "#results-matrix, #methodology, #connected-systems"
          );


        if (
          shouldHaveRadar &&
          !section.querySelector(
            ":scope > .arm-radar-entry"
          )
        ) {

          const radar =
            document.createElement("div");


          radar.className =
            "arm-radar-entry";


          radar.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
            <i></i>
          `;


          section.prepend(
            radar
          );

        }


      }
    );



    /* =====================================================
       02 — SLOW BLUR SECTION REVEAL
    ===================================================== */

    const sectionObserver =
      new IntersectionObserver(

        (entries) => {

          entries.forEach(
            (entry) => {

              if (
                entry.isIntersecting
              ) {

                entry.target.classList.add(
                  "arm-inview"
                );

              }

            }
          );

        },

        {

          threshold:.06,

          rootMargin:
            "0px 0px -8% 0px"

        }

      );


    sections.forEach(
      (section) => {

        sectionObserver.observe(
          section
        );

      }
    );



    /* =====================================================
       03 — HEADING WORD SPLIT
    ===================================================== */

    const headingTargets =
      [
        ...new Set(

          sections.flatMap(
            (section) => [

              ...section.querySelectorAll(
                "h1, h2"
              )

            ]
          )

        )
      ];



    const splitHeading =
      (heading) => {


        if (
          heading.dataset.armSplit ===
          "true"
        ) {
          return;
        }


        heading.dataset.armSplit =
          "true";


        const walker =
          document.createTreeWalker(

            heading,

            NodeFilter.SHOW_TEXT

          );


        const textNodes = [];


        let currentNode;


        while (
          currentNode =
            walker.nextNode()
        ) {

          if (
            currentNode.textContent.trim()
          ) {

            textNodes.push(
              currentNode
            );

          }

        }


        let wordIndex = 0;


        textNodes.forEach(
          (textNode) => {


            const fragment =
              document.createDocumentFragment();


            const parts =
              textNode.textContent.split(
                /(\s+)/
              );


            parts.forEach(
              (part) => {


                if (
                  /^\s+$/.test(part)
                ) {

                  fragment.appendChild(
                    document.createTextNode(
                      part
                    )
                  );


                  return;

                }


                if (!part) {
                  return;
                }


                const word =
                  document.createElement(
                    "span"
                  );


                word.className =
                  "arm-word";


                word.style.setProperty(
                  "--arm-word-delay",
                  (
                    wordIndex * 45
                  ) + "ms"
                );


                word.textContent =
                  part;


                fragment.appendChild(
                  word
                );


                wordIndex++;

              }
            );


            textNode.parentNode.replaceChild(
              fragment,
              textNode
            );


          }
        );


        heading.classList.add(
          "arm-heading-ready"
        );

      };



    headingTargets.forEach(
      splitHeading
    );



    const headingObserver =
      new IntersectionObserver(

        (entries) => {

          entries.forEach(
            (entry) => {

              if (
                entry.isIntersecting
              ) {

                entry.target.classList.add(
                  "arm-heading-inview"
                );

              }

            }
          );

        },

        {

          threshold:.18

        }

      );


    headingTargets.forEach(
      (heading) => {

        headingObserver.observe(
          heading
        );

      }
    );



    /* =====================================================
       04 — PREMIUM 3D TILT CARDS
    ===================================================== */

    const tiltSelectors = [

      ".wrk-case-card",

      ".wrf-result-stat",

      ".wrf-method-card",

      ".ecs-foundation-item",

      ".bds-foundation-item",

      ".wps-foundation-item",

      ".csn-principle",

      "[class*='foundation-item']"

    ].join(",");


    const tiltCards =
      document.querySelectorAll(
        tiltSelectors
      );


    const finePointer =
      window.matchMedia(
        "(hover:hover) and (pointer:fine)"
      ).matches;



    if (
      finePointer &&
      !reducedMotion
    ) {


      tiltCards.forEach(
        (card) => {


          card.classList.add(
            "arm-tilt-card"
          );


          if (
            !card.querySelector(
              ":scope > .arm-card-light"
            )
          ) {

            const light =
              document.createElement(
                "span"
              );


            light.className =
              "arm-card-light";


            card.appendChild(
              light
            );

          }


          card.addEventListener(
            "pointermove",
            (event) => {


              const rect =
                card.getBoundingClientRect();


              const x =
                (
                  event.clientX -
                  rect.left
                ) / rect.width;


              const y =
                (
                  event.clientY -
                  rect.top
                ) / rect.height;


              const rotateY =
                (
                  x - .5
                ) * 5;


              const rotateX =
                (
                  .5 - y
                ) * 5;


              card.style.setProperty(
                "--arm-light-x",
                x * 100 + "%"
              );


              card.style.setProperty(
                "--arm-light-y",
                y * 100 + "%"
              );


              card.style.transform =
                `
                  perspective(1000px)
                  rotateX(${rotateX}deg)
                  rotateY(${rotateY}deg)
                  translateY(-5px)
                `;

            }
          );


          card.addEventListener(
            "pointerleave",
            () => {

              card.style.transform =
                "";

            }
          );


        }
      );

    }



    /* =====================================================
       05 — SVG NETWORK LINE DRAW
    ===================================================== */

    const networkPaths =
      document.querySelectorAll(

        `
        .wrf-network-lines path,
        .csn-network-console svg path,
        .gas-console svg path,
        .mas-console svg path,
        .seo-console svg path,
        .ecs-console svg path,
        .bds-console svg path,
        .wps-console svg path
        `

      );



    networkPaths.forEach(
      (path) => {


        try {


          const length =
            path.getTotalLength();


          path.dataset.armLength =
            length;


          path.style.animation =
            "none";


          path.style.strokeDasharray =
            length;


          path.style.strokeDashoffset =
            length;


          path.style.transition =
            `
              stroke-dashoffset
              1.8s
              cubic-bezier(.16,1,.3,1)
            `;


        } catch (error) {

          /* Ignore unsupported SVG path */

        }


      }
    );



    const svgObserver =
      new IntersectionObserver(

        (entries, observer) => {

          entries.forEach(
            (entry) => {


              if (
                !entry.isIntersecting
              ) {
                return;
              }


              const paths =
                entry.target.querySelectorAll(
                  "path[data-arm-length]"
                );


              paths.forEach(
                (path, index) => {


                  setTimeout(
                    () => {

                      path.style.strokeDashoffset =
                        "0";

                    },

                    index * 100

                  );


                  setTimeout(
                    () => {

                      path.style.transition =
                        "";

                      path.style.strokeDasharray =
                        "";

                      path.style.strokeDashoffset =
                        "";

                      path.style.animation =
                        "";

                    },

                    2300 +
                    index * 100

                  );


                }
              );


              observer.unobserve(
                entry.target
              );

            }
          );

        },

        {

          threshold:.2

        }

      );



    const svgParents =
      [
        ...new Set(

          [
            ...networkPaths
          ].map(
            (path) =>
              path.closest("svg")
          ).filter(Boolean)

        )
      ];


    svgParents.forEach(
      (svg) => {

        svgObserver.observe(
          svg
        );

      }
    );



    /* =====================================================
       06 — GLOBAL CLICK SHOCKWAVE
    ===================================================== */

    document.addEventListener(
      "pointerdown",
      (event) => {


        const clickable =
          event.target.closest(

            `
            a,
            button,
            .wrk-case-card,
            .wrf-result-stat,
            .wrf-method-card
            `

          );


        if (!clickable) {
          return;
        }


        const wave =
          document.createElement(
            "span"
          );


        wave.className =
          "arm-shockwave";


        wave.style.left =
          event.clientX + "px";


        wave.style.top =
          event.clientY + "px";


        document.body.appendChild(
          wave
        );


        wave.addEventListener(
          "animationend",
          () => {

            wave.remove();

          }
        );


      }
    );



    /* =====================================================
       07 — TECHNICAL TEXT SCRAMBLE
    ===================================================== */

    const scrambleTargets =
      document.querySelectorAll(

        `
        .wrf-network-top small,
        .wrf-active-content small,
        .wrf-method-top small,
        .arf-column-label,
        .arf-brand-subtitle,
        .wrf-result-stat > span,
        .wrf-result-stat small,
        .arf-market-list span,
        .arf-contact-block small,
        .arf-signal-strip span
        `

      );


    const scrambleCharacters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_/#";


    const scrambleText =
      (element) => {


        if (
          element.dataset.armScrambled ===
          "true"
        ) {
          return;
        }


        element.dataset.armScrambled =
          "true";


        const finalText =
          element.textContent.trim();


        if (
          !finalText ||
          finalText.length > 55
        ) {
          return;
        }


        let frame = 0;


        const totalFrames =
          Math.max(
            20,
            finalText.length * 2
          );


        const interval =
          setInterval(
            () => {


              const progress =
                frame /
                totalFrames;


              element.textContent =
                finalText

                  .split("")

                  .map(
                    (character, index) => {


                      if (
                        character === " "
                      ) {
                        return " ";
                      }


                      if (
                        index <
                        finalText.length *
                        progress
                      ) {

                        return character;

                      }


                      return scrambleCharacters[
                        Math.floor(
                          Math.random() *
                          scrambleCharacters.length
                        )
                      ];

                    }
                  )

                  .join("");


              frame++;


              if (
                frame >
                totalFrames
              ) {

                clearInterval(
                  interval
                );


                element.textContent =
                  finalText;

              }


            },

            30

          );


      };



    const scrambleObserver =
      new IntersectionObserver(

        (entries, observer) => {

          entries.forEach(
            (entry) => {


              if (
                entry.isIntersecting
              ) {

                scrambleText(
                  entry.target
                );


                observer.unobserve(
                  entry.target
                );

              }


            }
          );

        },

        {

          threshold:.5

        }

      );


    scrambleTargets.forEach(
      (element) => {

        scrambleObserver.observe(
          element
        );

      }
    );



    /* =====================================================
       08 — COSMIC SCROLL PARALLAX
    ===================================================== */

    let nebula =
      document.querySelector(
        ".arm-parallax-nebula"
      );


    if (!nebula) {


      nebula =
        document.createElement(
          "div"
        );


      nebula.className =
        "arm-parallax-nebula";


      document.body.prepend(
        nebula
      );

    }


    const starField =
      document.querySelector(
        ".arx-star-field"
      );


    let parallaxTicking =
      false;


    const updateParallax =
      () => {


        const scrollY =
          window.scrollY;


        if (starField) {

          starField.style.transform =
            `
              translate3d(
                0,
                ${scrollY * -.012}px,
                0
              )
            `;

        }


        nebula.style.transform =
          `
            translate3d(
              ${Math.sin(
                scrollY / 800
              ) * 18}px,

              ${scrollY * -.006}px,

              0
            )
          `;


        parallaxTicking =
          false;

      };


    window.addEventListener(
      "scroll",
      () => {


        if (
          !parallaxTicking
        ) {


          requestAnimationFrame(
            updateParallax
          );


          parallaxTicking =
            true;

        }


      },

      {
        passive:true
      }

    );


    updateParallax();



    /* =====================================================
       09 — MOVING ENERGY BORDERS
    ===================================================== */

    const borderTargets =
      document.querySelectorAll(

        `
        .wrf-network-console,
        .wrf-method-console,
        .wrf-active-panel,
        .wrf-portal
        `

      );


    borderTargets.forEach(
      (element) => {


        element.classList.add(
          "arm-energy-border"
        );


        if (
          element.querySelector(
            ":scope > .arm-border-runner"
          )
        ) {
          return;
        }


        const runner =
          document.createElement(
            "span"
          );


        runner.className =
          "arm-border-runner";


        runner.innerHTML = `

          <i class="arm-run-top"></i>

          <i class="arm-run-right"></i>

          <i class="arm-run-bottom"></i>

          <i class="arm-run-left"></i>

        `;


        element.appendChild(
          runner
        );


      }
    );



    /* =====================================================
       10 — WORK PAGE CONSTELLATION NAVIGATOR
    ===================================================== */

    const workPage =
      document.querySelector(
        ".wrk-page"
      );


    if (workPage) {


      const navigationTargets = [

        {
          selector:".wrk-hero",
          label:"HERO"
        },

        {
          selector:".wrk-index-section",
          label:"INDEX"
        },

        {
          selector:"#case-study-001",
          label:"001"
        },

        {
          selector:"#case-study-002",
          label:"002"
        },

        {
          selector:"#case-study-003",
          label:"003"
        },

        {
          selector:"#case-study-004",
          label:"004"
        },

        {
          selector:"#case-study-005",
          label:"005"
        },

        {
          selector:"#case-study-006",
          label:"006"
        },

        {
          selector:"#results-matrix",
          label:"RESULTS"
        },

        {
          selector:"#methodology",
          label:"METHOD"
        },

        {
          selector:"#work-contact",
          label:"CONTACT"
        }

      ];


      const validTargets =
        navigationTargets

          .map(
            (item, index) => {


              const element =
                document.querySelector(
                  item.selector
                );


              if (!element) {
                return null;
              }


              if (!element.id) {

                element.id =
                  "arm-section-" +
                  index;

              }


              return {

                ...item,

                element

              };

            }
          )

          .filter(Boolean);



      if (
        validTargets.length &&
        !document.querySelector(
          ".arm-constellation"
        )
      ) {


        const navigator =
          document.createElement(
            "nav"
          );


        navigator.className =
          "arm-constellation";


        navigator.setAttribute(
          "aria-label",
          "Work page sections"
        );



        validTargets.forEach(
          (item, index) => {


            const button =
              document.createElement(
                "button"
              );


            button.type =
              "button";


            button.className =
              "arm-constellation-point";


            button.dataset.armIndex =
              index;


            button.innerHTML = `

              <i></i>

              <span>
                ${item.label}
              </span>

            `;


            button.addEventListener(
              "click",
              () => {


                item.element.scrollIntoView({

                  behavior:"smooth",

                  block:"start"

                });


              }
            );


            navigator.appendChild(
              button
            );


          }
        );


        document.body.appendChild(
          navigator
        );


        const points =
          navigator.querySelectorAll(
            ".arm-constellation-point"
          );


        let navigatorTicking =
          false;


        const updateNavigator =
          () => {


            const focusPoint =
              window.innerHeight * .42;


            let closestIndex = 0;

            let closestDistance =
              Infinity;


            validTargets.forEach(
              (item, index) => {


                const rect =
                  item.element.getBoundingClientRect();


                const distance =
                  Math.abs(
                    rect.top -
                    focusPoint
                  );


                if (
                  distance <
                  closestDistance
                ) {

                  closestDistance =
                    distance;


                  closestIndex =
                    index;

                }


              }
            );


            points.forEach(
              (point, index) => {


                point.classList.toggle(
                  "active",

                  index ===
                  closestIndex
                );


              }
            );


            navigatorTicking =
              false;

          };


        window.addEventListener(
          "scroll",
          () => {


            if (
              !navigatorTicking
            ) {


              requestAnimationFrame(
                updateNavigator
              );


              navigatorTicking =
                true;

            }


          },

          {
            passive:true
          }

        );


        updateNavigator();

      }


    }


    console.log(
      "[ARVERSE MOTION] Advanced motion system initialized."
    );


  };



  /* =====================================================
     SAFE START
  ===================================================== */

  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      startMotionSystem
    );

  } else {

    startMotionSystem();

  }


})();