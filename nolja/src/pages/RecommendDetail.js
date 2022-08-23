import Recommend from "../components/texts/Recommend";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { callDeleteRecommendAPI } from '../apis/RecommendAPICalls';
import { useEffect } from "react";
import styles from './Photo.module.css'

function RecommendDetail() {
    const loginStatus = !!localStorage.getItem('isLogin');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {id} = useParams();
    const result = useSelector(state => state.recommendReducer);

    const updateHandler = () => navigate(`/recommend/modify/${id}`);
    const deleteHandler = () => dispatch(callDeleteRecommendAPI(id));

    useEffect(
        () => {
            if (result.delete) {
                alert('추천글 삭제');
                navigate(`/recommend`);
            }
        },
        [result]
    );

    return (
        <div className={styles.button}>
            <h1>추천글 보기</h1>
            <h1>
                { (loginStatus) && <button onClick={updateHandler}>추천글 수정</button> }  
                { (loginStatus) && <button onClick={deleteHandler}>추천글 삭제</button> }
            </h1>
            <Recommend id={id}/>
        </div>
    );

}

export default RecommendDetail;