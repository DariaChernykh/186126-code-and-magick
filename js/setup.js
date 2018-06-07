'use strict';

var setup = document.querySelector('.setup');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content;
var setupSimilar = document.querySelector('.setup-similar');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор',
  'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко',
  'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)',
  'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var NUMBER_OF_WIZARDS = 4;

setup.classList.remove('hidden');

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
  var clonedWizard = similarWizardTemplate.cloneNode(true);
  clonedWizard.querySelector('.setup-similar-label').textContent =
    wizard.name;
  clonedWizard.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  clonedWizard.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return clonedWizard;
};

var wizards = generateWizards(NUMBER_OF_WIZARDS);
wizards.forEach(function (wizard) {
  similarListElement.appendChild(getWizardElement(wizard));
}
);

setupSimilar.classList.remove('hidden');
