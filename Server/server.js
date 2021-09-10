const Koa = require('koa')
const http = require('http')
const socket = require('socket.io')
const cors = require('@koa/cors');

const app = new Koa()
const server = http.createServer(app.callback())
const io = socket(server, {
    cors: {
      origin: '*',
    }
  });

app.use(cors());

const SERVER_HOST = 'localhost'
const SERVER_PORT = 8080

io.on('connection', socket => {
    console.log('[IO] Connection => Server has a new connection')
    socket.on('menu.cart', data => {
        console.log('[SOCKET] Menu.cart => ', data)
        io.emit('menu.cart', data)
    })
    socket.on('disconnect', () => {
        console.log('[SOCKET] Disconnect => A connection was disconnected')
    })
})

server.listen(SERVER_PORT, SERVER_HOST, () => {
    console.log(`[HTTP] Listen => Server is running at http://${SERVER_HOST}:${SERVER_PORT}`)
    console.log('[HTTP] Listen => Press CTRL+C to stop it')
})