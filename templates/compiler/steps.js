let steps = function (steps) {
    let node = []
    let pages = steps[1]
    let siteName = steps[0]
    for (let page in pages) {
        node[page] = {}
        node[page].title = siteName
        node[page].name = pages[page]
        node[page].navigation = {}
        for (let trigger in pages) {
            node[page].navigation[pages[trigger]] = {
                "triggers": [`navigation--${pages[trigger]}`]
            }
        }
        node[page].components = [
            {
                "name": "body",
                "properties": {
                    "subComponents": [
                        {
                            "name": "header"
                        },
                        {
                            "name": node[page].name
                        },
                        {
                            "name": "footer"
                        }
                    ]
                }
            }
        ]
    }
    return node
}