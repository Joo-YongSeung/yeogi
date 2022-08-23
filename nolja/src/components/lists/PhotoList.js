import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import PhotoItem from '../items/PhotoItem';
import { callGetPhotoListAPI } from '../../apis/PhotoAPICalls';

function PhotoList(){
    
    const result = useSelector(state => state.photokeyReducer);
    const photoList = result.photolist;
    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(callGetPhotoListAPI());
        },
        []
    );
    
    return (
       
        photoList && (
            <div className='photoBox'>
                { photoList.map(photo => <PhotoItem key = { photo.id } photo={ photo }/>)}
            </div>       
        )
      
    );
}

export default PhotoList;