/* =========================================================
   ARVERSE CONTACT — PROJECT INTAKE ENGINE
========================================================= */

(() => {

  const form =
    document.getElementById(
      "arverseProjectForm"
    );


  if (!form) {
    return;
  }


  const panels =
    document.querySelectorAll(
      ".cit-form-step"
    );


  const steps =
    document.querySelectorAll(
      ".cit-step"
    );


  const nextButtons =
    document.querySelectorAll(
      "[data-cit-next]"
    );


  const backButtons =
    document.querySelectorAll(
      "[data-cit-back]"
    );


  const coreStage =
    document.getElementById(
      "citCoreStage"
    );


  const currentModule =
    document.getElementById(
      "citCurrentModule"
    );


  const completion =
    document.getElementById(
      "citCompletion"
    );


  const progressText =
    document.getElementById(
      "citProgressText"
    );


  const progressFill =
    document.getElementById(
      "citProgressFill"
    );


  const moduleNames = {

    1: "IDENTITY",

    2: "SYSTEM",

    3: "SCOPE"

  };



  function showStep(stepNumber) {

    panels.forEach((panel) => {

      panel.classList.remove(
        "active"
      );

    });


    steps.forEach((step) => {

      step.classList.remove(
        "active"
      );

    });



    const activePanel =
      document.querySelector(
        '[data-cit-panel="' +
        stepNumber +
        '"]'
      );


    const activeStep =
      document.querySelector(
        '[data-cit-step="' +
        stepNumber +
        '"]'
      );


    if (activePanel) {

      activePanel.classList.add(
        "active"
      );

    }


    if (activeStep) {

      activeStep.classList.add(
        "active"
      );

    }



    const percent =
      Math.round(
        stepNumber / 3 * 100
      );


    const paddedStage =
      String(stepNumber).padStart(
        2,
        "0"
      );


    if (coreStage) {

      coreStage.textContent =
        paddedStage;

    }


    if (currentModule) {

      currentModule.textContent =
        moduleNames[stepNumber];

    }


    if (completion) {

      completion.textContent =
        percent + "%";

    }


    if (progressText) {

      progressText.textContent =
        paddedStage + " / 03";

    }


    if (progressFill) {

      progressFill.style.width =
        percent + "%";

    }



    const terminal =
      document.querySelector(
        ".cit-terminal"
      );


    if (terminal) {

      terminal.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }

  }



  function validateStepOne() {

    const name =
      document.getElementById(
        "citName"
      );


    const email =
      document.getElementById(
        "citEmail"
      );


    const region =
      document.getElementById(
        "citRegion"
      );


    if (!name.value.trim()) {

      name.focus();

      return false;

    }


    if (
      !email.value.trim() ||
      !email.validity.valid
    ) {

      email.focus();

      return false;

    }


    if (!region.value) {

      region.focus();

      return false;

    }


    return true;

  }



  nextButtons.forEach((button) => {

    button.addEventListener(
      "click",
      () => {


        const targetStep =
          Number(
            button.getAttribute(
              "data-cit-next"
            )
          );


        if (
          targetStep === 2 &&
          !validateStepOne()
        ) {

          return;

        }


        showStep(
          targetStep
        );


      }
    );

  });



  backButtons.forEach((button) => {

    button.addEventListener(
      "click",
      () => {


        const targetStep =
          Number(
            button.getAttribute(
              "data-cit-back"
            )
          );


        showStep(
          targetStep
        );


      }
    );

  });



 /* =========================================================
   PROJECT INTAKE SUBMISSION
========================================================= */

form.addEventListener(
  "submit",
  async (event) => {

    event.preventDefault();


    const budget =
      document.getElementById(
        "citBudget"
      );


    const timeline =
      document.getElementById(
        "citTimeline"
      );


    const message =
      document.getElementById(
        "citMessage"
      );


    if (!budget.value) {

      budget.focus();

      return;

    }


    if (!timeline.value) {

      timeline.focus();

      return;

    }


    if (!message.value.trim()) {

      message.focus();

      return;

    }



    const submitButton =
      form.querySelector(
        ".cit-submit-btn"
      );


    if (!submitButton) {

      return;

    }


    const originalButtonHTML =
      submitButton.innerHTML;


    submitButton.disabled =
      true;


    submitButton.innerHTML =
      "TRANSMITTING PROJECT INTAKE...";



    const selectedServices =
      Array.from(
        form.querySelectorAll(
          'input[name="services"]:checked'
        )
      )
      .map((input) => {

        return input.value;

      })
      .join(", ");



    const businessStageInput =
      form.querySelector(
        'input[name="business_stage"]:checked'
      );


    const businessStage =
      businessStageInput
        ? businessStageInput.value
        : "Not provided";



    const payload = {

      name:
        document.getElementById(
          "citName"
        ).value.trim(),

      email:
        document.getElementById(
          "citEmail"
        ).value.trim(),

      company:
        document.getElementById(
          "citCompany"
        ).value.trim() || "Not provided",

      region:
        document.getElementById(
          "citRegion"
        ).value,

      requested_services:
        selectedServices || "Not selected",

      business_stage:
        businessStage,

      estimated_budget:
        budget.value,

      target_timeline:
        timeline.value,

      project_brief:
        message.value.trim(),

      _subject:
        "New ARVERSE Project Intake",

      _template:
        "table"

    };



    try {


      const response =
        await fetch(
          "https://formsubmit.co/ajax/teamarverse@gmail.com",
          {

            method:
              "POST",

            headers: {

              "Content-Type":
                "application/json",

              "Accept":
                "application/json"

            },

            body:
              JSON.stringify(
                payload
              )

          }
        );


      if (!response.ok) {

        throw new Error(
          "Project intake transmission failed."
        );

      }


      console.log(
        "[ARVERSE CONTACT] Project intake submitted successfully."
      );


      window.location.href =
        "thank-you.html";


    } catch (error) {


      console.error(
        "[ARVERSE CONTACT] Submission error:",
        error
      );


      submitButton.disabled =
        false;


      submitButton.innerHTML =
        originalButtonHTML;


      alert(
        "Transmission failed. Please try again or contact ARVERSE directly."
      );

    }

  }
);


  showStep(1);


  console.log(
    "[ARVERSE CONTACT] Project intake engine ready."
  );

})();