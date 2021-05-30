import classes from './Header.module.css';
import{useSelector,useDispatch} from 'react-redux';

const Header = () => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const logoutHandler = () =>{
    dispatch({type:'logout'});
  }
  return (
    <header className={classes.header}>
      <h1>Counter Redux Auth</h1>
      <nav>
        <ul>
          <li>
          {auth &&  <a href='/'>My Products</a>}
          </li>
          <li>
          {auth &&  <a href='/'>My Sales</a>}
          </li>
          <li>
           {auth && <button onClick={logoutHandler}>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
