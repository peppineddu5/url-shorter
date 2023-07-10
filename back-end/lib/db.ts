import mysql from "mysql"
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'url'
  });
connection.connect();

const searchCode=async (code:string):Promise<[{code:string,url:string}]>=>{
    return new Promise((resolve, reject)=>{
        connection.query(`SELECT * FROM url_link WHERE code = '${code}'`,  (error, elements:[{code:string,url:string}])=>{
            if(error){
                return reject(error);
            }
            return resolve(elements);
        });
    });
}

const addCode=async (code:string,url:string)=>{
    return new Promise((resolve, reject)=>{
        connection.query(`INSERT INTO url_link (code,url) VALUES (?,?)`,[code,url],  (error, elements)=>{
            if(error){
                return reject(error);
            }
            return resolve(elements);
        });
    });
}
export {searchCode,addCode}