const valueBetween = (value, b1,b2) =>{
  const min = Math.min(b1,b2);
  const max = Math.max(b1,b2);
  if (value > min && value < max) {
    return true;
  } else {
    return false;
  }
}

const valueBetweenOrEqueal = (value, b1,b2) =>{
  const min = Math.min(b1,b2);
  const max = Math.max(b1,b2);
  if (value >= min && value <= max) {
    return true;
  } else {
    return false;
  }
}

const isPointInsideRectangle = (point, point1, point2) =>{
  if (valueBetween(point.x, point1.x, point2.x) && valueBetween(point.y, point1.y, point2.y)) {
    return true;
  } else {
    return false;
  }
}

const isPointInsideRectangleOrEqual = (point, point1, point2) =>{
  if (valueBetweenOrEqueal(point.x, point1.x, point2.x) && valueBetweenOrEqueal(point.y, point1.y, point2.y)) {
    return true;
  } else {
    return false;
  }
}

const isRectangleOverlapping = (rect1point1, rect1point2, rect2point1, rect2point2, debug)=>{
  const rect1diffVector = rect1point2.subtract(rect1point1).divideBy(2);
  const rect1point3 = new Vector(rect1point1.x, rect1point2.y);
  const rect1point4 = new Vector(rect1point2.x, rect1point1.y);
  const rect1midpoint1 = new Vector(rect1point1.x + rect1diffVector.x , rect1point1.y);
  const rect1midpoint2 = new Vector(rect1point2.x, rect1point1.y + rect1diffVector.y);
  const rect1midpoint3 = new Vector(rect1point1.x + rect1diffVector.x , rect1point2.y);
  const rect1midpoint4 = new Vector(rect1point1.x, rect1point1.y + rect1diffVector.y );
  const rect1points = [rect1point1, rect1point2, rect1point3, rect1point4,
      rect1midpoint1,rect1midpoint2, rect1midpoint3, rect1midpoint4];


  const rect2diffVector = rect2point2.subtract(rect2point1).divideBy(2);
  const rect2point3 = new Vector(rect2point1.x, rect2point2.y);
  const rect2point4 = new Vector(rect2point2.x, rect2point1.y);
  const rect2midpoint1 = new Vector(rect2point1.x + rect2diffVector.x , rect2point1.y);
  const rect2midpoint2 = new Vector(rect2point2.x, rect2point1.y + rect2diffVector.y);
  const rect2midpoint3 = new Vector(rect2point1.x + rect2diffVector.x , rect2point2.y);
  const rect2midpoint4 = new Vector(rect2point1.x, rect2point1.y + rect2diffVector.y );
  const rect2points = [rect2point1, rect2point2, rect2point3, rect2point4,
    rect2midpoint1,rect2midpoint2, rect2midpoint3, rect2midpoint4];

  for (var i = 0; i < rect1points.length; i++) {
    if (isPointInsideRectangle(rect1points[i], rect2point1, rect2point2)) {
      // found overlapping
      return true;
    }

  }

  for (var i = 0; i < rect2points.length; i++) {
    if (isPointInsideRectangle(rect2points[i], rect1point1, rect1point2)) {
      // found overlapping
      return true;
    }
  }

  return false;

}

const isRectangleOverlappingOrEqual = (rect1point1, rect1point2, rect2point1, rect2point2, debug)=>{
  const rect1diffVector = rect1point2.subtract(rect1point1).divideBy(2);
  const rect1point3 = new Vector(rect1point1.x, rect1point2.y);
  const rect1point4 = new Vector(rect1point2.x, rect1point1.y);
  const rect1midpoint1 = new Vector(rect1point1.x + rect1diffVector.x , rect1point1.y);
  const rect1midpoint2 = new Vector(rect1point2.x, rect1point1.y + rect1diffVector.y);
  const rect1midpoint3 = new Vector(rect1point1.x + rect1diffVector.x , rect1point2.y);
  const rect1midpoint4 = new Vector(rect1point1.x, rect1point1.y + rect1diffVector.y );
  const rect1points = [rect1point1, rect1point2, rect1point3, rect1point4,
      rect1midpoint1,rect1midpoint2, rect1midpoint3, rect1midpoint4];


  const rect2diffVector = rect2point2.subtract(rect2point1).divideBy(2);
  const rect2point3 = new Vector(rect2point1.x, rect2point2.y);
  const rect2point4 = new Vector(rect2point2.x, rect2point1.y);
  const rect2midpoint1 = new Vector(rect2point1.x + rect2diffVector.x , rect2point1.y);
  const rect2midpoint2 = new Vector(rect2point2.x, rect2point1.y + rect2diffVector.y);
  const rect2midpoint3 = new Vector(rect2point1.x + rect2diffVector.x , rect2point2.y);
  const rect2midpoint4 = new Vector(rect2point1.x, rect2point1.y + rect2diffVector.y );
  const rect2points = [rect2point1, rect2point2, rect2point3, rect2point4,
    rect2midpoint1,rect2midpoint2, rect2midpoint3, rect2midpoint4];

  for (var i = 0; i < rect1points.length; i++) {
    if (isPointInsideRectangleOrEqual(rect1points[i], rect2point1, rect2point2)) {
      // found overlapping
      return true;
    }

  }

  for (var i = 0; i < rect2points.length; i++) {
    if (isPointInsideRectangleOrEqual(rect2points[i], rect1point1, rect1point2)) {
      // found overlapping
      return true;
    }
  }

  return false;

}


const SAME_SIGNS = ( a, b )	=>{
  (( ( a ^ b)) >= 0 )

}

const lines_intersect = (
  x1, y1,   /* First line segment */
  x2, y2,

  x3, y3,   /* Second line segment */
  x4, y4
  ) => {
    const	DONT_INTERSECT =  0
    const	DO_INTERSECT =    1
    const COLLINEAR =       2
    let a1, a2, b1, b2, c1, c2; /* Coefficients of line eqns. */
    let r1, r2, r3, r4;         /* 'Sign' values */
    let denom, offset, num;     /* Intermediate values */

    /* Compute a1, b1, c1, where line joining points 1 and 2
     * is "a1 x  +  b1 y  +  c1  =  0".
     */
    const returnObj = {
      intersect = DONT_INTERSECT
    }

    a1 = y2 - y1;
    b1 = x1 - x2;
    c1 = x2 * y1 - x1 * y2;

    /* Compute r3 and r4.
     */


    r3 = a1 * x3 + b1 * y3 + c1;
    r4 = a1 * x4 + b1 * y4 + c1;

    /* Check signs of r3 and r4.  If both point 3 and point 4 lie on
     * same side of line 1, the line segments do not intersect.
     */

    if ( r3 != 0 &&
         r4 != 0 &&
         SAME_SIGNS( r3, r4 )){
           returnObj.intersect = DONT_INTERSECT
           return returnObj  ;
         }

    /* Compute a2, b2, c2 */

    a2 = y4 - y3;
    b2 = x3 - x4;
    c2 = x4 * y3 - x3 * y4;

    /* Compute r1 and r2 */

    r1 = a2 * x1 + b2 * y1 + c2;
    r2 = a2 * x2 + b2 * y2 + c2;

    /* Check signs of r1 and r2.  If both point 1 and point 2 lie
     * on same side of second line segment, the line segments do
     * not intersect.
     */

    if ( r1 != 0 &&
         r2 != 0 &&
         SAME_SIGNS( r1, r2 )){
           returnObj.intersect = DONT_INTERSECT
           return returnObj  ;
         }

    /* Line segments intersect: compute intersection point.
     */

    denom = a1 * b2 - a2 * b1;
    if ( denom == 0 ){
      returnObj.intersect = COLLINEAR;
      return returnObj;
    }
    offset = denom < 0 ? - denom / 2 : denom / 2;

    /* The denom/2 is to get rounding instead of truncating.  It
     * is added or subtracted to the numerator, depending upon the
     * sign of the numerator.
     */

    num = b1 * c2 - b2 * c1;
    const x = ( num < 0 ? num - offset : num + offset ) / denom;

    num = a2 * c1 - a1 * c2;
    const y = ( num < 0 ? num - offset : num + offset ) / denom;

    returnObj.intersect = DO_INTERSECT;
    returnObj.x = x;
    returnObj.y = y;
    return  returnObj;
} /* lines_intersect */
