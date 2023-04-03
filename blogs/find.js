
/**
 *      p2
 *  p1<
 *      p3
 * 叉积判断 p1p2 p1p3
 * | p2.x-p1.x | p2.y-p1.y |
 * | p3.x-p1.x | p3.y-p1.y |
 * @param {{x:number,y:number}} p1 
 * @param {{x:number,y:number}} p2 
 * @param {{x:number,y:number}} p3 
 */
function crossProduct(p1, p2, p3) {
  return (p2.x - p1.x) * (p3.y - p1.y) - (p2.y - p1.y) * (p3.x - p1.x);
}

/**
 * 
 * @param {{x:number,y:number}[]} points 
 */
function getConvexHull(points) {
  if (points.length <= 1) { return points; }
  //按照x坐标排序 
  points.sort((a, b) => a.x - b.x || a.y - b.y);
  let lowerHull = [];
  for (let i = 0; i < points.length; i++) {
    //构建下凸包
    while (lowerHull.length >= 2 && crossProduct(lowerHull[lowerHull.length - 2], lowerHull[lowerHull.length - 1], points[i]) <= 0) {
      lowerHull.pop();
    }
    lowerHull.push(points[i]);
  }
  let upperHull = [];
  for (let i = points.length - 1; i >= 0; i--) {
    //构建上凸包
    while (upperHull.length >= 2 && crossProduct(upperHull[upperHull.length - 2], upperHull[upperHull.length - 1], points[i]) <= 0) {
      upperHull.pop();
    }
    upperHull.push(points[i]);
  }
  //合并上下凸包 
  upperHull.pop();
  lowerHull.pop();
  return lowerHull.concat(upperHull);
}