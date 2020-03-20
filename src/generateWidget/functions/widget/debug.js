const { Column } = require("./models/column");
const { Container } = require("./models/container");
const { Stack } = require("./models/stack");
const { Row } = require("./models/row");
const { Text } = require("./models/text");
const { Svg } = require("./models/svg");

function logTree(no, dist) {
  var ant = 0;
  var start = "";
  for (var i = 0; i < dist; i++) {
    start += "|  ";
  }
  if (ant == dist) {
    console.log("\nStructure:");
  }
  console.log(`${start}${_typeToString(no.widget.type)} - ${no.widget.id}, w = ${no.widget.gw}, h = ${no.widget.gh}, x = ${no.widget.x}, y = ${no.widget.y}`);
  no.children.forEach(function (f) {
    logTree(f, dist + 1);
  });
}

function logCode(code) {
  console.log(`\nCode:\n${code}`);
}
module.exports = { logCode, logTree };

function _typeToString(type) {
  switch (type) {
    case Column:
      return "Column";
    case Row:
      return "Row";
    case Container:
      return "Container";
    case Stack:
      return "Stack";
    case Svg:
      return "Svg";
    default:
      return "Text";
  }
}