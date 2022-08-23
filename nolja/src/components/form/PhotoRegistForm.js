import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { callRegistPhotoAPI } from '../../apis/PhotoAPICalls';
import styles from './Form.module.css'

function PhotoRegistForm(){

    const result = useSelector(state => state.photokeyReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [registPhoto, setRegistPhoto] = useState(
        {
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
                    image : registPhoto.detail.image
                }; 
                break;    

        }
        setRegistPhoto(
            {
                ...registPhoto,
                [name] : value
            }
        );
    }


    const fileChangeHandler = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        setRegistPhoto(
            {
            ...registPhoto,
            detail : {
                description: registPhoto.detail.description,
                image: base64
            }
   
        }
    );
 }

 const convertBase64 = (file) => {
    return new Promise((resolve, reject)=>{
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

        if(result.regist){
            alert('등록 완료!')
            navigate(`/photokey`)
        }
    },
    [result]
 );

 const onClickHandler = () => {
    dispatch(callRegistPhotoAPI(registPhoto));
 }
    return(

        <> 
        <div className={styles.regist_title}>
        <h4>포토갤러리</h4>
        </div>

        <div className={styles.regist}>
        
        <input type="text" placeholder='제목을 입력하세요' 
            name ="title" valu ={registPhoto.title} onChange={ onChangeHandler }/>
        <br/>
            
        <textarea name='description' value = { registPhoto.detail.description} onChange={ onChangeHandler}/>
        <br/>
        <input 
            type="file"
            name="image"
            accept='image/*'
            onChange={ fileChangeHandler}/>
        <br/> 
        <button onClick={ onClickHandler }> 등록 </button>
        </div>   

        </>
    );


}

export default PhotoRegistForm;