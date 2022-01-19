const http=require('http');
const server = http.createServer((req, res) => {
    if (req.url == "/user"); {
        res.write("welcome");
        res.end();
    }
    
});

server.listen(8000, () => {
    console.log("listening on port 8000");
})