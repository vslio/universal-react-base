# The Dots Demo

##What is it
*This is a rough demo, demonstrating the use of our (hopefully final) tech stack.*

**This includes:**
- [x] Express
- [x] json-server
- [x] Webpack
- [x] React
- [x] Redux
- [x] Babel
- [x] PostCSS
- [x] cssnext

##Installation
*Note: The current build has only been tested on OSX.*

Clone this [repo](https://github.com/vslio/the-dots-demo):
```
git clone git@github.com:vslio/the-dots-demo.git /desired-folder
```

Make sure you install JSON Server globally for the API server to work:
*Note: You might need to prepend `sudo ` depending on the permissions of your user's `node_modules` folder.*
```
npm install -g json-server
```

Fire up the console, navigate to the cloned repo and install all the project's dependencies:
```
cd /desired-folder/
npm install
```

Build the project and start development:
```
npm start
```

Success! The project is accessible on `http://localhost:3000` and the API server on `http://localhost3001`.

##Structure
    .
    ├── client                  # Client specific files
    │   ├── actions             # Redux action types and action creators
    │   ├── components          # React components
    │   ├── containers          # Top level react components
    │   ├── reducers            # Redux reducers
    │   ├── store               # Redux store
    │   └── styles              # Core stylesheets (not component-specific)
    │       └── common          # Common styles that can be composed (@extend-ed) in components
    ├── config                  # Webpack (for now) configuration files
    ├── db                      # Storing a mock DB file for the API
    ├── dist                    # Final asset bundles (JS, images etc)
    └── server                  # Server specific files


##Things you need to know
###Components
Some Components are exposed as `Stateless Functions` instead of classes:
```
import React from 'react'
import style from './home.css'

const Home = () => (
  <header>
    <h3 className={style.heading}>Homepage</h3>
    <span className={style.description}>Nothing to see here yet.</span>
  </header>
)

export default Home
```
This is a better option when the component we're using is state-agnostic and only serves a presentational purpose. For more information check this [section of the React documentation](https://facebook.github.io/react/docs/reusable-components.html#stateless-functions).

###Reducers
The app state tree is currently a simple JavaScript `Object`. For numerous reasons (mainly performance-related) it needs to be converted to an immutable data collection, preferably using Facebook's [immutable.js](https://github.com/facebook/immutable-js).
For implementation check out [this example](https://github.com/arsich/react-redux-cats/blob/master/app/reducers/cats.js).

###CSS
...
