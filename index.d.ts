interface Window {
    markdownit: () => {
        render: (str: string) => string
    }
    MDfiles: {
        /**
         * 标题
         */
        name: string
        /**
         * 文本内容
         */
        content: string

        /**
         * 关键词
         */
        keywords: string[]

        /**
         * 创建时间
         */
        createTime: number
    }[]
}

/**
 * 添加样式
 * @param styles 
 * @param dom 
 */
declare function addStyle(styles: CSSStyleDeclaration, dom: HTMLElement): void
/**
 * 根据id查找节点
 * @param key 
 */
declare function findElementById(key: string): HTMLElement | null
/**
 * 移除子节点
 * @param dom 
 */
declare function clearChildren(dom: HTMLElement): void

/**
 * 创建子节点
 * @param tagName 
 * @param options 
 */
declare function createElement(tagName: keyof HTMLElementTagNameMap, options?: ElementCreationOptions | undefined): HTMLDivElement
/**
 * 添加子元素
 * @param nodes 
 * @param dom 
 */
declare function appendChildren(nodes: Node | Node[], dom: HTMLElement): void