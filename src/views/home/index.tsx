import React from 'react';
import './index.scss';
import { RootState, decrement, increment, add } from '@/store/index';
import { useSelector, useDispatch } from 'react-redux';

const App: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.count);

  const dispatch = useDispatch();

  // 自增
  const handleIncrement = () => {
    dispatch(increment());
  };

  // 自减
  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleAdd = () => {
    dispatch(add(5));
  };

  return (
    <div className="app-home">
      <div className="app-home__count">Count: {count}</div>
      <div className="app-home__buttons">
        <button className="app-home__increment" onClick={handleIncrement}>
          +
        </button>
        <button className="app-home__decrement" onClick={handleDecrement}>
          -
        </button>
        <button className="app-home__add" onClick={handleAdd}>
          +5
        </button>
      </div>
    </div>
  );
};

export default App;
