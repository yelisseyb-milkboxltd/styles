(function(global) {
  global.html2json = function html2json(html) {
    let bufArray = [];
    let results = {
      properties: {
        subComponents: [],
      },
    };
    HTMLParser(html, {
      start: function(type, properties, unary) {
        // node for this element
        let node = {};

        //define tag of the element
        if (type === 'h6') {
          node.type = 'heading';
          node.variation = 'smallest'
        } else if (type === 'h5') {
          node.type = 'heading';
          node.variation = 'smaller'
        } else if (type === 'h4') {
          node.type = 'heading';
          node.variation = 'small'
        } else if (type === 'h3') {
          node.type = 'heading';
          node.variation = 'large'
        } else if (type === 'h2') {
          node.type = 'heading';
          node.variation = 'larger'
        } else if (type === 'h1') {
          node.type = 'heading';
          node.variation = 'largest'
        } else if (type === 'img') {
          node.type = 'image';
          node.variation = 'base'
        } else if (type === 'a') {
          node.type = 'link';
          node.variation = 'base'
        } else if (type === 'p') {
          node.type = 'paragraph';
          node.variation = 'base'
        } else if (type === 'ul') {
          node.type = 'list';
          node.variation = 'unordered'
        } else if (type === 'ol') {
          node.type = 'list';
          node.variation = 'ordered'
        }  else if (type === 'li') {
          node.type = 'list_item';
          node.variation = 'base'
        } else {
          node.type = type;
          node.variation ='base';
        }
        node.properties = {};
        //define attributes of the element
        if (properties.length !== 0) {
          let eventObject = {}
          node.properties = properties.reduce(function(pre, properties) {
            let name = null;
            pre.events = eventObject
            if (properties.name.startsWith('on')) {
            }
            if (properties.name === 'class') {
              name = 'classes';
            } else if (properties.name === 'type') {
              name = 'inputType';
            } else if (properties.name.startsWith('on')) {
              name = 'events'
            } else {
              name = properties.name;
            }
            let key = null;
            let value = {};
            if (name === 'events') {
              key = properties.name.substring(2, properties.name.length)
              value[key] = properties.value
            } else {
             value = properties.value.trim()
            }

            if (name === 'classes') {
              if (value.match(/ /)) {
                value = value.split(' ');
              } else {
                value = [value]
              }
            }

            if (name === 'style') {
                value = value.split(';').filter(function (el) {return el !== '';});
                let object = {};
                for (let style in value) {
                  value[style] = value[style].trim().split(': ').join(':').split(':').filter(function (el) {return el !== '';});
                  object[value[style][0]] = value[style][1]
                }
                pre[name] = object
            } else if (name === 'events') {
              eventObject[key] = properties.value
              pre.events[key] = properties.value
            }
            // if properties already exists
            // merge it
            else if (pre[name]) {
              if (Array.isArray(pre[name])) {
                // already array, push to last
                pre[name].push(value);
              } else {
                // single value, make it array
                pre[name] = [pre[name], value];
              }
            } else {
              // not exist, put it
              pre[name] = value;
            }
            if (!Object.entries(pre.events).length) {
              delete pre.events;
            }
            return pre;
          }, {});
        }

        // if this type dosen't have end type like <img src="hoge.png"/> add to parents
        if (unary) {
          let parent = bufArray[0] || results;
          if (parent.properties.subComponents === undefined) {
            parent.properties.subComponents = [];
          }
          parent.properties.subComponents.push(node);
        } else {
          bufArray.unshift(node);
        }
      },

      //define child elements of the element
      end: function(type) {
        // merge into parent type
        let node = bufArray.shift();
        if (bufArray.length === 0) {
          results.properties.subComponents.push(node);
        } else {
          let parent = bufArray[0];
          if (parent.properties.subComponents === undefined) {
            parent.properties.subComponents = [];
          }
          parent.properties.subComponents.push(node);
        }
      },

      //define inner text of the element
      chars: function(text) {
        let node = text;
        if (bufArray.length === 0) {
          results.properties.text = node;
        } else {
          let parent = bufArray[0];
          // if (parent.properties.subComponents === undefined) {
          //   // parent.properties.subComponents = [];
          // }
          if (/\S/.test(text)) {
            parent.properties.text = node;
          }
        }
      },
    });
    return results;
  };
})(this);
