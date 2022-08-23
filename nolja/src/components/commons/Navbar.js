import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {

    return (
        <div className={ styles.menu }>
                
                <NavLink to='/' style={{color: "white", padding: "20px"}}>HOME</NavLink>
                <NavLink to='/recommend' style={{color: "white", padding: "20px"}}>여행지 추천</NavLink>
                <NavLink to='/photokey' style={{color: "white", padding: "20px"}}>포토갤러리</NavLink>
                <NavLink to='/board' style={{color: "white", padding: "20px"}}> 여행지 후기 </NavLink>
                
        </div>
    );

}

export default Navbar;