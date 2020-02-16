export const on = (() => {
    return document.addEventListener? function (element, event, handler) {
        if (element && event && handler) {
            element.addEventListener(event,handler, false)
        }
    }:function (element, event, handler) {
        if (element && event && handler) {
            element.attachEvent(`on${event}`,handler)
        }
    }
})()

export const off = (() => {
    return document.removeEventListener? function (element, event, handler) {
        if (element && event) {
            element.removeEventListener(event,handler, false)
        }
    }:function (element, event, handler) {
        if (element && event) {
            element.detachEvent(`on${event}`,handler)
        }
    }
})()
