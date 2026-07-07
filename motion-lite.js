/* ==================================================
   ARVERSE — LIGHTWEIGHT MOTION SYSTEM
================================================== */

(() => {
    /* =========================================================
   MOBILE STATIC MODE
========================================================= */

if (
  window.matchMedia(
    "(max-width: 768px)"
  ).matches
) {

  document.documentElement.classList.add(
    "arv-mobile-static"
  );


  document
    .querySelectorAll(
      ".arv-lite-section, .arv-lite-heading"
    )
    .forEach(
      (element) => {

        element.style.opacity =
          "1";


        element.style.visibility =
          "visible";


        element.style.transform =
          "none";


        element.style.filter =
          "none";

      }
    );


  console.log(
    "[ARVERSE MOBILE] Motion Lite disabled."
  );


  return;

}

  const startMotion = () => {

    document.documentElement.classList.add(
      "arv-motion-ready"
    );


    /* =============================================
       SECTION REVEAL
    ============================================= */

const sections =
  document.querySelectorAll(
    `
    main > section,
    .wrk-page > section,
    .cap-page-shell > section,
    .prt-page > section,
    .intel-page > section
    .pricing-page > section
    .contact-page > section
    .thank-you-page > section
    .terms-page > section
    .privacy-page > section
    `
  );


    const sectionObserver =
      new IntersectionObserver(
        (entries, observer) => {

          entries.forEach((entry) => {

            if (!entry.isIntersecting) {
              return;
            }


            entry.target.classList.add(
              "arv-lite-visible"
            );


            observer.unobserve(
              entry.target
            );

          });

        },
        {
          threshold: 0.07,
          rootMargin: "0px 0px -6% 0px"
        }
      );


    sections.forEach((section) => {

      section.classList.add(
        "arv-lite-section"
      );

      sectionObserver.observe(
        section
      );

    });



    /* =============================================
       HEADING REVEAL
    ============================================= */

    const headings =
      document.querySelectorAll(
        `
        .wrk-page h1,
        .wrk-page h2,
        .cap-page-shell h1,
        .cap-page-shell h2,
        .intel-page h1,
        .intel-page h2,
        .prt-page h1,
        .prt-page h2,
        .pricing-page h1,
        .pricing-page h2,
        .contact-page h1,
        .contact-page h2
        `
      );


    const headingObserver =
      new IntersectionObserver(
        (entries, observer) => {

          entries.forEach((entry) => {

            if (!entry.isIntersecting) {
              return;
            }


            entry.target.classList.add(
              "arv-lite-heading-visible"
            );


            observer.unobserve(
              entry.target
            );

          });

        },
        {
          threshold: 0.2
        }
      );


    headings.forEach((heading) => {

      heading.classList.add(
        "arv-lite-heading"
      );


      headingObserver.observe(
        heading
      );

    });


    console.log(
      "[ARVERSE] Lightweight motion ready."
    );

  };


  if (document.readyState === "loading") {

    document.addEventListener(
      "DOMContentLoaded",
      startMotion
    );

  } else {

    startMotion();

  }

})();