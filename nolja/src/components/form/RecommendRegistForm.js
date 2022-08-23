import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { callRegistRecommendAPI } from '../../apis/RecommendAPICalls';
import styles from './Form.module.css'

function RecommendRegistForm() {

    const result = useSelector(state => state.recommendReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [registRecommend, setRegistRecommend] = useState(
        {
            id: 0,
            recommendTitle: '',
            detail : {
                description : ''
            }
        }
    );

    const onChangeHandler = (e) => {
        let title = e.target.name;
        let value = e.target.value;

        switch(title) {
            case 'description' :
                title = 'detail';
                value = {
                    description : value
                };
                break;
        }

        setRegistRecommend(
            {
                ...registRecommend,
                [title] : value
            }
        );

    }

    useEffect(
        () => {
            if(result.regist) {
                alert('추천글 작성');
                navigate(`/recommend`);
            }
        },
        [result]
    );

    const onClickHandler = () => {
        dispatch(callRegistRecommendAPI(registRecommend));
    }

    return(
        <>
            <div className={styles.regist_title}>
            <label>등록할 추천글 제목 : </label>
            <input type="text" placeholder='제목을 입력하세요' 
            name="recommendTitle" value={ registRecommend.recommendTitle } onChange={ onChangeHandler } />
            <br/>
            <label>등록할 추천글 내용 : </label>
            <textarea name="description" value={registRecommend.detail.description } onChange={ onChangeHandler }/>
            <br/>
            <button onClick={ onClickHandler }>추천글 등록</button>
            </div>
        </>
    );

}

export default RecommendRegistForm;