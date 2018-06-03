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

var getMaxTime = function (a, b) {
  return b - a;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + SHIFT, CLOUD_Y + SHIFT, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  ctx.font = '16px, PT Mono';
  ctx.fillText('Ура вы победили', CLOUD_X + GAP / 2, CLOUD_Y + FONT_SPACE);
  ctx.fillText('Список результатов:', CLOUD_X + GAP / 2,
      CLOUD_Y + FONT_SPACE * 1.5);

  times.sort(getMaxTime);
  var maxTime = times[0];

  names.forEach(function (value, index) {
    var calculatedSpace = CLOUD_X + GAP / 2 + (GAP + BAR_WIDTH) * index;
    ctx.fillStyle = '#000';
    ctx.fillText(value, calculatedSpace, CLOUD_HEIGHT);
    ctx.fillText(Math.round(times[index]), calculatedSpace,
        CLOUD_HEIGHT - (BAR_HEIGHT * times[index] / maxTime) - FONT_SPACE);

    if (value === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgb(0, 0, ' + Math.round(Math.random() * 255) + ')';
    }
    ctx.fillRect(calculatedSpace, CLOUD_HEIGHT - FONT_SPACE / 2,
        BAR_WIDTH, -(BAR_HEIGHT * times[index] / maxTime));
  });
};
