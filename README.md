##Angular Cake-WebShop

Technology: HTML, MDBootstrap, CSS, Angular-7, Firebase, Progressive Web Application  and i18n.
Database : Angular Firebase.

Download Angular CLI
Download Nodejs

##Clone the repository and run npm install.



##Firebase
For those who do not know Firebase is a Google product whose features can be summarized in the following sentence:

Firebase is a real-time NoSQL cloud database (but also cloud storage and messaging service and authentication service and — see here) that helps you build apps without building the backend (or letting you to add someone later — see functions). You can save and retrieve JSON objects, build user authentication, and get data updates in real-time across connected devices in milliseconds: data remains available if your app goes offline, providing a great user experience regardless of network connectivity.

###Firebase setup
Create a new Firebase app on your Firebase console with your Google Account by clicking on “Add project” and typing “fcc-book-trading”.

Then click on “Add Firebase to your web app”, and copy the config keys into src/environments/environment.ts(do the same for environment-prod.ts), the result should be similar to this (notice that these infos will be always available under Authentication tab then click on Web setupbutton on the upper-right corner):

export const FireBaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID"
}
The last thing is to enable anonymous access to your database in order to avoid building actual authentication (see the code on github to see how I solved this with the Google Sign-In):

Go to the Database tab, then Rules and change the rules in this way (please do not forget to publish them! Remember also to restore them when you will add the actual authentication 😅)

{
  "rules": {
    ".read": "auth == null",
    ".write": "auth == null"
  }
}

##For Admin Role Register or SignIn with Google Auth

your registered data will be saved inside the firebase clients table.

    -clients
        -LRSkWxGAKQAFZmyfsx6
            -createdOn: "1542046725"
            -email: "<<YOUR_REGISTERED_EMAIL_ID>>"
            -isAdmin: false      <--- Change this to true ...

Now you can able to access the Admin Privileges like Creating Product, Removing Product, etc..




### Development server

Run `npm start` or `yarn start` for a dev server to initialize. 
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Running scripts 

To build the app in `Ahead-Of-Time compilation` you need to run `yarn build:prod` or `npm run build:prod`


### Code scaffolding

Run `ng generate component component-name` to generate a new component. If you don't have `@angular/cli` as a global package on your system, you can run `npx ng generate component component-name`. You can also use `ng generate directive|pipe|service|class|guard|interface|module`.

### Build

Run `yarn build:prod` or `npm run build:prod` to build the project. 
The build artifacts will be stored in the `dist/` directory.

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## App's Architecture
*   Used latest Angular CLI v7.2.4

*   Used `SCSS` as a CSS preprocessor to write efficient CSS codes.

*   Used new generation `JavaScript (ES6, ES7)` with `TypeScript`.

*   Used `Angular Services` for sharing app state and data-binding within injected components.

*   Used latest `Bootstrap v4.1.3` version to integrate powerful responsive design powered by CSS FlexBox model.

*   Used `semantic` HTML tags and elements with semantic class names.

*   Modular components created for reusing components elsewhere to improve modularity in the app.

*   App designed from scratch with the inspiration of the Mdbootstrap Material Design principles by the power of the `Angular Material`.

*   Modular components created for reusing components elsewhere to improve modularity in the app.

## Motivation of Choices on Implementation
*   User Registration using Firebase Authentication (using Email/Password | Google Authentication )

*   User can add product to his cart.

*   Admin can add product to the product list

*   Admin can edit/delete the product.

*   The form immediately responses to user interactions with its `validation` checkers.

*   In case of navigating to a page which doesn't exist in the app, a `wildcard route (404)` is integrated to the project. It redirects users to the `Not Found` page. 

*   Added `Logout` button to the app which redirects the user to the `Login` page. When user routes to the `Login` page, user token is getting removed from firebase and the user is being unauthorized. 

*   Mobile device UI behaviours designed to improve User Experience in a performing way and coded with the usage of the @media queries.

##Security
*   Implmented Authentication and Authorization


