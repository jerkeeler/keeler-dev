---
slug: 'react-class-fields'
date: 2019-10-17
title: 'React and Javascript Class Fields'
description: 'An introduction to Javascript class fields and why you should use them with React components.'
tags: ['react', 'programming']
---

Class fields aren't a new concept in the javascript world - [the proposal](https://github.com/tc39/proposal-class-fields) was created in May 2017 and is currently a stage 3 (candidate) proposal - but they are starting to achieve adaptation in the latest versions of Chrome and Firefox ([caniuse](https://caniuse.com/#search=class%20fields)).

With that in mind, I think it's about time to start adopting class fields into codebases to take advantage of this powerful feature. If you have to target more than the latest two browser versions (assuredly most websites do) then, as always, there is a handy [babel plugin](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties) so you can start using this new Javascript language feature.

The main advantage, in my personal experience, has been with React applications. Class fields clean up the code **a lot** and get rid of some common gotchas in the React/Javascript world.

Class fields allow us to clean up our React component constructors.

Before:

```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 }; // initial state
  }
}
```

After:

```javascript
class MyComponent extends React.Component {
  state = { value: 0 }; // initial state
}
```

In many React components this can completely eliminate the constructor for a given class and make the code more readable. Another common usage of the constructor is to call `bind(this)` on class methods. We can clean that up as well with class fields and arrow functions.

Before:

```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myMethod.bind(this);
  }

  myMethod() {
    ...
  }
}
```

After:

```javascript
class MyComponent extends React.Component {
  myMethod => () => {
    ...
  }
}
```

So much cleaner!

With static class fields we can clean up one of the ugliest portions of React code (in my opinion), propTypes. Many React applications have prop types defined at the bottom of a file like so:

```javascript
MyComponent.propTypes = {
  prop1: PropTypes.string(),
};
```

One issue with this approach is that the requirements for a given component are defined at the bottom of the file. This makes reading the code more difficult and isn't intuitive. It is especially offensive if you've defined helper functions throughout the file and the component ends up being separated from the prop types by all kinds of code!

With static class fields we can define our prop types inside of the class! Stick it at the top of the component and you have a lovely, easy to read, component definition.

```javascript
class MyComponent extends React.Component {
  static propTypes = {
    prop1: PropTypes.string(),
  };
}
```

Putting these three uses together we have a nicely defined, easier to read, React component.

```javascript
class MyComponent extends React.Component {
  static propTypes = {
    prop1: PropTypes.string()
  }

  state = { value: 0 }; // initial state

  myMethod = () => {
    ...
  }
}
```

In my personal experience using class fields (both in React applications and non-React codebases) has led to cleaner, easier to read code. I'm stoked that they are starting to achieve mainstream adaptation and I can't wait to see more codebases use them.
