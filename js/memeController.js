'us strict'

var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] }]
var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            size: 20,
            color: 'red'
        }
    ]
}

const gElCanvas = document.querySelector('canvas')
const gCtx = gElCanvas.getContext('2d')

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

function onInit(){
    renderMeme()
}

function renderMeme() {
    drawImg(gImgs)
    drawText('hay', 50, 50)
}



function drawImg([{ url }]) {
    const elImg = new Image()
    elImg.src = url
    elImg.onload = () =>
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
}


function drawText(text, x, y) {
    gCtx.beginPath()
	gCtx.lineWidth = 2
	gCtx.strokeStyle = 'orange'

	gCtx.fillStyle = 'lightsteelblue'

	gCtx.font = '45px Arial'
	gCtx.textAlign = 'center'
	gCtx.textBaseline = 'middle'

	gCtx.fillText(text, x, y)
	gCtx.strokeText(text, x, y)
}

