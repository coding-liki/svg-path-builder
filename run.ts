import SvgPathBuilder from "./src/components";

let builder = new SvgPathBuilder();

builder
    .absolute().moveTo(4, 8)
    .lineTo(10,1)
    .lineTo(13,0)
    .lineTo(12,3)
    .lineTo(5,9)
    .cBezier(6,10,6,11,7,10)
    .cBezier(7,11,8,12,7,12)
    .arc(6,13,1.42,1.42,0,0,1)
    .arc(4,10,5,5,0,0,0)
    .qBezier(3.5,9.9,3.5,10.5)
    .tBezier(2,11.8)
    .tBezier(1.2,11)
    .tBezier(2.5,9.5)
    .tBezier(3,9)
    .arc(0,7,5,5,90,0,0)
    .arc(1,6,1.42,1.42,0,0,1)
    .cBezier(1,5,2,6,3,6)
    .cBezier(2,7,3,7,4,8)
    .moveTo(10, 1)
    .lineTo(10,3)
    .lineTo(12,3)
    .lineTo(10.2,2.8)
    .lineTo(10,1)
;

console.log(builder.build());