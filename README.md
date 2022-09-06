To run the project, you need to install all dependecies first using:

### `npm install`

After that, create a new DB called AmigoCorretor on postgre (using PG Admin or via CLI)

Then use tsc to transpile the code with:

### `tsc -w`

or

### `npx tsc -w`

Then run the project using:

### `npm start`

Now use Postman to reach to API's endpoints in http://localhost:3000/users and http://localhost:3000/posts, http://localhost:3000/images and http://localhost:3000/favorites.
