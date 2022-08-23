import PhotoList from "../components/lists/PhotoList";
import SearchItem from "../components/items/SearchItem";
import styles from './Photo.module.css';
import { useNavigate} from "react-router-dom";
function Photos(){
    const navigate = useNavigate();
    return(
        <> 
            <SearchItem/>           
            <PhotoList/>
            <div className={styles.on}>
            <button onClick={ () => navigate(`/photokey/regist`) }> 글쓰기 </button> 
            </div>
        </>
       
    );
}

export default Photos;