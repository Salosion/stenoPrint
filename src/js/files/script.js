// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";

// Открыть каталог
const catalogVisible = () => {
  document.querySelector('.catalog-header__link').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.catalog-header__columns').classList.toggle('active');
  });
}

// Маска для телефона
const phoneMask = () => {
  const element = document.querySelector('.form-offer__top-phone');
  const maskOptions = {
    mask: '+7(000)000-00-00',
    lazy: false,
  }
  const mask = new IMask(element, maskOptions);
}

phoneMask();
catalogVisible();

