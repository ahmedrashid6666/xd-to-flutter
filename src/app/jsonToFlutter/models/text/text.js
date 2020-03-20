const { defaultWidget } = require("./defaultWidget");
const { divisionWidget } = require("./divisionWidget");
const { Shadow } = require("../submodels/shadow");
var withDivision = require("../../jsonToFlutter");

class Text {
  constructor(json) {   
    this.type = Text;
    this.json = json;
    this.x = parseFloat(json["x"]);
    this.y = parseFloat(json["y"]);
    this.w = parseFloat(json["w"]);
    this.h = parseFloat(json["h"]);
    this.gw = parseFloat(json["gbW"]);
    this.gh = parseFloat(json["gbH"]);
    this.type = json['type'];
    this.text = json['text'];
    this.id = json['name'];
    this.withAreaBox = json['withAreaBox'];
    this.rotation = json['rotation'];
    this.opacity = json['opacity'];
    this.color = json['color'];
    this.textAlign = json['textAlign'];
    this.underline = json['underline'];
    this.strikethrough = json['strikethrough'];
    this.fontFamily = json['fontFamily'];
    this.fontWeight = json['fontWeight'];
    this.fontSize = json['fontSize'];
    this.shadow = json['shadow'] == null || json["color"] == null ? null : new Shadow(json['shadow']);
  }

  generateWidget() {
    const text = new Text(this.json);
    const withDiv = withDivision.withDivision;
    let widget = withDiv ? divisionWidget(text) : defaultWidget(text);
    return widget;
  }
}

module.exports = { Text };
