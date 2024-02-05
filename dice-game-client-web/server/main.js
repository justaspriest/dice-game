const http = require('http');
const fs = require('fs');

const host = '192.168.1.63';
const port = 3000;
const PATH_STATIC_FILES = '/assets';

const requestListener = (req, res) => {
    if (req.url.startsWith(PATH_STATIC_FILES)) {
        const [ _, filePath ] = req.url.split(PATH_STATIC_FILES);

        fs.readFile(`./server/${filePath}`, function(_, data) {
            res.writeHead(200);
            res.end(data);
        });
    } else {
        fs.readFile('./server/index.html', function(_, data) {
            res.writeHead(200);
            res.end(data);
        });
    }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
