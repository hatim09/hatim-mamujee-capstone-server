#WANDERLUST API & DATABASE

Project back-end overview:

This is the api and server for the wanderlust website. The API feeds travel data to the front end of the application. 
More specfically, the API sends data for 20 cities and 7 attractions per city that the user is able to view and
get a short description for. 

The database is used for the bucketlist feature of the website. It enables the user to save the tourist attractions they
like to their bucklist and the database stores that data for the user.

Configuration:

The .env.sample file servers as a template for the actual .env file that will need to be created. When creating the
actual .env file, please replace the placeholder values with the actual values described in the section below.

Please also install node package manager (NPM) using the command 'npm install' in
the terminal in order to have the required 'node_modules' folder for the server to run.

The following dependencies will also need to be installed in order for the backend server to work if not already in the
package-lock.json file.

1. express
2. cors
3. dotenv
4. knex
5. mysql
6. nodemon - This is a nice to have and keeps the server running after changes are made.

The above dependancies can be installed using the following command 'npm i express cors dotenv knex mysql nodemon'.

In order to run the server, please use the command 'node index' or 'node --watch index' which can be used instead of the 
nodemon dependancy and will also keep the server running if any changes are made (auto starts the server after changes).


Variable Descriptions:

PORT - This variable represents the PORT number the server will run on. Please use PORT number '8080'.

DB_HOST - This variable represents the address the database should be set to. Please use '127.0.0.1'.

DB_USER -  set this to 'root'.

DB_PASSWORD - set this to 'rootroot'.

DB_DATABASE - This is the name of the database. Set it to 'wanderlust'.


Step by step set-up instructions;








