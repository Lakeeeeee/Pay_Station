function failAlert(message = "操作逾時") {
    return new Promise((resolve, reject) => {
        var overlay = document.createElement("div")
        overlay.className = "overlay"

        document.body.appendChild(overlay)

        var container = document.createElement("div")
        container.className = "container-sm p-0 cus-message"

        var icon = document.createElement("img")
        icon.className = "w-5em"
        icon.src = "/images/warn.png"

        var colText = document.createElement("div")
        colText.className = "col-7 p-4 gap-3 d-flex align-items-center justify-content-center"
        colText.appendChild(icon)

        var span = document.createElement("span")
        span.className = "fw-bold fs-1"
        span.textContent = message
        colText.appendChild(span)

        var colBtn = document.createElement("div")
        colBtn.className = "col-5 d-flex flex-column p-4 gap-3"

        var btnBack = document.createElement("button")
        btnBack.textContent = "回上一頁"
        btnBack.className = "payment-btn text-center"

        btnBack.addEventListener("click", () => {
            history.back()
        })

        colBtn.appendChild(btnBack)

        var btnCancle = document.createElement("button")
        btnCancle.textContent = "取消繳費"
        btnCancle.className = "payment-btn text-center"

        btnCancle.addEventListener("click", () => {
            location.href = "/"
        })

        colBtn.appendChild(btnCancle)

        container.appendChild(colText)
        container.appendChild(colBtn)

        document.body.appendChild(container)
    })
}
