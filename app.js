const colorText = document.getElementById("colorText")
const bgDiv = document.querySelector(".bgDiv")
const btnClick = document.querySelector(".btn-click")
const btnOver = document.querySelector(".btn-over")
const colorInput = document.getElementById("colorInput")
const copy = document.getElementById("copy")
const copyItem = document.querySelector("fa-regular fa-copy")


const yeniRenk = () => {
    let renkIcerik = "0123456789abcdef"
    let renkKod = "#"

    for(let i = 0; i < 6; i++){
        renkKod += renkIcerik[Math.floor(Math.random() * 16)]
    }
    return renkKod
}

window.onload = () =>{
    btnClick.click()
}

btnClick.addEventListener("click", () => {
    colorInput.value = yeniRenk() 
    bgDiv.style.backgroundColor = colorInput.value
    colorText.textContent = colorInput.value
})

btnOver.addEventListener("mouseover", () => {
    btnClick.click()
})

copy.addEventListener("mousedown", () => {
    navigator.clipboard.writeText(colorText.textContent)
    .then(() => {
        copy.style.backgroundColor = colorInput.value
    })  
})

copy.addEventListener("mouseup", () => {
    copy.style.backgroundColor = "white"
})

document.querySelector("body").onkeydown = function (e) {
    if (e.key === "Enter") {
        btnClick.click()
    }
}

colorInput.oninput = () => {
    bgDiv.style.backgroundColor = colorInput.value
    // btnClick.click()
}

