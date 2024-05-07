import {useHistory} from 'react-router-dom'
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FireBaseContext } from '../../store/Context';


function Header(title) {
  const history = useHistory()
  const {user} = useContext(AuthContext);
  const {firebase} = useContext(FireBaseContext)


  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName" onClick={()=>history.push('/')}>
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span>
            {user ? (
              <span>{user.displayName}</span>
            ) : title === 'Login' ? (
              <span onClick={() => {
                history.push('/signup');
              }}>Signup</span>
            ) : (
              
              <span onClick={() => {
                history.push('/login');
              }}>Login</span>
            )}
          </span>
          <hr />
        </div>

          { user &&  <span onClick={()=>{
            firebase.auth().signOut();
            history.push('/login')
          }} >Logout</span>}

        <div className="sellMenu" onClick={()=>{
          history.push(user ? '/create' : '/login')
        }}>
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
