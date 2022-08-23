import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { callModifyRecommendAPI } from '../../apis/RecommendAPICalls';
import styles from './Form.module.css'

function RecommendModifyFomr() {

    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const result = useSelector(state => state.recommendReducer);

    const [modifyRecommend, setModifyRecommend] = useState(
        {
            id: 0,
            recommendTitle: '',
            detail : {
                description: ''
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

        setModifyRecommend(
            {
                ...modifyRecommend,
                id : id,
                [title] : value
            }
        );
    }

    useEffect(
        () => {
            if(result.modify) {
                alert('작성글 수정');
                navigate(`/recommend`);
            }
        },
        [result]
    );

    const onClickHandler = () => {
        dispatch(callModifyRecommendAPI(modifyRecommend));
    }

    return (
        <>
            <div className={styles.regist_title}>
                <h1>{id}번째 추천글 수정</h1>
            <br/>
            </div>
            <div className={styles.modify}>
                <label>등록할 추천글 제목 : </label>
                <input type="text" name="recommendTitle" value={ modifyRecommend.recommendTitle } onChange={ onChangeHandler } /> 
                <br/>
                <label>등록할 추천글 내용 : </label>
                <textarea name="description" value={modifyRecommend.detail.description} onChange={ onChangeHandler }></textarea>
                <br/>
                <button onClick={onClickHandler}>추천글 수정</button>
            </div>
        </>
    );

}

export default RecommendModifyFomr;