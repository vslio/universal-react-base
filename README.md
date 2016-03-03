# The Dots Demo

##What is it
*This is a rough demo, demonstrating the use of our (hopefully) final tech stack.*

**This includes:**
- [x] Express
- [x] json-server
- [x] Webpack
- [x] React
- [ ] Redux
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
    ├── client                  # Contains all the client files
    │   ├── components          # React components
    │   └── styles              # Core stylesheets (not component-specific)
    ├── config                  # Webpack (for now) configuration files
    ├── db                      # Storing a mock DB file for the API
    ├── dist                    # Final asset bundles (JS, images etc)
    └── shared                  # Shared files between the server and the client


##Things you need to know
###CSS
...
