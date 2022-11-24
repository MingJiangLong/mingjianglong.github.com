

const keywordsRegexp = /(abstract|arguments|boolean|break|byte|case|catch|char|class|const|continue|debugger|delete|do|double|else|enum|eval|export|extends|false|final|finally|float|for|function|goto|if|import|in|instanceof|int|interface|let|long|native|new|null|package|private|protected|public|return|short|static|super|switch|synchronized|this|throw|throws|transient|true|try|typeof|var|void|volatile|while|with|yield)/g
const keyword = [
    "abstract", "arguments", "boolean",
    "break", "byte", "case",
    "catch", "char", "class",
    "const", "continue", "debugger",
    "delete", "do", "double",
    "else", "enum", "eval",
    "export", "extends", "false",
    "final", "finally", "float",
    "for", "function", "goto",
    "if", "import", "in",
    "instanceof", "int", "interface",
    "let", "long", "native",
    "new", "null", "package",
    "private", "protected", "public",
    "return", "short", "static",
    "super", "switch", "synchronized",
    "this", "throw", "throws",
    "transient", "true", "try",
    "typeof", "var", "void",
    "volatile", "while", "with",
    "yield",
]
class CodeParse(){



    constructor(str){
        this.str = str
    }

    parseSpace(){

    }

    /**
     * 保留字
     */
    parseKeywork(){

    }

    /**
     * 解析变量表达式
     */
    parseVariable(){

        const variableRegexp = /(const|let|var)\s+[0-9a-Z$]*/
    }

    parseFn(){

    }
}