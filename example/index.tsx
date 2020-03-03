import 'react-app-polyfill/ie11';
import * as React from 'react';
import { useState } from 'react';
import * as ReactDOM from 'react-dom';

import Prism from 'react-syntax-highlighter/dist/esm/prism';
import theme from './theme';

import './style.css';
import { Accordion } from '../.';

const code = `<Accordion isToggled={isToggled}>
	<p>Another example</p>
</Accordion>
`;

const customButton = `const [isToggled, setToggle] = useState(true);
...
<button onClick={() => setToggle(prev => !prev)}>Toggle</button>
<Accordion isToggled={isToggled}>
	<p>Some text.</p>
</Accordion>
`;

const App = () => {
  const [isToggled, setToggle] = useState(true);
  return (
    <div className="wrapper">
      <header>
        <h1>
          Motion
          <br />
          Elements
        </h1>
      </header>
      <main>
        <div className="card">
          <h3>Basic</h3>
          <Prism language="jsx" style={theme}>
            {code}
          </Prism>
          <Accordion isToggled={isToggled}>
            <p>Another example</p>
          </Accordion>

          <h3>Custom Button</h3>
          <Prism language="jsx" style={theme}>
            {customButton}
          </Prism>
          <button onClick={() => setToggle(prev => !prev)}>Toggle</button>
          <Accordion isToggled={isToggled} useButton={false}>
            <p>Some text.</p>
          </Accordion>
        </div>
      </main>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
