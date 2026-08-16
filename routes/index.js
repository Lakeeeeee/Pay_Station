var express = require("express")
var router = express.Router()

router.get("/", function (req, res, next) {
    res.render("index", {
        title: "PersonalWork"
    })
})

router.get("/search/:id", function (req, res, next) {
    const toolId = req.params.id
    res.render("search", {
        title: "請輸入車牌數字號碼",
        toolId: toolId
    })
})

router.get("/pay/:id", function (req, res, next) {
    const orderId = req.params.id
    //find order details in database
    res.render("pay", {
        title: "請確認您的支付金額與繳費方式",
        order: { id: 99, plate: "MZD-7561", amount: 60 },

        payments: [
            { id: 0, text: "信用卡", ico: "/images/creditCard.png" },
            { id: 1, text: "悠遊卡", ico: "/images/uuCard.png" },
            { id: 2, text: "行動支付", ico: "/images/mobilePay.png" }
        ]
    })
})

router.post("/payment", function (req, res, next) {
    const postData = req.body

    //從database 拿出payment obj
    //從database 再取一次order obj, 並將order 狀態鎖定, 不再繼續跳錢

    res.render("payment", {
        title: "PersonalWork",
        postData,
        payment: { id: 0, text: "晶片信用卡, 手機NFC", src: "/images/creditCard2.png" },
        order: { id: 99, plate: "MZD-7561", amount: 60 }
    })
})

router.post("/receipt", function (req, res, next) {
    console.log(req.body)

    //find order details in database
    res.render("receipt", {
        title: "PersonalWork",
        order: { id: 99, plate: "MZD-7561", amount: 60 },

        receipts: [
            { id: 0, text: "統一編號", ico: "/images/company.png" },
            { id: 1, text: "愛心捐贈碼", ico: "/images/donet.png" },
            { id: 2, text: "手機載具條碼", ico: "/images/barcode.png" }
        ]
    })
})

router.post("/invoice", function (req, res, next) {
    const postData = req.body

    //從database receipt obj
    // const receipt = {
    //     id: 0,
    //     text: "輸入統一編號",
    //     icon: "/images/company.png"
    // }

    const receipt = {
        id: 0,
        text: "掃描手機載具條碼",
        icon: "/images/barcode.png",
        src: "/images/linePay2.png"
    }

    //從database 再取一次order obj, 並將order 狀態鎖定, 不再繼續跳錢

    res.render("invoice", {
        title: "PersonalWork",
        postData,
        receipt,
        order: { id: 99, plate: "MZD-7561", amount: 60 }
    })
})

router.get("/final", function (req, res, next) {
    res.render("final", {
        title: "PersonalWork"
    })
})

module.exports = router
