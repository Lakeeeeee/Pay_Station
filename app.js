var createError = require("http-errors")
var express = require("express")
var path = require("path")
var cookieParser = require("cookie-parser")
var logger = require("morgan")
var hbs = require("express-handlebars")
var indexRouter = require("./routes/index")

var app = express()

// view engine setup
app.engine(
    ".hbs",
    hbs.engine({
        extname: ".hbs",
        helpers: {
            default: function (value, defaultValue) {
                return value || defaultValue
            }
        }
    })
)
app.set("view engine", ".hbs")
app.set("views", "./views")

// 解析 application/x-www-form-urlencoded 类型的请求体
app.use(express.urlencoded({ extended: false }))

// 解析 application/json 类型的请求体
app.use(express.json())

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

app.use("/", indexRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get("env") === "development" ? err : {}

    // render the error page
    res.status(err.status || 500)
    res.render("error")
})

module.exports = app
