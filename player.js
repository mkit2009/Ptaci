// PLAYER
var playerImages = {
    normal: new Image(),
    normalRed: new Image(),
    set: () => {
        playerImages.normal.src = "./img/normalbird.png"
        playerImages.normalRed.src = "./img/redbird.png"
    }
}

playerImages.set()

class Player {
    constructor(type) {
        this.values = setTypeValuesPlayer(type)
        this.x = 0
        this.y = 0
        this.r = this.values.r
        this.color = this.values.color
        this.xs = 0
        this.ys = 0
        this.g = 0.6
        this.angle = 0
    }
    render() {
        /*c.beginPath()
        c.fillStyle = this.color
        c.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
        c.fill()
        c.closePath()*/
        this.angle += ((Math.PI * 2) / 360 * this.xs) * dt
        c.save()
        c.translate(this.x, this.y)
        c.rotate(this.angle)
        c.drawImage(equippedSkin("player"), -this.r, -this.r, this.r * 2, this.r * 2)
        c.restore()
        c.lineWidth = 5
        c.strokeStyle = "black"
        c.beginPath()
        c.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
        c.stroke()
        c.closePath()
    }
}

function setTypeValuesPlayer(type) {
    var values = {}
    switch (type) {
        default:
            values.r = 40
            values.color = "yellow"
    }
    return values
}

function playerShotsRender() {
    for (var i in playerShots) {
        if (i == 0) {
            playerShots[i].x = 270
            playerShots[i].y = canvas.height - 300 - playerShots[i].r
            playerShots[i].angle = lookAfterMouse()
        }
        else {
            playerShots[i].x = 50
            if (i == 1) {
                playerShots[i].y = 300

            }
            else playerShots[i].y = playerShots[+i - 1].y - playerShots[+i - 1].r - playerShots[i].r - 5
        }
    }
}

function bounce() {

    if (playerShots[0].x + playerShots[0].r > canvas.width || playerShots[0].x - playerShots[0].r < 0) {
        playerShots[0].xs < 0 ? playerShots[0].x = playerShots[0].r : playerShots[0].x = canvas.width - playerShots[0].r
        playerShots[0].xs *= -0.7
    }
    if (playerShots[0].y + playerShots[0].r > canvas.height || playerShots[0].y - playerShots[0].r < 0) {
        if (playerShots[0].y + playerShots[0].r > canvas.height) playerShots[0].y = canvas.height - 1 - playerShots[0].r
        if (playerShots[0].y - playerShots[0].r < 0) playerShots[0].y = 1 + playerShots[0].r
        playerShots[0].ys *= -0.7
    }
}
