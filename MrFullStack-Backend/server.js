const express = require('express')
const http  = require('http')
const Server  = require("socket.io").Server
const app = express()
const path  = require('path')

const server  = http.createServer(app)
const io = new Server(server , {
    cors:{
        origin:"*"
    }
})


const _dirname = path.dirname("")
const buildPath = path.join(_dirname  , "../Frontend/build");

app.use(express.static(buildPath))

app.get("/*", function(req, res){

    res.sendFile(
        path.join(__dirname, "../Frontend/build/index.html"),
        function (err) {
          if (err) {
            res.status(500).send(err);
          }
        }
      );

})




io.on("connection" , (socket) => {
   console.log('We are connected')

   socket.on("Mrfullstack" , mrfullstack => {
      io.emit('mr' , mr)
   } )

   socket.on('disconnect' , ()=> {
    console.log('disconnected')
   })
})



server.listen(5001 , () => console.log('Listening to port 5001'))