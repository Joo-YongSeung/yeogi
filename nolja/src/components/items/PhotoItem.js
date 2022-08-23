import { Link } from 'react-router-dom';
import styles from './Items.module.css';

function PhotoItem({photo}){

    return(
        <>
        <div className={styles.img}>
        
        <Link to={ `/photokey/${ photo.id }`}>  
            <img src ={ photo.detail.image }  alt={ photo.title}/>
        </Link>
        <h3> {photo.title}</h3>
        
        </div>
        </>

    );
}

export default PhotoItem;