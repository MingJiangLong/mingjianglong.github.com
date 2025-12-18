import { createContext, useContext } from "react";

export interface I_BlogAnchor {
    key: string
    href: string
    title: string
}
export const BlogAnchorContext = createContext<{
    anchors: I_BlogAnchor[]
    addAnchors?: (title: string) => string
}>({
    anchors: [],
    addAnchors(title) {
        return ""
    },
})
export function useAnchor() {
    return useContext(BlogAnchorContext)
}