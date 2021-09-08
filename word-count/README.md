# Words Counter

Word Count Challenge.

Create a `user-facing` form that counts the number of words in a block of text.

Features:

- A form containing a `text box to enter a body of text`. When submitting the form with some text, `displays the results` containing the number of words in the text box. When submitting the form with an empty text shows an error displaying that some text input is required.

Built with `JavaScript`/ `ReactJS` / `Bootstrap4` / `Sass`.

## Environment

- `git clone` with this repo url to get the code in the local machine
- `npm install` activates the environment and installs all dependencies used
- `cd word-count` to switch to the correct module and start using the app

## Available Scripts

### `npm start`

to view it in the browser.

# Getting Started with Create React App

- `npx create-react-app my app` no need to install or configure webpack or Babel, npx is pre-bundled with npm.
- `git init` initializes an empty repository.
- `npm install bootstrap@4` framework for building responsive, mobile-first sites
- `npm install node-sass` preprocessor that helps you write robust, maintainable CSS.
- `localhost 3000` port that supports our frontend.

```
# word-count -contains all the frontend modules, here we store all the client-side modules, needed to manipulate user interface and display it to the DOM.
# src folder -the core of the frontend structure connects and renders our components.
# Hooks folder -contains useText custom hook, need it to set state using in our components, in a modular reusing way.
# components folder -contains TextBlog.js, and Results.js, which are our components used to render all the information on our client-side.
# App.js -Wraps the TextBlog component, allowing it to render in the application.
# src folder -contains ` assets` folder which contains all images using in the application and readme file.

React Hooks allows to break down the logic. Allows to reuse the component, and bringing in that logic to other components, providing stateless components which means, having a functional component.

```

## Home Page.

![](/word-count/src/assets/word-count-homepg.png)
