function areIntersected(rect1, rect2) {
    if (rect1.top >= (rect2.top + rect2.height)
        || (rect1.top + rect1.height) <= rect2.top
        || rect1.left >= (rect2.left + rect2.width)
        || (rect1.left + rect1.width) <= rect2.left) {
        return false;
    }
    return true;
}
function filterVisible(parent, rectangles) {
    function visibleRect(elem) {
        if (elem.width !== 0 && elem.height !== 0) {
            return areIntersected(parent, elem);
        }
    }
    return rectangles.filter(visibleRect)
}