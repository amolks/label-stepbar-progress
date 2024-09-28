const StepBar = (() => {
  const DEFAULT_SETTINGS = {
      defaultStep: 0,
      progressElementSelector: ".progress-bar-element",
      progressBarSelector: ".progressbar li",
      progressBarLabelSelector: ".progressbar-top li",
      activeClass: "active",
      changedClass: "changed",
      stepChangeElement: ".progressbar-top > li.changed",
      progressBarClass: ".progress-bar"
  };

  const createProgressBar = (progressBar) => {
      const progressElement = progressBar.querySelector(DEFAULT_SETTINGS.progressElementSelector);
      const listItems = progressBar.querySelectorAll(DEFAULT_SETTINGS.progressBarSelector);
      const listLabelItems = progressBar.querySelectorAll(DEFAULT_SETTINGS.progressBarLabelSelector);
      const defaultStep = parseInt(progressBar.getAttribute("data-default-step")|| DEFAULT_SETTINGS.defaultStep) ;

      const updateProgressElement = () => {
          const activeItems = progressBar.querySelectorAll(DEFAULT_SETTINGS.stepChangeElement);
          const totalItems = listItems.length - 1;
          const percentage = (activeItems.length / totalItems) * 100;
          progressElement.value = percentage;
          const halfLiWidth = listItems[0]?.offsetWidth / 2 || 0;
          progressElement.style.margin = `0 ${halfLiWidth}px`;
      };

      const initializeProgress = () => {
          listLabelItems.forEach((li, index) => {
              li.classList.toggle(DEFAULT_SETTINGS.changedClass, index < defaultStep - 1);
              li.classList.toggle(DEFAULT_SETTINGS.activeClass, index === defaultStep - 1);
          });
          listItems.forEach((li, index) => {
              li.classList.toggle(DEFAULT_SETTINGS.changedClass, index < defaultStep - 1);
              li.classList.toggle(DEFAULT_SETTINGS.activeClass, index === defaultStep - 1);
          });
          updateProgressElement();
      };

      const onResize = () => {
          updateProgressElement();
      };

      return {
          initializeProgress,
          onResize,
      };
  };

  const initializeAllProgressBars = () => {
      const progressBars = document.querySelectorAll(DEFAULT_SETTINGS.progressBarClass);
      progressBars.forEach((progressBar) => {
          const bar = createProgressBar(progressBar);
          bar.initializeProgress();
          window.addEventListener("resize", bar.onResize);
      });
  };

  return {
      initializeAllProgressBars,
  };
})();

window.addEventListener("load", () => StepBar.initializeAllProgressBars());
