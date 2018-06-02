'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var FONT_SPACE = 30;
var GAP = 50;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  ctx.font = '16px, PT Mono';
  ctx.fillText('Ура вы победили', CLOUD_X + GAP / 2, CLOUD_Y + FONT_SPACE);
  ctx.fillText('Список результатов:', CLOUD_X + GAP / 2, CLOUD_Y + FONT_SPACE * 1.5);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + GAP / 2 + (GAP + BAR_WIDTH) * i, CLOUD_HEIGHT);
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP / 2 + (GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - (BAR_HEIGHT * times[i] / maxTime) - FONT_SPACE);

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgb(0, 0, ' + Math.round(Math.random() * 255) + ')';
    }
    ctx.fillRect(CLOUD_X + GAP / 2 + (GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - FONT_SPACE / 2, BAR_WIDTH, -(BAR_HEIGHT * times[i] / maxTime));

  }
};
