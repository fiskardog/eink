def center(text: str, x: number, y: number, size: number):
    inkybit.draw_text(text,
        (x + 250) / 2,
        y,
        inkybit.Color.BLACK,
        inkybit.TextSize.MEDIUM)
def rule(y2: number):
    inkybit.draw_line(0, y2, 249, y2, inkybit.Color.ACCENT)
def write(text2: str, x2: number, y3: number):
    inkybit.draw_text(text2, x2, y3, inkybit.Color.BLACK, inkybit.TextSize.MEDIUM)
msg1 = "Bruce"
msg2 = "Boy"
msg3 = "Girl"
msg4 = "Thank You"
inkybit.clear()
inkybit.draw_line(0, 0, 249, 119, inkybit.Color.ACCENT)
inkybit.show()

def on_forever():
    pass
basic.forever(on_forever)
