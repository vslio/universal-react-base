# Universal React (& Redux) base

##What is it
This is a basic boilerplate to help you get started with React & Redux. What you need to know about it:
- The main focus of this base is to demonstrate how to start a Universal React & Redux app in a simple and concise way, using just a minimum amount of baggage
- It will show you how to fetch a component's data from an API server and ultimately construct and send the final HTML to the client, *after* all the required data is fetched
- It assumes you have at least a basic understanding of how [React](https://facebook.github.io/react/docs/tutorial.html), [Redux](https://egghead.io/series/getting-started-with-redux) ~~and [Immutable data structures](http://facebook.github.io/immutable-js/)~~ work

##What's left to do
- Add user authentication (that's what the form is there for) and restrict access to specific routes/components
- Add [ImmutableJS](https://github.com/facebook/immutable-js/)
- Don't dispatch the action in componentDidMount if the data has already been fetched from server-side rendering
- Further improve the codebase (feel free to make suggestions, PRs etc)

##The stack
- [x] Express & json-server
- [x] Webpack
- [x] React
- [x] Redux
- [x] React Helmet
- [x] PostCSS, CSS Modules & cssnext
- [ ] ImmutableJS

##Installation
*Note: The current build hasn't been tested on Windows.*

Clone this [repository](https://github.com/vslio/universal-react-base):
```
git clone git@github.com:vslio/universal-react-base.git project-folder/
```

Make sure you install `json-server` globally for the API server to work:
*Note: You might need to prepend `sudo ` depending on the permissions of your user's `node_modules` folder.*
```
npm install -g json-server@0.8.9 standard
```

If you'd like to use a style guide, I would suggest [StandardJS](https://github.com/feross/standard). You will need to install it globally:
```
npm install -g standard
```
*Make sure to visit the link above for instructions on how to install the necessary plugin for your favourite code editor.*

Fire up the console, navigate to the cloned repository and install the project's dependencies:
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

To run the production code (the production files are rebuilt automatically every time):
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
            ├── components      # React components (includes containers)
            ├── lib             # Redux middleware and other libraries
            ├── reducers        # Redux reducers
            ├── store           # Redux store configuration
            └── styles          # Top level and reusable styles (not component-specific)
                ├── base        # Base styles (type, variables, really top level stuff)
                └── modules     # Common styles that can be composed (or @extend-ed in SASS-land) in components


##Useful things to know
###Style Guide
I have opted for [StandardJS](https://github.com/feross/standard), because it's more in line with how I've been coding all along. Feel free to use whatever style guide you prefer ([Airbnb](https://github.com/airbnb/javascript) is one of the most popular ones).

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
This is the recommended option when the component we're creating does not need to retain internal state and doesn't have any of the lifecycle methods. For more information check [this section of the React documentation](https://facebook.github.io/react/docs/reusable-components.html#stateless-functions).
Caveat: Hot reloading doesn't work with stateless functions. There is no support at this stage, [but it could happen](https://github.com/gaearon/babel-plugin-react-transform/issues/57). This is the case because I am using the experimental [react-transform-hmr](https://github.com/gaearon/react-transform-hmr). This will likely be removed in the future, in favour of Webpack's native HMR.

###CSS
Using [PostCSS](http://postcss.org), [CSS Modules](http://glenmaddern.com/articles/css-modules) and [cssnext](http://cssnext.io).
Despite being a big fan of SASS and global CSS in general, I decided to give CSS Modules a go. There are a few quirks to overcome and you need to 'retrain' your brain to do things in a different way, but, ultimately, I believe it's the way to go for React projects. Please, make sure to read the article I linked above regarding CSS Modules. It's probably the most thorough you will find and it outlines most of the pros and cons of using them.


... TBC. :-)
