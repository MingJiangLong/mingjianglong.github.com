import React, { useContext, useEffect, useMemo, useState } from "react"
import BlogCard from "../../components/BlogCard"
import Empty from "../../components/Empty"
import SearchBar from "../../components/SearchBar"
import { MdxList, getAllMdxFileContent } from "../../../lib"
/**
 *
 * @param props {BlogListProps}
 */

export default function BlogList(props: { mdxList: MdxList }) {
  const { mdxList } = props
  const [searchValue, setSearchValue] = useState("")

  const blogs = useMemo(() => {
    return mdxList.filter(item => {
      const { metaData } = item
      const regexp = new RegExp(searchValue, "i")
      return (
        regexp.test(metaData.title) ||
        regexp.test(metaData.description) ||
        metaData.tags.some(item => regexp.test(item))
      )
    })
  }, [props.mdxList, searchValue])

  return (
    <>
      <SearchBar
        onValueChange={e => {
          setSearchValue(e)
        }}
      />
      <div
        style={{
          flex: 1,
          overflowY: "scroll",
        }}
      >
        {!blogs.length ? (
          <Empty />
        ) : (
          blogs.map(item => (
            <BlogCard {...item.metaData} key={`${item.metaData.id}`} />
          ))
        )}
      </div>
    </>
  )
}

export function getStaticProps() {
  const mdxList = getAllMdxFileContent()
  return {
    props: { mdxList },
  }
}
type BlogListProps = {}
