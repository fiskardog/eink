function center (text: string, x: number, y: number, size: number) {
    inkybit.drawText(
    text,
    (x + 250) / 2,
    y,
    inkybit.Color.Black,
    inkybit.TextSize.Medium
    )
}
function rule (y2: number) {
    inkybit.drawLine(
    0,
    y2,
    249,
    y2,
    inkybit.Color.Accent
    )
}
function write (text2: string, x2: number, y3: number) {
    inkybit.drawText(
    text2,
    x2,
    y3,
    inkybit.Color.Black,
    inkybit.TextSize.Medium
    )
}
let msg1 = "Bruce"
let msg2 = "Boy"
let msg3 = "Girl"
let msg4 = "Thank You"
inkybit.clear()
inkybit.drawLine(
0,
0,
249,
119,
inkybit.Color.Accent
)
inkybit.show()
basic.forever(function () {
	
})
