# ondrop事件不触发

 ondrop事件不能被正确触发<!-- more -->

> 调用`ondragover` 并 `preventDefault`

```
data/elements cannot be dropped in other elements. To allow a drop, we must prevent the default handling of the element. This is done by calling the event.preventDefault() method for the ondragover attribute
```