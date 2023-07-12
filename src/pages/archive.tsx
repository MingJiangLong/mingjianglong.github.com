import Link from "next/link"
import { getMdxTags } from "../../lib"
export default function (props: {
  tags: {
    typeName: string
    children: {
      title: string
      id: string
    }[]
  }[]
}) {
  console.log(props.tags);
  
  return (
    <div style={{ margin: "5em", overflowY: "scroll" }}>
      {props.tags.map((tree, index) => {
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
                  href={`/blog/detail/${blog.id}`}
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

export function getStaticProps() {
  const tags = getMdxTags()

  return {
    props: { tags },
  }
}
type TreeData = {
  typeName: string
  children: {
    id: string | number
    title: string
  }[]
}[]
