const { widthHeight } = require("../functions/util");
const { Row } = require("./row");
const { Column } = require("./column");
const { Stack } = require("./stack");

class SizedBox {
    constructor(json) {
        this.type = SizedBox;
        if (json["x"] != null) {
            this.x = json["x"];
            this.y = json["y"];
            this.id = json["name"];
            this.gw = json["gw"];
            this.gh = json["gh"];
        }
        this.w = json["w"];
        this.h = json["h"];
    }

    generateWidget(no) {
        if (this.w == 0 && this.h == 0) return "";
        if (this.x != null) {
            let child = this._child(no);
            if (child == null) return "";
            const widget = no.children[0].widget;
            const type = widget.type;
            if (type == Row || type == Column || type == Stack) {
                return `SizedBox(${widthHeight(this.w, true)}${widthHeight(this.h, false)}child:${child},)`;
            } else {
                return child;
            }
        } else {
            return `SizedBox(${widthHeight(this.w, true)}${widthHeight(this.h, false)})`.replace(",", "");
        }
    }

    _child(no) {
        let child = no.children.length > 0
            ? no.children[0].widget.generateWidget(no.children[0])
            : null;
        return child;
    }
}

exports.SizedBox = SizedBox;
module.exports = { SizedBox };
