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
    return data.filter((item:any) => {
      const regexp = new RegExp(searchValue,'i')
      return (
        regexp.test(item.title) ||
        regexp.test(item.desc) ||
        item.tag.some((item:any) => regexp.test(item))
      )
    })
  }, [searchValue])

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
          blogs.map((item:any, index:number) => <BlogCard {...item} key={`${index}`} />)
        )}
      </div>
    </>
  )
}

// export function getStaticProps() {

// }
type BlogListProps = {}
