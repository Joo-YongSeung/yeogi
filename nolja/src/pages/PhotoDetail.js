import PhotoGellery from "../components/items/PhotoGellery";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { callDeletePhotoAPI } from "../apis/PhotoAPICalls";
import styles from './Photo.module.css'

function PhotoDetail() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const result = useSelector(state => state.photokeyReducer);

    const deleteHandler = () => dispatch(callDeletePhotoAPI(id));
    const updateHandler = () => navigate(`/photokey/modify/${id}`);

    useEffect(

        () => {
            
            if (result.delete){
                alert('삭제 완료');
                navigate(`/photokey`);
            }
        },
        [result]
    );


    return (
        <>
        <div className={styles.button}>
            <button onClick={ deleteHandler}> 삭제</button>
            <button onClick={ updateHandler }> 수정 </button>
        </div>
            <PhotoGellery id={ id } />
        </>    
        
        
    );
}

export default PhotoDetail;