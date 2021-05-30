import classes from './Counter.module.css';
import React from 'react';
import{useSelector,useDispatch} from 'react-redux';

const Counter = () => {
  const counter = useSelector(state => state.counter)
  const show = useSelector(state => state.showCounter)
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch({type:'increment'});
  };
  const decrementHandler = () => {
    dispatch({type:'decrement'})
  };
  const increaseHandler = () => {
    dispatch({type:'increase',amt:5})
  };
  const toggleCounterHandler = () => {
    dispatch({type:'toggle'})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show&&<div className={classes.value}>{counter}</div>}
      <button className={classes.button} onClick={incrementHandler}>Increment Counter</button>
      <button className={classes.button} onClick={decrementHandler}>Decrement Counter</button>
      <button className={classes.button} onClick={increaseHandler}>Increase Counter by 5</button>
      <button className={classes.button} onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
