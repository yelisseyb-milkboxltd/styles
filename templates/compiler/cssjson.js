let CSSJSON = new function () {
    let base = this;
    base.init = function () {
        String.prototype.trim = function () {
            return this.replace(/^\s+|\s+$/g, '');
        };
        String.prototype.repeat = function (n) {
            return new Array(1 + n).join(this);
        };
    };
    base.init();
    let lineAttrX = /([^\:]+):([^\;]*);/;
    let altX = /(\/\*[\s\S]*?\*\/)|([^\s\;\{\}][^\;\{\}]*(?=\{))|(\})|([^\;\{\}]+\;(?!\s*\*\/))/gmi;
    let isEmpty = function (x) {
        return typeof x == 'undefined' || x.length == 0 || x == null;
    };
    base.toJSON = function (cssString) {
        let node = {
            default: {},
            classes: {},
        };
        while ((match = altX.exec(cssString)) != null) {
            if (!isEmpty(match[2])) {
                let name = 'body '+ match[2].trim();
                // let name = match[2].trim();
                let newNode = base.toJSON(cssString);
                let bits = [name];
                for (let i = 0; i < bits.length; i++) {
                    let sel = bits[i].trim();
                    if(node.classes[sel]) {
                        node.classes[sel].default = Object.assign({},node.classes[sel].default, newNode.default)
                    } else {
                        node.classes[sel] = newNode;
                    }
                    if (name.includes('@media')) {
                        let mediaName = name.slice(name.indexOf('@media') + 6).trim()
                        let subClass = node.classes[name].classes
                        for (let j = 0; j < Object.keys(subClass).length; j++) {
                            let selector = Object.keys(subClass)[j]
                            if(Object.keys(node.classes).includes(selector)) {
                                node.classes[selector][mediaName] = newNode.classes[selector].default
                            } else {
                                node.classes[selector] = {}
                                node.classes[selector][mediaName] = newNode.classes[selector].default
                            }
                        }
                    }
                }
            } else if (!isEmpty(match[3])) {
                // Node has finished
                if (!Object.entries(node.classes).length) {
                    delete node.classes;
                }
                return node;
            } else if (!isEmpty(match[4])) {
                let line = match[4].trim();
                let attr = lineAttrX.exec(line);
                if (attr) {
                    // Attribute
                    let name = attr[1].trim();
                    let value = attr[2].trim();
                    node.default[name] = value;
                }
            }
        }
        let keys = Object.keys(node.classes)
        for (let i = 0; i < keys.length; i++) {
            if(keys[i].includes('@media')) {
               delete node.classes[keys[i]]
            }
        }
        return node;
    };
};
if (typeof module === 'object') {
    module.exports = CSSJSON;
}
