const { Container } = require("../models/container/container");
const { Svg } = require("../models/svg");
const { Text } = require("../models/text/text");
const { Image } = require("../models/image");
const { SizedBox } = require("../models/sizedBox");

async function jsonToWidgets(json) {
  let widgets = [];
  json = JSON.parse(json);
  let position = 0;
  while (true) {
    let widget = _addWidgetOnList(json[`${position}`]);
    if (widget == null) break;
    position++;
    widgets.push(widget);
  }
  return widgets;
}

function _addWidgetOnList(json) {
  if (json == null) return null;
  switch (json["type"]) {
    case "sizedBox":
      return new SizedBox(json);
    case "rectangle":
      return new Container(json);
    case "image":
      return new Image(json);
    case "svg":
      return new Svg(json);
    case "text":
      return new Text(json);
    default:
      throw `${json["type"]} not implemented yet`;
  }
}

module.exports = { jsonToWidgets };
