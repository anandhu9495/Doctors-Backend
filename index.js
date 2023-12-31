const jsonserver = require('json-server')

const restserver = jsonserver.create()

const router = jsonserver.router()

const middleware = jsonserver.defaults()


const port = 3001

restserver.use(middleware)
restserver.use(router)


restserver.listen(port,() =>{
    console.log('rest server listening on port' +port);
})