# React Native Put方式文件上传
React Native Put文件上传方式<!-- more -->

之前项目一直采用的后端上传，RN将文件使用FormData的形式传递给后端，为了解决文件过大的原因，采用RN使用PUT直接将文件上传至图片服务器;
```js
/**
 * 图片上传请求工具
 * @param beforeUpload 
 * @param afterUpload 
 * @returns 
 */
export default async function UploadFileToOSS(
    fileData: FileInfo,
    beforeUpload: () => Promise<{ uploadUrl: string, key: string }>,
    afterUpload: (key: string) => Promise<string>) {

    // 1. 获取上传地址和key
    let { uploadUrl, key } = await beforeUpload();

    // fetch 为React Native 系统api
    await fetch(uploadUrl, {
        method: 'PUT',
        body: {
            uri: fileData.uri
        },
        headers: {
            'Content-Type': fileData.type
        }
    })

    // 3. 使用key换取上传地址
    if (typeof afterUpload === 'function') {
        return await afterUpload(key)
    }

    return key;
}

type FileInfo = {
    name: string
    uri: string
    type: string
    base64: string
}
```
