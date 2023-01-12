
# Svg Path Builder

You can use it to build series of path commands for svg path in OO style.

It implements all commands from https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#path_commands

## Absolute/Relative

To change coordinates mode you can use methods:
```typescript
let builder = new SvgPathBuilder();

builder
    .absolute() // Sets absolute mode for coordinates
    .relative() // Sets relative mode for coordinates
```


## Examples

### Circle

```typescript
let builder = new SvgPathBuilder();

builder
    .absolute().moveTo(10, 50)
    .circle(30);

console.log(builder.build());
```

logs
```
M 10,50 m -30,0 a 30 30 0 0 1 60,0 a 30 30 0 0 1 -60,0
```


### Sine wave

```typescript
let builder = new SvgPathBuilder();

builder
    .absolute().moveTo(10, 50)
    .qBezier(25, 25, 40,50)
    .relative()
    .tBezier(30,0)
    .tBezier(30,0)
    .tBezier(30,0)
    .tBezier(30,0)
    .tBezier(30,0);

console.log(builder.build());
```

logs 
```
M 10,50 Q 25,25 40,50 t 30,0 t 30,0 t 30,0 t 30,0 t 30,0
```

### Sword from https://yqnn.github.io/svg-path-editor/

```typescript
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
```

logs
```
M 4,8 L 10,1 L 13,0 L 12,3 L 5,9 C 6,10 6,11 7,10 C 7,11 8,12 7,12 A 1.42 1.42 0 0 1 6,13 A 5 5 0 0 0 4,10 Q 3.5,9.9 3.5,10.5 T 2,11.8 T 1.2,11 T 2.5,9.5 T 3,9 A 5 5 90 0 0 0,7 A 1.42 1.42 0 0 1 1,6 C 1,5 2,6 3,6 C 2,7 3,7 4,8 M 10,1 L 10,3 L 12,3 L 10.2,2.8 L 10,1
```
