# React Rest

A boilerplate for fullstack projects written in TypeScript, React, Express and MongoDb.

## Install project

Rename the file `template.env` to `.env`, and replace the values with your email, password, etc. Do the same thing in the `client` folder.

Then run `yarn` at the root of the project. Since we're using [Concurrently](https://www.npmjs.com/package/concurrently) this will install packages for backend and frontend.

## Run project

Run `yarn dev` at the root of the project. Once again, thanks to Concurrently, backend and frontend will run at the same time.

## Packages

### Backend

-   [Express](https://expressjs.com/)
-   [ExpressJWT](https://www.npmjs.com/package/express-jwt)
-   [JulSeb utils](https://www.npmjs.com/package/@julseb-lib/utils): Small library of util functions, [documentation here](https://julseb-lib-documentation.vercel.app/helpers/js-utils)
-   [Mongoose](https://mongoosejs.com/)
-   [Nodemailer](https://nodemailer.com/)
-   [Plop](https://plopjs.com/)
-   [tsx](https://www.npmjs.com/package/tsx)

### Frontend

-   [React](https://reactjs.org/)
-   [React Router](https://reactrouter.com/en/main)
-   [Axios](https://axios-http.com/docs/intro)
-   [Styled components](https://styled-components.com/)
-   [@julseb-lib/react](https://julseb-lib-documentation.vercel.app//): basic React components

## Plop functions

-   `yarn plop:c`: generates a React component
-   `yarn plop:sc`: generates a React single file component
-   `yarn plop:p`: generates a React page
-   `yarn plop:r`: generates a new route on server and client
-   `yarn plop:m`: generates a new Mongoose model
-   `yarn plop:ty`: generates a new type either in shared directory or only on client directory

## Backend

### API

All the functions can be found in the `routes` folder. You can create new ones with everything you can need by running `yarn plop:r <your new route name>`.

### Models

All the models can be found in `models` folder. You can create a boilerplate one by running `yarn plop:m <your new model name>`.

### Create data

You can add some fake users by running `yarn seed-users`.

## Frontend

### API

For backend calls, use the folder `client/src/api`, and follow the same pattern. You can see an example on the page `client/src/pages/auth/Login.js`. You can also run `yarn plop:r <your new route name>` which will generate everything you need to create a new API route.

### Add pages

Create your pages in `client/src/pages`. Then, go to `client/src/routes/routes.js` and add them in the array `const routes`. Or just run `yarn plop:p <your new page name>`.

### Styling

Most of components come from `@julseb-lib/react` package. If you need new components, you can add them in `client/src/components`.
