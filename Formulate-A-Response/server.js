// Your code here
const responseBody = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World!</title>
  </head>
  <body>
    <h1>Hello there!</h1>
  </body>
  </html>
  `




const http = require("http")
const server = http.createServer(( req , res )=>{
    res.statusCode = 200
    res.setHeader("Content-Type", "text/html" )
    res.write(responseBody)
    res.end()


})
const port = 5500
server.listen((port , ()=> console.log("THIS SEVER IS LISTENING!!!!!!!!") ))
