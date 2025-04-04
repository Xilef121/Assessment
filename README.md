# Assessment

1. Ensure that Node.js, npm and PostgreSQL are installed
2. Using `npm install`, install required dependencies in both `frontend` and `backend` directories
3. Create PostgreSQL database by using `CREATE DATABASE your_database_name;` in PostgreSQL shell.
4. In terminal, run `psql -U your_postgres_username -d your_database_name -a -f backend/db_setup.sql` (Replace `your_postgres_username` and `your_database_name`)
5. Create a `.env` file in the `backend` folder with your own environment variables for example:
   ```
   DB_USER=your_postgres_username
   DB_HOST=localhost
   DB_NAME=your_database_name
   DB_PASSWORD=your_postgres_password
   DB_PORT=5432
   JWT_SECRET=some_super_secret_key
   ```
6. Run both `npm start` in terminal in both `frontend` and `backend` directories to start the frontend and backend server.
7. Use `testuser` as Username and `testpassword` as Password to log in or any other username and password you have inserted into the database

Potential Issues:

1. Port is already in use
   How to fix:

- Change the PORT number in `server.js` to an available one (for eg `5001` instead of `5000`).
- Change the API call in `Login.js` to use the same PORT number which you have chosen (for eg `"http://localhost:5000/api/auth/login"` to `"http://localhost:5001/api/auth/login"`)
