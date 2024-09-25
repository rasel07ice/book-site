const FAQ = () => {
  return (
    <div id="faq" className="py-8">
      <div className="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-5xl mt-5 tracking-tight">
            Questions? Look Here
          </h2>
          <p className="text-neutral-500 text-xl mt-3">
            Find your query! We are here to answer your questions
          </p>
        </div>
        <div className="grid divide-y divide-neutral-200 max-w-2xl mx-auto mt-8 text-left">
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span>
                  {" "}
                  What is React.js and Explain the concept of
                  &quot;components&quot; in React
                </span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                React is a javascript Library which lets you build user
                interfaces out of individual pieces called components. React
                components are regular JavaScript functions except: Their names
                always begin with a capital letter. They return JSX markup.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span> What is JSX in React, and how does it work?</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                JSX stands for JavaScript XML. JSX allows us to write HTML in
                React. JSX makes it easier to write and add HTML in React. JSX
                allows us to write HTML elements in JavaScript and place them in
                the DOM without any createElement() and/or appendChild()
                methods. JSX converts HTML tags into react elements. You are not
                required to use JSX, but JSX makes it easier to write React
                applications
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span>
                  {" "}
                  What is the Virtual DOM, and how does React use it to optimize
                  performance?
                </span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                The virtual DOM is an in-memory representation of the real DOM,
                which helps improve the performance of web applications. Instead
                of directly manipulating the real DOM, changes are first made to
                the virtual DOM, which is then compared to the real DOM to apply
                only the necessary changes.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span>
                  {" "}
                  Explain the concept of &quot;props&quot; in React and how they
                  are used
                </span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                Props is a special keyword in React that stands for properties
                and is used for passing data from one component to another.Props
                are used to store data that can be accessed by the children of a
                React component. They are part of the concept of reusability
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span>
                  {" "}
                  What is &quot;state&quot; in React, and how does it differ
                  from props?
                </span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                tate refers to the internal data of a component that can change
                over time, while props are used to pass data between components.
                By keeping these differences in mind and using them
                appropriately, developers can create robust and scalable
                applications with React.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span>
                  {" "}
                  Explain the useState hook and provide an example of how it is
                  used?
                </span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                useState is React Hook that allows you to add state to a
                functional component. It returns an array with two values: the
                current state and a function to update it. The Hook takes an
                initial state value as an argument and returns an updated state
                value whenever the setter function is called.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span>
                  {" "}
                  What is the purpose of the useEffect hook in React, and when
                  would you use it?
                </span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 text-left mt-3 group-open:animate-fadeIn">
                The useEffect Hook allows you to perform side effects in your
                components. Some examples of side effects are: fetching data,
                directly updating the DOM, and timers. useEffect accepts two
                arguments. The second argument is optional.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
