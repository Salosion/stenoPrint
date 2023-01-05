// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";

document.querySelector('.catalog-header__link').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.catalog-header__columns').classList.toggle('active');
});
