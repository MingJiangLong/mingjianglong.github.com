import { BlogAnchorContext, I_BlogAnchor } from "@/hooks/useAnchor";
import React, { createContext, PropsWithChildren, useContext, useState } from "react";

/** 标题应该是不重复的 */
export function BlogAnchorProvider(props: PropsWithChildren<{

}>) {

    const { children } = props;
    const [anchors, setAnchors] = useState<I_BlogAnchor[]>([])

    const addAnchors = (newAnchorsTitle: string) => {
        let newAnchorId = newAnchorsTitle;

        const isNewAnchorIdExist = anchors.find(item => item.key == newAnchorId);
        if (isNewAnchorIdExist) {
            newAnchorId = `${newAnchorId}_${Math.random().toString(36).substring(2, 9)}`
        }
        setAnchors(pre => [
            ...pre,
            {
                key: newAnchorId,
                href: `#${newAnchorId}`,
                title: newAnchorsTitle
            }
        ])
        return newAnchorId;
    }
    return (
        <BlogAnchorContext.Provider value={{
            anchors,
            addAnchors
        }}>
            {children}
        </BlogAnchorContext.Provider>
    )
}



