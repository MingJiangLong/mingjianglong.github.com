# React搞笑记录

记录一些别人或者自己的React搞笑代码

<!-- [React,Bug] -->
```JS

 const downTime = useCallback(
    () => {
      let b = 0
      const Time = setInterval(() => {
        if (b >1) {
          clearInterval(Time)
          return false
        }
        b++
        handleGetVideo()
      }, 2 * 1000 * 60)
    },
    [],
  )

  const handleGetVideo = () => {
    getOrderVideo({ transactionId: id }).then(res => {
      if (res && res.code == 200 && res.data) {
        const {status,videoInfos}=res.data
        if(status&&status=='FAILED'){
          // ...
        }else if(status&&status=='SUCCESS'&& videoInfos&&videoInfos.length){
          // ...
        }else if(status&&status=='QUERYING'){
          setawaitState(true)
          downTime()
          setTimeout(() => {
            setawaitState(false)
          }, 2 * 1000 * 60)
        }
        
      }
    })
  }
```