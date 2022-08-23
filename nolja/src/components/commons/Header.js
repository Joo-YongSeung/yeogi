import {NavLink, useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {resetLoginUser} from '../../modules/UserModule';
import styles from './Navbar.module.css';

function Header() {

    const loginStatus = !!localStorage.getItem('isLogin');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logoutHandler = () => {
        localStorage.removeItem('isLogin');
        dispatch(resetLoginUser());
        navigate('/');
    }

    return(
        <>
        <div className={styles.header}>     
            <div className={styles.login}>
            {!loginStatus ? (
                <li><NavLink to='/login'>로그인</NavLink></li>
                ) : (
                <li onClick={ logoutHandler }>로그아웃</li>
            )}
            </div> 
          </div>   
        </> 
    );
}

export default Header;