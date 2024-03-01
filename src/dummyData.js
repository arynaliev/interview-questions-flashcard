export const interviewQuestions = [
  {
    id: 10,
    question: "What is closure in JavaScript?",
    answer:
      "A closure is the combination of a function and the lexical environment within which that function was declared. It allows the function to retain access to variables from its containing scope even after the scope has closed.",
  },
  {
    id: 9,
    question: "What are the differences between var, let, and const?",
    answer:
      "var has function scope, let has block scope, and const has block scope and is immutable. Variables declared with var can be redeclared and reassigned, while variables declared with let can be reassigned but not redeclared. Variables declared with const cannot be redeclared or reassigned.",
  },
  {
    id: 8,
    question: "Explain event delegation in JavaScript.",
    answer:
      "Event delegation is a technique where you add a single event listener to a parent element to manage events on its children. This is useful when you have many child elements that need the same event listener, as it can improve performance and reduce memory consumption.",
  },
  {
    id: 1,
    question:
      "What is the difference between '==' and '===' operators in JavaScript?",
    answer:
      "The '==' operator compares the values of two operands after converting them to a common type. The '===' operator, also known as the strict equality operator, checks both the values and the types of the operands, ensuring they are exactly the same.",
  },
  {
    id: 2,
    question: "What is hoisting in JavaScript?",
    answer:
      "Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed. However, only the declarations are hoisted, not the initializations.",
  },
  {
    id: 3,
    question: "Explain event bubbling and event capturing in JavaScript.",
    answer:
      "Event bubbling is a mechanism in which an event starts at the most specific element and flows outward to the least specific element. Event capturing, on the other hand, is the reverse — the event starts from the least specific element and flows inward to the most specific element.",
  },
  {
    id: 4,
    question: "What is the purpose of 'use strict' in JavaScript?",
    answer:
      "'use strict' is a directive introduced in ECMAScript 5 that enables strict mode in JavaScript. Strict mode catches common coding mistakes and makes JavaScript more secure by enforcing stricter rules and disabling some features that are prone to errors.",
  },
  {
    id: 5,
    question:
      "Explain the difference between 'null' and 'undefined' in JavaScript.",
    answer:
      "'null' is a special value in JavaScript that represents the intentional absence of any object value. 'undefined', on the other hand, is a primitive value automatically assigned to variables that have just been declared but not initialized or to formal parameters for which no arguments have been passed.",
  },
  {
    id: 6,
    question: "What are closures in JavaScript and how are they used?",
    answer:
      "Closures are functions that have access to the outer (enclosing) function's variables — scope chain — even after the outer function has finished executing. They are used for data encapsulation, privacy, and to create modules in JavaScript.",
  },
  {
    id: 7,
    question: "How does prototypal inheritance work in JavaScript?",
    answer:
      "In JavaScript, objects can inherit properties and methods from other objects through prototypal inheritance. Each object has a prototype object from which it inherits properties. When a property is accessed on an object, JavaScript first looks for the property on the object itself, and if it's not found, it looks at the object's prototype, and so on up the prototype chain.",
  },

  {
    id: 11,
    category: "CSS",
    question: "What is the box model in CSS?",
    answer:
      "The box model is a fundamental concept in CSS that defines the layout and design of elements on a web page. It consists of four parts: content, padding, border, and margin.",
  },
  {
    id: 12,
    category: "CSS",
    question:
      "Explain the difference between 'display: block', 'display: inline', and 'display: inline-block'.",
    answer:
      "'display: block' makes an element a block-level element, which takes up the full width available and starts on a new line. 'display: inline' makes an element an inline-level element, which takes up only as much width as necessary and does not start on a new line. 'display: inline-block' makes an element an inline-level block container, allowing it to have block-level properties while still flowing inline with surrounding content.",
  },
  {
    id: 13,
    question: "What is the box model in CSS?",
    answer:
      "The box model is a fundamental concept in CSS that defines the layout and design of elements on a web page. It consists of four parts: content, padding, border, and margin.",
  },
  {
    id: 14,
    question:
      "Explain the difference between 'display: block', 'display: inline', and 'display: inline-block'.",
    answer:
      "'display: block' makes an element a block-level element, which takes up the full width available and starts on a new line. 'display: inline' makes an element an inline-level element, which takes up only as much width as necessary and does not start on a new line. 'display: inline-block' makes an element an inline-level block container, allowing it to have block-level properties while still flowing inline with surrounding content.",
  },
  {
    id: 15,
    question: "What is the difference between 'margin' and 'padding' in CSS?",
    answer:
      "Margins are used to create space around elements, pushing them away from other elements. Padding, on the other hand, creates space within an element, between the element's content and its border.",
  },
  {
    id: 16,
    question: "Explain the 'float' property in CSS and how it works.",
    answer:
      "The 'float' property in CSS is used to specify whether an element should float to the left or right of its container, or not float at all. When an element is floated, it is taken out of the normal flow of the document and positioned either to the left or right, allowing other elements to flow around it.",
  },
  {
    id: 17,
    question:
      "What is the 'box-sizing' property in CSS and how does it affect layout?",
    answer:
      "The 'box-sizing' property in CSS determines how the total width and height of an element are calculated. By default, the 'box-sizing' property is set to 'content-box', which means the width and height of an element only include the content itself. However, setting 'box-sizing' to 'border-box' includes padding and border in the element's total width and height.",
  },
  {
    id: 18,
    question: "What are CSS preprocessors, and why are they used?",
    answer:
      "CSS preprocessors are tools that extend the functionality of CSS by adding features like variables, nesting, and mixins. They allow developers to write cleaner, more maintainable CSS code and provide better organization and reusability.",
  },
  {
    id: 19,
    question:
      "What is the difference between 'inline' and 'inline-block' display properties?",
    answer:
      "'inline' elements do not start on a new line and only take up as much width as necessary. 'inline-block' elements, however, behave like 'inline' elements in that they do not start on a new line, but they can have block-level properties applied to them, such as setting width and height.",
  },
  {
    id: 20,
    question: "How can you vertically center an element in CSS?",
    answer:
      "There are several methods to vertically center an element in CSS, including using flexbox, CSS Grid, or setting the element's position to 'absolute' and using the 'top' and 'transform' properties with a value of '50%'.",
  },
  {
    id: 21,
    category: "React",
    question: "What are the key features of React?",
    answer:
      "Some key features of React include virtual DOM, component-based architecture, JSX, and uni-directional data flow.",
  },
  {
    id: 22,
    category: "React",
    question: "What is JSX in React?",
    answer:
      "JSX is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It makes React components easier to read and write.",
  },
  {
    id: 23,
    question: "What is React and what are its main features?",
    answer:
      "React is a JavaScript library for building user interfaces, developed by Facebook. Its main features include a virtual DOM for efficient rendering, component-based architecture for reusability and modularity, JSX for writing HTML-like code in JavaScript, and uni-directional data flow with Flux or Redux.",
  },
  {
    id: 24,
    question: "What is JSX in React?",
    answer:
      "JSX is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It makes writing React components more intuitive and readable.",
  },
  {
    id: 25,
    question: "What are React components?",
    answer:
      "React components are the building blocks of a React application. They are reusable, self-contained units of UI that can be composed together to create complex interfaces. Components can be either functional components or class components.",
  },
  {
    id: 26,
    question: "What is the difference between state and props in React?",
    answer:
      "State is an internal data storage mechanism in React components that allows components to manage their own data. Props, short for properties, are data passed from parent to child components. While state is mutable and managed internally by the component, props are immutable and passed down from parent components.",
  },
  {
    id: 27,
    question: "What are React hooks?",
    answer:
      "React hooks are functions that enable functional components to use state and other React features without writing a class. Hooks, such as useState and useEffect, allow functional components to manage local state, perform side effects, and access the React lifecycle methods.",
  },
  {
    id: 28,
    question: "Explain the concept of virtual DOM in React.",
    answer:
      "The virtual DOM is a lightweight, in-memory representation of the actual DOM. React uses the virtual DOM to perform efficient updates to the UI by comparing the current virtual DOM with the previous one and only updating the parts of the actual DOM that have changed, minimizing the number of DOM manipulations.",
  },
  {
    id: 29,
    question: "What is the purpose of key prop in React lists?",
    answer:
      "The key prop is a special attribute in React that helps identify each element in a list. It allows React to efficiently update the UI by reusing existing DOM elements when the list changes, rather than creating new ones. Keys should be unique among siblings, but do not need to be globally unique.",
  },
  {
    id: 30,
    question:
      "What are the differences between controlled and uncontrolled components in React?",
    answer:
      "Controlled components are components whose value is controlled by React through state. Changes to the value of controlled components are handled by React via event handlers. Uncontrolled components, on the other hand, store their own state internally and do not rely on React to manage their value.",
  },

  {
    id: 31,
    category: "Behavioral",
    question: "Tell me about a time when you had to work under pressure.",
    answer:
      "In my previous job, we had a tight deadline to meet for a project. Despite the pressure, I remained focused and organized, prioritizing tasks effectively to ensure we met the deadline successfully.",
  },
  {
    id: 32,
    category: "Behavioral",
    question: "How do you handle conflicts within a team?",
    answer:
      "I believe in open communication and collaboration to resolve conflicts within a team. I strive to understand different perspectives and find mutually beneficial solutions.",
  },
  {
    id: 33,
    question: "Tell me about yourself.",
    answer:
      "This question is often used as an icebreaker and allows the interviewer to get to know you better. Focus on your professional background, relevant experiences, and key skills that are applicable to the job you're applying for.",
  },
  {
    id: 34,
    question:
      "Can you describe a difficult work situation and how you handled it?",
    answer:
      "In this question, the interviewer wants to understand how you deal with challenges and conflicts in the workplace. Choose a specific example where you faced a difficult situation, explain the actions you took to resolve it, and highlight the positive outcome or lesson learned.",
  },
  {
    id: 35,
    question: "How do you prioritize tasks and manage your time effectively?",
    answer:
      "Employers often value candidates who can effectively manage their time and prioritize tasks to meet deadlines. Describe your approach to task prioritization, whether it's using to-do lists, setting deadlines, or utilizing time management techniques, and provide examples of how you've successfully managed your workload in the past.",
  },
  {
    id: 36,
    question: "Tell me about a time when you demonstrated leadership skills.",
    answer:
      "Leadership skills are highly valued in many roles. Provide an example of a project or initiative where you took the lead, motivated others, and achieved a positive outcome. Highlight your ability to communicate effectively, delegate tasks, and inspire teamwork.",
  },
  {
    id: 37,
    question: "How do you handle working in a team?",
    answer:
      "Teamwork is essential in most workplaces. Discuss your approach to collaboration, including how you communicate with team members, contribute to group projects, and resolve conflicts. Provide examples of successful teamwork experiences and how you've contributed to achieving team goals.",
  },
  {
    id: 38,
    question: "What are your strengths and weaknesses?",
    answer:
      "When discussing strengths, focus on qualities that are relevant to the job and supported by examples from your experiences. When discussing weaknesses, choose something that you have identified and are actively working to improve. Discuss how you're addressing your weakness and turning it into a strength.",
  },
  {
    id: 39,
    question: "Can you tell me about a time when you had to adapt to change?",
    answer:
      "Employers value candidates who can adapt to new situations and challenges. Provide an example of a time when you faced a significant change, such as a new project, process, or team structure, and explain how you successfully adapted to it. Highlight your flexibility, problem-solving skills, and ability to remain positive in the face of change.",
  },
  {
    id: 40,
    question: "How do you handle stress and pressure?",
    answer:
      "Stress management is important in demanding work environments. Describe your approach to handling stress, whether it's through time management techniques, relaxation methods, or seeking support from colleagues. Provide examples of how you've successfully managed stress in the past and remained productive under pressure.",
  },
];
