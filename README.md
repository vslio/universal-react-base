# The Dots Demo

##What is it
*This is a rough demo, demonstrating the use of our (hopefully) final tech stack.*

**This includes:**
- [x] Express
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
Fire up the console, navigate to the cloned repo and install all the project's dependencies:
```
cd /desired-folder/
npm install
```
Build the project and start development:
```
npm start
```

Success! The project is accessible under `http://localhost:3000`. Happy coding!

##Structure
    .
    ├── client                  # Contains all the client files
    │   ├── components          # React components
    │   ├── styles              # Core stylesheets (not component-specific)
    ├── config                  # Webpack (for now) configuration files
    ├── dist                    # Asset bundles (JS, images etc)
    └── shared                  # Shared files between the server and the client-side

##CSS
...
