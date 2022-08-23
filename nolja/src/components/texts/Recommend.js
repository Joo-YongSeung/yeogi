import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { callGetRecommendAPI } from '../../apis/RecommendAPICalls';

function Recommend({ id }){

    const result = useSelector( state => state.recommendReducer);
    const recommend = result.recommend;
    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(callGetRecommendAPI(id));
        },
        []
    );

    return (
        recommend && (
            <>
                <h3>추천글 제목 : {recommend.recommendTitle}</h3>
                <h3>추천글 본문 : {recommend.detail.description}</h3>
            </>
        )
    );

}

export default Recommend;