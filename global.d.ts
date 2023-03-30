interface BaseBlogData {
  /**
   * 文章id
   */
  id: number

  /**
   * 文章标题
   */
  title: string

  /**
   * 文章简述
   */
  desc?: string

  /**
   * 文章标签
   */
  tag: string[]

  /**
   * 文章内容
   */
  content?: string

  /**
   * 创建时间
   */
  createTime: number

  /**
   * 上一次更新时间
   */
  lastUpdateTime: number

  /**
   * 更新计数
   */
  updateCount?: number

}

/**
 * 权限博客
 */
interface PrivateBlogData extends BaseBlogData {

  /**
   * 是否为私密
   */
  isPrivate?: boolean

  /**
   * 可进入code
   */
  accessCode: string
}

/**
 * 普通博客文章
 */
interface NormalBlogData extends BaseBlogData {

}
