import React, { useMemo, useState } from "react"
import data from "../../../data"
import BlogCard from "../../components/BlogCard"
import Empty from "../../components/Empty"
import SearchBar from "../../components/SearchBar"
/**
 *
 * @param props {BlogListProps}
 */
export default function BlogList(props: BlogListProps) {
  const [searchValue, setSearchValue] = useState("")

  const blogs = useMemo(() => {
    return data.filter(item => {
      const regexp = new RegExp(searchValue)
      return (
        regexp.test(item.title) ||
        regexp.test(item.desc) ||
        item.tag.some(item => regexp.test(item))
      )
    })
  }, [searchValue, data])

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
          blogs.map((item, index) => <BlogCard {...item} key={index} />)
        )}
      </div>
    </>
  )
}

type BlogListProps = {}
