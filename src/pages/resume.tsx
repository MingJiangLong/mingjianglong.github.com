import React from 'react'

/**
 * 
 * @param props {ResumeProps}
 */
export default function Resume(props:ResumeProps) {

  return(
    <div>
      框架       NextJS
      渲染方式    静态渲染SSG
      Style      Style-in-JS
      网络请求工具 SWR/react-query
      UI         AntD
      状态管理    react 自身 reducer createContext
      hook库     react-use
      
    </div>
  )
}

type ResumeProps = {

}