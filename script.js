const features = document.getElementById('features');
const company = document.getElementById('company');
const featureArrow = document.getElementById('arrowDown');
const companyArrow = document.getElementById('companyArrow');
const mobileFeatures = document.getElementById('mobileFeatures');
const mobileFeaturesArrow = document.getElementById('mobileFeaturesArrow');
const mobileCompany = document.getElementById('mobileCompany');
const mobileCompanyArrow = document.getElementById('mobileCompanyArrow');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.getElementById('closeBtn');

const showDropDown = () => {
  features.addEventListener('click', () => {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.add('show');
    dropdown.classList.remove('hide');
    featureArrow.src = 'images/icon-arrow-up.svg';
  });
};

const showCompanyDropDown = () => {
  company.addEventListener('click', () => {
    const dropdown = document.querySelector('.company-dropdown');
    dropdown.classList.add('show');
    dropdown.classList.remove('hide');
    companyArrow.src = 'images/icon-arrow-up.svg';
  });
};

// Show mobile dropdowns
const showMobileFeaturesDropDown = () => {
  const dropdown = document.querySelector('.mobile-features-dropdown');
  dropdown.classList.add('show');
  dropdown.classList.remove('hide');
  mobileFeaturesArrow.src = 'images/icon-arrow-up.svg';
};

const showMobileCompanyDropdown = () => {
  const dropdown = document.querySelector('.mobile-company-dropdown');
  dropdown.classList.add('show');
  dropdown.classList.remove('hide');
  mobileCompanyArrow.src = 'images/icon-arrow-up.svg';
};

// Close dropdown menu if the user clicks outside of dropdown
let element = document.querySelector('.dropdown');
let companyDropDown = document.querySelector('.company-dropdown');
document.addEventListener('click', function (e) {
  if (
    e.target.matches('dropdown') ||
    e.target.matches('.company-dropdown') ||
    e.target.matches('li, a')
  ) {
    return;
  }

  document.querySelectorAll('.dropdown').forEach(function (elem) {
    elem.classList.remove('show');
    elem.classList.add('hide');
  });
  document.querySelectorAll('.company-dropdown').forEach(function (elem) {
    elem.classList.remove('show');
    elem.classList.add('hide');
  });
  document
    .querySelectorAll('.mobile-features-dropdown')
    .forEach(function (elem) {
      elem.classList.remove('show');
      elem.classList.add('hide');
    });
  document
    .querySelectorAll('.mobile-company-dropdown')
    .forEach(function (elem) {
      elem.classList.remove('show');
      elem.classList.add('hide');
    });

  featureArrow.src = 'images/icon-arrow-down.svg';
  mobileFeaturesArrow.src = 'images/icon-arrow-down.svg';
  companyArrow.src = 'images/icon-arrow-down.svg';
  mobileCompanyArrow.src = 'images/icon-arrow-down.svg';
});

// Show mobile menu
const showMobileMenu = () => {
  mobileMenu.classList.toggle('show-menu');

  mobileContainer = document.querySelector('.mobile-container');
  mobileContainer.classList.toggle('menu-open');
};
