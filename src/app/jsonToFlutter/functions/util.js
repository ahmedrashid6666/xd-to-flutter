var withDivision = require("../jsonToFlutter");
var withSimpleCode = require("../jsonToFlutter");
var withDivision = require("../jsonToFlutter");

function sz(value) {
  if (withSimpleCode.withSimpleCode && value > 0) {
    return `sz(${value})`;
  }
  return `${value}`;
}

function hexColorToFlutterColor(hexColor, opacity, transparent, withTag) {
  if (hexColor == null) return "";
  transparent = transparent == null ? false : transparent;
  withTag = withTag == null ? true : withTag;
  let color;
  if (opacity == 0) {
    if (transparent)
      color = "Colors.transparent";
    else
      return "";
  } else {
    color = _hexToMaterialColor(`Color(${hexColor.replace("#", "0xff")})`) + (opacity == 1 ? "" : `.withOpacity(${opacity})`);
  }
  if (!withTag) return `${color}`;
  return `color: ${color}` + (withDivision.withDivision ? "" : ",");
}

function _hexToMaterialColor(color) {
  return color;
}

function widthHeight(value, width, division) {
  division = division == null ? false : division;
  let type = "height";
  if (value > 0) {
    value = fixDouble(value);
    if (width) type = "width";
    if (division) return `..${type}(${sz(value)})`;
    return `${type}: ${sz(value)},`;
  }
  return "";
}

function fixDouble(value) {
  if (value == null) return value;
  try {
    return parseFloat(value.toFixed(2));
  } catch (e) {
    return parseFloat((parseFloat(value)).toFixed(2));
  }
}

function rotate(rotation, child) {
  if (rotation > 0) {
    if (withDivision.withDivision) return `..rotate(${fixDouble(rotation / 360)})`;
    return `
    Transform.rotate(
      angle: ${rotation} * pi / 180,
    child: ${child},
    )
    `;
  }
  return child != null ? child : "";
}

module.exports = { rotate, widthHeight, hexColorToFlutterColor, sz, fixDouble };

