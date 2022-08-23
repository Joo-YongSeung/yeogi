import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { callModifyPhotoAPI } from '../../apis/PhotoAPICalls'
import styles from './Form.module.css'

function PhotoModifyForm() {

    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const result = useSelector(state => state.photokeyReducer);

    const [ modifyPhoto, setModifyPhoto] = useState ({

        id: 0,
        title: '', 
        detail : {
            description: '',
            image: ''
        }
    }
  );

  
    const onChangeHandler = (e) =>{

         let name = e.target.name;
         let value = e.target.value;
    
         switch(name){

            case 'description' :
                name = 'detail';
                 value = {
                    description : value,
                    image : modifyPhoto.detail.image
                 }; 
                break;   
            }
        
   

        setModifyPhoto(
            {
            ...modifyPhoto,
            id : id,
            [name] : value
            }
        );
    }


    const fileChangeHandler = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertBase64(file);

        setModifyPhoto(
            {
                ...modifyPhoto,
                detail : {
                    description : modifyPhoto.detail.description,
                    image : base64
                }
            }
        );

    }

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file)
            fileReader.onload = () => {
                resolve(fileReader.result);                
            }
            fileReader.onerror = (error) => {
                reject(error);
            }
        })
    }

    useEffect(
        () => {

            if(result.modify) {
                alert('수정 완료');
                navigate(`/photokey`);
            }
        },
        [result]
    );

    const onClickHandler = () => {
        
        dispatch(callModifyPhotoAPI(modifyPhoto));
    }

    return (
        <>
        <div className={styles.regist_title}>
            <h4>포토갤러리</h4>
        </div>
        <div className={styles.modify}>
          <input type="text" placeholder='제목을 입력하세요' 
            name ="title" valu ={modifyPhoto.title} onChange={ onChangeHandler }/>
        <br/>    
        <textarea name='description' value = { modifyPhoto.detail.description} onChange={ onChangeHandler}/>
        <br/>
        <input 
            type="file"
            name="image"
            accept='image/*'
            onChange={ fileChangeHandler}/>
        <br/> 
        <button onClick={ onClickHandler }> 수정 </button> 
        </div>
        </>
    );

}

export default PhotoModifyForm;