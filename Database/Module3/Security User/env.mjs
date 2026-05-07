//hide stuff in env file
npm install -s dotenv

//in .env
ADMIN_USERNAME = "ProjectAdmin"
ADMIN_PASSWORD = "0000"
DATABASE_NAME = "projectdatabase"
DIALECT = "mysql"
DIALECTMODEL = "mysql2"
PORT = "3000"
HOST = "localhost"

//in bin/www add for it to use PORT = "3000" since 
//env has highest priority there
require('dotenv').config()

