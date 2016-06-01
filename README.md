# Task: hCard Builder

##Setup

```
npm install
npm start
```

##Design decisions

###Application Structure
- Although, not necessary for this project, I have chosen to use Redux for the applications state management to demonstrate how I would structure the application if the shared state could not easily be contained in a high level component and passed down to the components that require it.
- One of the big advantages of using Redux is the containment of state to the Redux store. This meant that I was able to create components as pure functions which helped to keep them simple and will make future testing of these components a lot easier.
- The structure of the application is illustrated in the following image

![Project Structure](/public/images/ProjectStructure.png)

State tree structure for this project is as follows

```
{
  details: {
    name: '',
    surname: '',
    email: '',
    phone: '',
    houseNumber: '',
    street: '',
    suburb: '',
    state: '',
    postcode: '',
    country: '',
  }
}
```

###Less
- I used less to take advantage of variables and nested syntax

###Webpack
- Selected webpack to build the project and take advantage of the webpack dev server

###eslint
- Used airbnb config to keep code consistent

###IE8 support
- Used v0.14 of React as v15.x no longer support IE8
- On top of this I used es5-shim which contained both Shims and Shams to enable the bundled code to be run
- I also used Flexibility js, a polyfil for the Flex Box layout which enabled me to create a fluid layout in IE8

###IE Limitations
- IE8 doesn't support media queries so responsiveness on IE8 is limited
- For IE8, file uploading functionality was omitted
