import mysql from "mysql"

export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"fullstack_blog_lamadev"
})