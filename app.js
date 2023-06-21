/*const http = require('http');

const server = http.createServer((req, res) => {   //after creating the server, the user is expected to request sth from the web browser, the response is then sent to the server
if(req.url === '/'){   //the '/' is used for home pages
    res.end('Welcome to our home page')
}
if(req.url === '/about'){
    res.end('Here is our short history')
}
res.end(`<h1>Oops!</h1>
<p>We can't seem to find the page you are looking for</p>
<a href="/">back home</a>
`)

    //res.write('Welcome to our home page')   //this is the response of the server
//res.end()   //after which the server brings it to an end
})

server.listen(5000)  //this is the port that the server is listening to*/

const _ = require('lodash');

const items = [1, [2, [3, [4]]]]    //this is a method of lodash
const newItems = _.flattenDeep(items)
console.log(newItems);