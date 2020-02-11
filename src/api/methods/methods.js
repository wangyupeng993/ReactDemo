export const getStyle = (obj,attr) => {
    const Node = document.querySelector(obj)
    return Node.currentStyle?parseFloat(Node.currentStyle[attr]):parseFloat(document.defaultView.getComputedStyle(Node, null)[attr]);
}
