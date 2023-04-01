import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="question-answer-component">
      <h1>Questions and Answers</h1>
      <div className="question-answer">
        <h3>1.What is the difference between props and state ?</h3>
          Here are some differences between props and state in React:
          <ul>
            <li>
              With state data is being managed on the other hand data is passed
              using props.
            </li>
            <li>
              Props are available to the child components. State is local to the
              component that manages it.{" "}
            </li>
            <li>
              Changes in props trigger a re-render of the child component but
              the child component cannot change its own props. Changes in state
              trigger a re-render of the component that manages the state, and
              the component can change its own state.{" "}
            </li>
            <li>
              In Props child component cannot modify the values it receives.But
              in State, the component can modify the values it holds.{" "}
            </li>
            <li>
              State allows components to create and maintain their own data,
              props allow components to only receive data . A component that
              receives read-only data from props cannot modify it once it has
              received it from the outside.
            </li>
          </ul>

        <h3>2.How does useState work ?</h3>
        <p>
          The useState() hook allows you to create, track and update a state in
          functional components. In React, it is used to manage state within a
          functional component. The useState hook returns an array with two
          elements: the current state value and a function to update the state.
          The Hook takes an initial state value as an argument and returns an
          updated state value whenever the setter function is called.
        </p>

        <h3>3.What is the purpose of useEffect other than fetching data ?</h3>

        <p>
          The useEffect Hook can perform side effects in your
          components.Other than that useEffect hook in React can be used to perform various side effects other than fetching data, such as manipulating DOM,updating the document title, triggering animations, handling events, subscribing to a WebSocket, and more.
        </p>

        <h3>4.How Does React work ?</h3>
        <p>
          React is a JavaScript library . It lets you build user interfaces out
          of individual pieces called components. ReactJS divides the UI into
          isolated reusable pieces of code known as components. React components
          work similarly to JavaScript functions. When a React application is
          loaded in a browser, it first renders a root component, which can have
          child components. Each component is a reusable piece of code that can
          take inputs (also called props) and return a JSX template. When a
          component's props or state change, React re-renders the component and
          its child components.
        </p>
      </div>
    </div>
  );
};

export default Footer;
