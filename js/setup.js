'use strict';

var setup = document.querySelector('.setup');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var wizardElement = similarWizardTemplate.cloneNode(true);

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор',
  'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко',
  'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)',
  'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

setup.classList.remove('hidden');
similarWizardTemplate.querySelector('.setup-similar-item').remove();

function generateData(currentArray) {
  return currentArray[Math.floor(Math.random() * currentArray.length)];
}

function generateWizards(number) {
  var wizards = [];
  while (wizards.length < number) {
    wizards.push({
      name: generateData(WIZARD_NAMES) + ' ' + generateData(WIZARD_SURNAMES),
      coatColor: generateData(COAT_COLORS),
      eyesColor: generateData(EYES_COLORS)
    });
  }
  return wizards;
}

var getWizardElement = function (wizard) {
  var localWizard = wizardElement.cloneNode(true);
  localWizard.querySelector('.setup-similar-label').textContent = wizard.name;
  localWizard.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  localWizard.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return localWizard;
};

var ourWizards = generateWizards(4);

ourWizards.forEach(function (value) {
  similarWizardTemplate.appendChild(getWizardElement(value));
});
similarListElement.appendChild(similarWizardTemplate);

document.querySelector('.setup-similar').classList.remove('hidden');
