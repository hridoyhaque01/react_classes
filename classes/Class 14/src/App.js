import ClickCounter from './component/ClickCounter';
import Counter from './component/Counter';
import HoverCounter from './component/HoverCounter';

function App() {
  return (
    <div className="app">
      <Counter>
        {(count, incrementCount) => (
          <ClickCounter counter={count} incrementCount={incrementCount} />
        )}
      </Counter>
      <Counter>
        {(count, incrementCount) => (
          <HoverCounter counter={count} incrementCount={incrementCount} />
        )}
      </Counter>
    </div>
  );
}

export default App;
