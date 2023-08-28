require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override')

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
    // useCreateIndex: true,
    //Create user index was depecrated.
})


//Setting up view engine

app.set('views',__dirname + '/views');
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//Middleware
app.use((req, res, next) =>{
    console.log("I run for all routes!")
    next();
})
//this allows the body of a post request
app.use(express.urlencoded({extended: false}))
//method override
app.use(methodOverride('_method'))
//Index
app.get('/', (req,res) => {
    res.render('Index')
})

//New 
app.get('/new', (req, res) => {
    res.render('New')
})

//Create
app.post('/', async (req, res) => {
    const newView = await View.create
    console.log('the created view', req.body);
    res.send('received')
})


app.listen(3000, () =>{
    console.log('Listening at port 3000')
})