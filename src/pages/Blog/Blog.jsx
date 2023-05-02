import React from "react";

const Blog = () => {
  return (
    <div className="text-center bg-indigo-50 my-10 w-full md:px-20 lg:px-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto px-4 py-5">
      <h2 className="text-3xl font-semibold mb-3">
        1. Tell us the differences between uncontrolled and controlled components.
      </h2>
      <h4 className="text-xl font-semibold mb-5">
      Uncontrolled components maintain their own state using the DOM, whereas controlled components are handled by their parent component through props and callbacks. Although they may necessitate more boilerplate code, controlled components offer more explicit control over component behavior. Uncontrolled components are easier to use and need less code, but because of how they handle their internal state, they might be more challenging to test and debug. The decision between controlled and uncontrolled components is based on the application's specific requirements as well as the preferences of the developer. Generally speaking, uncontrolled components are advised for simpler applications that stress usability and simplicity and complex systems that demand more explicit control over state management and testing.
      </h4>
      <h2 className="text-3xl font-semibold mb-3">2. How to validate React props using PropTypes?</h2>
      <h4 className="text-xl font-semibold mb-5">
      React has a built-in library called PropTypes that enables developers to check the types of props that are supplied to a component. The developer must import PropTypes from the prop-types library, specify the desired prop types in the component, and then send the props to the component in order to validate them using PropTypes. The kinds of the passed props will then be checked by PropTypes, and if they do not match the expected values, a warning will be raised. By ensuring that the proper types of props are supplied to components, PropTypes can aid in mistake prevention and increase the dependability of the code.
      </h4>
      <h2 className="text-3xl font-semibold mb-3">3. Tell us the difference between nodejs and express js.</h2>
      <h4 className="text-xl font-semibold mb-5">
      Node.js is a JavaScript runtime that enables programmers to run JavaScript on the server-side. It offers an event-driven, non-blocking I/O mechanism that makes it possible to develop scalable, fast applications. A web application framework called Express.js is built on top of Node.js. It offers a collection of tools and libraries that make it easier to create web apps and APIs. For managing routine web development chores like routing, templating, and processing requests and answers, Express.js offers middleware. In conclusion, Express.js provides the framework for creating web apps and APIs on top of Node.js, while Node.js provides the runtime environment.
      </h4>
      <h2 className="text-3xl font-semibold mb-3">4. What is a custom hook, and why will you create a custom hook?</h2>
      <h4 className="text-xl font-semibold mb-5">
      A custom hook is a reusable function in React that encapsulates stateful logic and can be shared across components. Custom hooks give developers the ability to take sophisticated logic out of one component and reuse it in another, making their code more modular and reusable. Custom hooks can be used to hide frequently used features like data retrieval, form handling, and animation. Additionally, they can be used to address particular issues that React's built-in hooks do not cover. Overall, writing a custom hook can make code simpler and easier to read while minimizing duplication and maximizing logic reuse between components.
      </h4>
    </div>
  );
};

export default Blog;
