import express from 'express'

const app = express()

const port = 3000

function middleware1(req, res, next) {
    console.log(req.method)
    console.log('this is middleware1')
    next()
}


// app.use(middleware1)

app.get('/user', middleware1 , (req, res) => {
    console.log('this is main function')

    res.json({
        message: 'this is main function....'
    })
})

app.get('/about', (req, res) => {
    console.log('this is about logic')

    res.json({
        message: 'this is about function....'
    })
})

app.listen(port, () => {
    console.log('server has started at port', port)
})
