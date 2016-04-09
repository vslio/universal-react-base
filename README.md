# Universal React/Redux base

##What is it
This is a basic boilerplate to get you started with React/Redux. The main focus of this base is to demonstrate 2 things as simple as possible:
- How to to do Universal rendering with React & Redux, using a minimum amount of baggage
- How to get data from an API and *then* render the view

##The stack
- [x] Express & json-server
- [x] Webpack
- [x] React
- [x] Redux
- [x] PostCSS, cssnext & CSS Modules

##Installation
*Note: The current build hasn't been tested on Windows.*

Clone this [repo](https://github.com/vslio/universal-react-redux-base):
```
git clone git@github.com:vslio/universal-react-redux-base.git /project-folder
```

Make sure you install `json-server` globally for the API server to work:
*Note: You might need to prepend `sudo ` depending on the permissions of your user's `node_modules` folder.*
```
npm install -g json-server
```

Fire up the console, navigate to the cloned repo and install all the project's dependencies:
```
cd project-folder/
npm install # Install the project's dependencies
npm run build # Build the production files for the first time
```

To start development:
```
npm run dev
```

To build the project for production:
```
npm run build
```

To run the production code (the production files are rebuilt automatically):
```
npm start
```


The project is accessible on `http://localhost:3000` and the API server on `http://localhost3001`.

##Structure
    .
    ├── db                      # DB file for the mock API (used by json-server)
    ├── dist                    # Final asset bundles (JS, images etc)
    └── src                     # The source ಠ_ಠ
        ├── client              # Bootstrap file for the client-side
        ├── server              # Server-side only files
        │   ├── lib             # Server libraries
        │   └── views           # Server template files
        └── shared              # Universal files - anything react/redux related
            ├── actions         # Redux action types and action creators
            ├── components      # React components
            ├── lib             # Redux middleware and other libraries
            ├── reducers        # Redux reducers
            ├── store           # Redux store configuration
            └── styles          # Top level and reusable styles (not component-specific)
                ├── base        # Base styles (type, variables, really top level stuff)
                └── modules     # Common styles that can be composed (or @extend-ed in SASS-land) in components


##Things you need to know
###Components
Some Components are defined as `Stateless Functions` instead of classes:
```
import React from 'react'
import style from './home.css'

export default () => (
  <header>
    <h3 className={style.heading}>Homepage</h3>
    <span className={style.description}>This is the homepage.</span>
  </header>
)
```
This is the recommended option when the component we're creating does not need to retain internal state and doesn't have any of the lifecycle methods. For more information check this [section of the React documentation](https://facebook.github.io/react/docs/reusable-components.html#stateless-functions).
Caveat: Hot reloading doesn't work with stateless functions. There is no support at this stage, [but it could happen](https://github.com/gaearon/babel-plugin-react-transform/issues/57).

###CSS
Using [PostCSS](http://postcss.org), [CSS Modules](http://glenmaddern.com/articles/css-modules) and [cssnext](http://cssnext.io).
