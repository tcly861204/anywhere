import fs from 'fs';
const util = {
  exists: (path)=>{
    return fs.existsSync(path) || path.existsSync(path);
  },
  isFile: (path)=>{
    return util.exists(path) && fs.statSync(path).isFile();
  },
  isDir: (path)=>{
    return util.exists(path) && fs.statSync(path).isDirectory();
  },
  getFile: (path)=>{
    return new Promise((res,rej)=>{
      fs.readdir(path,(err, files) => {
        if(err){
          rej(err);
        }
        res(files);
      });
    });
  }
};
export default util;