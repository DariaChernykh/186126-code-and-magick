'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var SHIFT = 10;
var FONT_SPACE = 30;
var GAP = 50;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxTime = function (arr) {
  var maxTime = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxTime) {
      maxTime = arr[i];
    }
  }

  return maxTime;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + SHIFT, CLOUD_Y + SHIFT, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  ctx.font = '16px, PT Mono';
  ctx.fillText('Ура вы победили', CLOUD_X + GAP / 2, CLOUD_Y + FONT_SPACE);
  ctx.fillText('Список результатов:', CLOUD_X + GAP / 2,
      CLOUD_Y + FONT_SPACE * 1.5);

  var maxTime = getMaxTime(times);

  for (var i = 0; i < names.length; i++) {
    var calculatedSpace = CLOUD_X + GAP / 2 + (GAP + BAR_WIDTH) * i;
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], calculatedSpace, CLOUD_HEIGHT);
    ctx.fillText(Math.round(times[i]), calculatedSpace,
        CLOUD_HEIGHT - (BAR_HEIGHT * times[i] / maxTime) - FONT_SPACE);

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgb(0, 0, ' + Math.round(Math.random() * 255) + ')';
    }
    ctx.fillRect(calculatedSpace, CLOUD_HEIGHT - FONT_SPACE / 2,
        BAR_WIDTH, -(BAR_HEIGHT * times[i] / maxTime));
  }
};
