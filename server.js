const express = require('express')
const app = express()
//app.get() is a route handler that takes into two parameters, the route and the function
//route handler to the home page route
app.get('/', (req, res)=>{
// res is an object with the method send() that sends info to the client

    res.send('<h1>Home page</h1>')
    console.log(req)
})
app.get('/contact', (req, res)=>{
    // res is an object with the method send() that sends info to the client
    
        res.send('<h1>Contact Us</h1>')
        
    })
app.get('/about', (req, res)=>{
    // res is an object with the method send() that sends info to the client
    
        res.send('<h1>About us</h1>')
        
    })

// git add .
// git commit -m 'commit message'
//git push origin master

//there's a staging area between the 

app.listen(8080, ()=>{
    console.log('Server has started at port 8080')
})