import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { callGetRecommendAPI } from '../../apis/RecommendAPICalls';

function Review({ id }){

    const result = useSelector( state => state.reviewReducer);
    const review = result.review;
    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(callGetReviewAPI(id));
        },
        []
    );

    return (
        review && (
            <>
                <h3>추천글 제목 : {review.reviewTitle}</h3>
                <h3>추천글 본문 : {review.detail.description}</h3>
            </>
        )
    );

}

export default Review;