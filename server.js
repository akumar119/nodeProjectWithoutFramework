import http from 'http';
import dotenv from 'dotenv';
import { getStudent, getStudentList } from './Controller/studentController';

dotenv.config();

const server = http.createServer((req, res) => {
  if (req.url === '/studentList' && req.method === 'GET') {
    getStudentList(req, res);
  } else if (req.url.match(/\/student\/([0-9]+)/) && req.method === 'GET') {
    const id = req.url.split('/')[2];
    getStudent(req, res, id);
  } else {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Routes not found.' }));
  }
});

const PORT = process.env.PORT || 5001;

server.listen(PORT, () => {
  console.log(`server is running at port>>>${PORT}`);
});
