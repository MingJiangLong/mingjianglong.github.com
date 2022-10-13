const keywords = [
    'var',
    'let',
    'function',
    'class',
    'interface',
]

const PARSE_FN = {
    Title: "Title",
    LineBreak: "LineBreak",
    ALink: "ALink",
    StartRadius: "StartRadius",
    Code: 'Code',
    Tip: "Tip",
    Mark: "Mark",
    Bold: "Bold"
}

const Rule = {
    /** 标题 */
    Title: /(#+)\s(.+)\r\n/g,
    /** 换行 */
    LineBreak: /\r\n\r\n/g,
    /** 链接 */
    ALink: /\[([^\]]*)\]\(([^\)]*)\)/g,
    /** 标记 */
    Mark: /`([^`]+)`/g,
    /** 加粗 */
    Bold: /\*\*([^*]+)\*\*/g,
    /** 代码片段 */
    Code: /\r\n```[a-zA-Z]*\r\n([^`]*)\r\n```/g,
    /** 提示 */
    Tip: /\r\n>\s(.*)/gm

}

class MD2Html {

    /**
     * 解析顺序
     */
    parseOrder = [];

    haveParsedRule = []

    constructor(str) {
        this.str = str
    }

    /**
     * 是否已经解析
     * @param {string} key 
     * @returns 
     */
    haveParsed(key) {
        return this.haveParsedRule.find(item => item === key)
    }

    callback(fnKey, fn) {
        if (this.haveParsed(fnKey)) return this;
        typeof fn === 'function' && fn()
        this.haveParsedRule.push(fnKey)
        return this;
    }

    /**
     * 解析title
     * @param {()=>string} [callback] 
     * @returns 
     */
    parseTitle(callback) {
        return this.callback(PARSE_FN.Title, () => {
            this.str = this.str.replace(Rule.Title, (v, symbol, content) => {
                return `<h${symbol.length}>${content}</h${symbol.length}>`
            })
        })
    }

    /**
     * 解析换行符
     * 优先级最后
     */
    parseLineBreak() {
        return this.callback(PARSE_FN.LineBreak, () => {
            this.str = this.str.replace(Rule.LineBreak, '<div style="height:2rem;background:white"></div>')
        })
    }

    /**
     * 解析链接
     * @returns 
     */
    parseALink() {
        return this.callback(PARSE_FN.ALink, () => {
            this.str = this.str.replace(Rule.ALink, (v, v1, v2) => {
                return `<a href='${v2}'>${v1}</a>`
            })
        })
    }


    /**
     * 圆点的起始符号
     * @returns 
     */
    parseRadius() {
        return this.callback(PARSE_FN.StartRadius, () => {
            this.str = this.str.replace(/\r\n\*\s(.+)/g, (v, v1) => {
                return `\r\n<div style="display:flex;align-items:center"><div style="height:0.5rem;width:0.5rem;border-radius:0.5rem;margin:0 0.5rem;background:black"></div><div>${v1}</div></div>`
            })
        })
    }

    /**
     * 消息提示
     * @returns 
     */
    parseTip() {
        return this.callback(PARSE_FN.Tip, () => {
            this.str = this.str.replace(Rule.Tip, (v, v1) => {
                return `\r\n<div style="background:#F8F8F8;color:#02555f;padding:1rem 1rem; border-left: 0.5rem solid blue">${v1}</div>`;
            })
        })
    }

    /**
     * 代码
     * Code和Mark优先级
     * @returns 
     */
    parseCode() {
        return this.callback(PARSE_FN.Code, () => {
            this.str = this.str.replace(Rule.Code, (v, v1) => {
                return `\r\n<div style="background:black;color:white;padding:1rem 1rem;">${v1}</div>\r\n`;
            })
        })
    }

    /**
     * 标记
     * @returns 
     */
    parseMark() {
        return this.callback(PARSE_FN.Mark, () => {
            this.str = this.str.replace(Rule.Mark, (v, v1) => {
                return `<span style="color:#CB814F;font-size:16px">${v1}</span>`
            })
        })
    }

    /**
     * 加粗
     * @returns 
     */
    parseBold() {
        return this.callback(PARSE_FN.Bold, () => {
            this.str = this.str.replace(Rule.Bold, (v, v1) => {
                return `<span style="font-weight:bold;font-size:16px">${v1}</span>`
            })
        })
    }

    parse() {
        return this.parseTitle()
            .parseCode()
            .parseALink()
            .parseRadius()
            .parseTip()
            .parseLineBreak()
            .parseMark()
            .parseBold()
            .str
    }

}
