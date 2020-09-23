// A move consists of taking a point (x, y) and transforming it to either (x, x+y) or (x+y, y).

// Given a starting point (sx, sy) and a target point (tx, ty), return True if and only 
// if a sequence of moves exists to transform the point (sx, sy) to (tx, ty). 
// Otherwise, return False.

function reachingPoints(sx,tx,sy,ty){

    if((sx+sy > tx && sy > ty) || (sx > tx && sy+sx > ty))
    return false;

if((sx==tx) && (sy==ty))
    return true;

let sub = Math.max(1,(tx - sx)/ty);
const val = tx-sub * ty;
    
    let temp = reachingPoints(sx+sy,sy,val,ty);
if(temp){
    console.log("first call",sx+sy, sy,tx,ty);
    return true;
}
if(reachingPoints(sx,sx+sy,tx,ty - sub * tx)){
    console.log("first call",sx, sx+sy,tx,ty);
    return true;}

return false;

}

console.log("result",reachingPoints(1,1,3,5));