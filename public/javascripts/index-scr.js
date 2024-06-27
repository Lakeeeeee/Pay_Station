Vue.createApp({
    delimiters: ["${", "}"],
    data() {
        return {
            currentTime: "",
            days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
        }
    },
    methods: {
        updateTime() {
            const now = new Date()
            const hours = String(now.getHours()).padStart(2, "0")
            const minutes = String(now.getMinutes()).padStart(2, "0")
            const seconds = String(now.getSeconds()).padStart(2, "0")
            this.currentTime = `
                ${now.getFullYear().toString()}年 
                ${(now.getMonth() + 1).toString()} 月 
                ${now.getDate().toString()} 日 
                ${hours}:${minutes}:${seconds} 
                ${this.days[now.getDay()]}`
        }
    },
    mounted() {
        this.updateTime()
        setInterval(this.updateTime, 1000)
    }
}).mount("#app")
