const { width, height } = require("./utils/width_height");
const { fillToColor } = require("./utils/fill_to_color");
const { doubleWithTag } = require("./utils/double_with_tag");
const { shadow } = require("./utils/shadow");
const { googleFonts } = require("./utils/google_fonts");

class Text {
    constructor(node) {
        this.node = node;
    }
    toDart() {
        let node = this.node;
        return new XDText(node).toDart();
    }
}

module.exports = {
    Text: Text,
};


class XDText {
    constructor(node) {
        this.node = node;
    }

    toDart() {
        const widget = `
        Text(
            '${this.text()}',
            ${this.align()}
            ${this.textStyle()}
        )
        `
        return this.areaBox(widget);
    }

    areaBox(widget) {
        const node = this.node;
        let withAreaBox = node.areaBox != null;
        if (withAreaBox) {
            return `SizedBox(
                ${width(node)}
                ${height(node)}
                child: ${widget},
            )
            `
        }
        return widget;
    }

    fontSize() {
        const node = this.node;
        return doubleWithTag('fontSize', node.fontSize);
    }

    textStyle() {
        const node = this.node;
        let family = node.fontFamily.replace(/\s+/g, '');
        family = family[0].toLowerCase() + family.substring(1, family.length);
        const content = `
        ${this.fontSize()}
        ${this.color()}
        ${this.decoration()}
        ${this.shadow()}
        ${this.fontWeight()}
        `;
        if (googleFonts.includes(family)) {
            return `style: GoogleFonts.${family}(
            ${content}
          ),`;
        }
        return `style: TextStyle(
          fontFamily: '${node.fontFamily}',
          ${content}         
        ),`;
    }

    text() {
        const node = this.node;
        return node.text.replace(new RegExp("\n", 'g'), "\\n");
    }

    shadow() {
        const node = this.node;
        if (node.shadow != null && node.shadow.visible) {
            return `shadows: [
                ${shadow(node)}
            ],`;
        }
        return '';
    }

    border() {
        return '';
    }

    color() {
        const node = this.node;
        const color = fillToColor(node.fill);
        return `color: ${color},`;
    }

    align() {
        const node = this.node;
        let tag = "textAlign:";
        let value;
        if (node.textAlign == 'right') {
            value = `TextAlign.end`;
        } else if (node.textAlign == 'center') {
            value = `TextAlign.center`;
        }
        if (value != null) return `${tag} ${value},`;
        return "";
    }

    decoration() {
        const node = this.node;
        let content;
        if (node.strikethrough && node.underline) {
            content = `TextDecoration.combine(
                [TextDecoration.lineThrough, TextDecoration.underline],
                )`;
        } else if (node.strikethrough) {
            content = "TextDecoration.lineThrough";
        } else if (node.underline) {
            content = "TextDecoration.underline";
        }
        if (content != undefined) {
            return `decoration: ${content},`;
        }
        return "";
    }

    fontWeight() {
        const tag = 'fontWeight:';
        const node = this.node;
        let fontWeight = node.fontStyle.toLowerCase().replace("-", "");
        fontWeight = fontWeight.toLowerCase().replace("-", "");
        if (fontWeight == "thin") {
            fontWeight = "FontWeight.w100";
        } else if (fontWeight == "extraligth") {
            fontWeight = "FontWeight.w200";
        } else if (fontWeight == "light") {
            fontWeight = "FontWeight.w300";
        } else if (fontWeight == "medium") {
            fontWeight = "FontWeight.w500";
        } else if (fontWeight == "semibold") {
            fontWeight = "FontWeight.w600";
        } else if (fontWeight == "bold") {
            fontWeight = "FontWeight.bold";
        } else if (fontWeight == "extrabold") {
            fontWeight = "FontWeight.w800";
        } else if (fontWeight == "black") {
            fontWeight = "FontWeight.w900";
        } else {
            fontWeight = "FontWeight.w400";
            return "";
        }
        return `${tag} ${fontWeight},`;
    }
}