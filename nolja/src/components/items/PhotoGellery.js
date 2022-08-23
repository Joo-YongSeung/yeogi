import { useEffect  } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { callGetPhotoAPI } from "../../apis/PhotoAPICalls";
import styles from './Items.module.css';

function PhotoGellery({id}){

    const result = useSelector(state => state.photokeyReducer);
    const photo= result.photo;
    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(callGetPhotoAPI(id));
        },
        []
    );

    return(
        photo && (
            <>  
                <div className={styles.poto}>
                    <h3>포토갤러리</h3>
                </div>
                
                <div className={ styles.title}>
                <h2>{ photo.title }</h2>
                </div>

                <div className={ styles.img }>
                <img src ={ photo.detail.image}  alt={ photo.title}/>
                <br/>
                <br/>
                { photo.detail.description}
                <br/>
                </div>
                
            </>
        )
    );
}

export default PhotoGellery;