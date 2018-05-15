import 'babel-polyfill';
import fs from 'fs';
import http from 'http';
import join from 'path';
import _ from './util.js';
http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'text/html'});
  let root = '';
  if(req.url==='/'){
    root = __dirname;
  }else{
    root = __dirname+req.url;
  }
  let html=`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>静态资源服务器</title>
        </head>
        <body>
      `;
      _.getFile(root).then((files)=>{
        files.forEach(el => {
          if(_.isFile(root+'/'+el)){
            html+='<li>' + el + '</li>';
          }else if(_.isDir(root+'/'+ el)){
            html+='<li><a href="'+(req.url+((req.url.length>2) ? '/': '')+el)+'">'+el+'</a></li>';
          }
        });
        res.write(html);
        res.end(`
            </body>
            </html>
        `);
      });
}).listen(3000);