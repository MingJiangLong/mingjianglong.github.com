import Link from "next/link"
import { Fragment, useEffect, useState } from "react"
import data from "../../data"

export default function () {
  /**
   * 归档数据
   */
  function archiveData() {
    let result: TreeData = []
    data.forEach(item => {
      const { tag } = item
      tag.forEach(tagName => {
        const find = result.find(k => k.typeName === tagName)
        const tempt = {
          id: item.id,
          title: item.title,
        }
        if (find) {
          find.children.push(tempt)
        } else {
          result.push({
            typeName: tagName,
            children: [tempt],
          })
        }
      })
    })
    return result
  }

  const [treeData, setTreeData] = useState<TreeData>([])

  useEffect(() => {
    const tempt = archiveData()
    setTreeData(tempt)
  }, [])
  return (
    <div style={{ margin: "5em" }}>
      {treeData.map((tree, index) => {
        return (
          <div key={index} style={{ marginTop: "2em" }}>
            <h3>{tree.typeName}</h3>
            <>
              {tree.children.map((blog, index) => (
                <Link
                  style={{
                    display: "block",
                    fontSize: "1em",
                    textDecorationLine: "underline",
                    paddingTop: 10,
                    paddingLeft: 20,
                  }}
                  href={`/blog/detail/?id=${blog.id}`}
                  key={`${blog.title}_${blog.id}_${index}`}
                >
                  {blog.title}
                </Link>
              ))}
            </>
          </div>
        )
      })}
    </div>
  )
}

type TreeData = {
  typeName: string
  children: {
    id: string | number
    title: string
  }[]
}[]
