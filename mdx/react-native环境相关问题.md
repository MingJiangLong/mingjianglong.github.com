# react native环境搭建相关问题

## IOS
- Command PhaseScriptExecution failed with a nonzero exit code

    解决方案：移除`ios/.xcode.env.local`文件，ios目录下terminal执行`pod install`
## Android