import express from 'express'

const app = express()

app.set("view engine","ejs");
app.use(express.static('./public'));

// app.use(function(req, res, next){
//     console.log("middleware working")
//     next();
// });

// app.get('/', (req, res) => {
//   res.send('Hello World')
// })

// app.get('/profile', (req, res) => {
//   res.send('Hello form profile')
// })
// app.get('/profile/:username', (req, res) => {
//   res.send(`Hello form ${req.params.username}`)
// })

app.get("/", function (req,res) {
    res.render("index", {age:12});
})

app.get("/contact", function (req,res) {
    res.render("contact")
})

app.get("/error", function (req, res, next){
    throw Error("Something went worng");

});

app.get("/hey", function (req, res){
    throw Error("i dont know")
})

app.use(function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render('error', { error: err });
})

app.listen(3000)