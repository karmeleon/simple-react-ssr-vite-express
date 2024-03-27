import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <html>
      <head>
        <title>hello i am title</title>
      </head>
      <body>
        <main>
          <h1>App</h1>
          <p>Lorem Ipsum</p>
          <div>
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>Count</button>
          </div>
        </main>
      </body>
    </html>
  );
};

export default App;
