/* 
逛街任务
*/
const halfDeviceHeight = device.height / 2
const halfDeviceWidth = device.width / 2
const videoSwipeDistance = halfDeviceHeight - 100

function run() {
    openLog()
    start()
}

function openLog() {
    auto()
    console.hide()
    sleep(1000)
    console.show(true)
    log('开始逛街任务')
    images.requestScreenCapture(false)
    log('已获取录屏权限')
}

function start() {
    do {
        if(desc("恭喜已成功获得").findOne(5000)){
            log('出现弹窗')
            let btn = textStartsWith("看视频再得")
            if(btn.exists()) {
                btn.findOne().click()
                log('关闭弹窗')
            }
        }else{
            swipeScreen()
            let time = random(1000,3000)
            log(`等待${time}ms后滑动`)
            sleep(time)
        }

    } while (true);
}

function swipeScreen() {
    let offset = random(-100, 0)

    // swipe(
    //     halfDeviceWidth ,
    //     halfDeviceHeight + offset,
    //     halfDeviceWidth ,
    //     halfDeviceHeight + offset + (videoSwipeDistance / 2) + random(0, 20),
    //     random(20, 50)
    // )

    swipe(
        halfDeviceWidth,
        halfDeviceHeight + offset,
        halfDeviceWidth,
        0,
        1000
    )
}

run()

module.exports = {
    run,
}