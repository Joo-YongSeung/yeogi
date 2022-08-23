import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { callGetRecommendListAPICalls } from '../../apis/RecommendAPICalls';
import RecommendText from '../texts/RecommendText';

function RecommedList() {

    const result = useSelector(state => state.recommendReducer);
    const recommendList = result.recommendlist;
    const dispatch = useDispatch();
    
    console.log(result);

    useEffect(
        () => {
            dispatch(callGetRecommendListAPICalls());
        },
        []
    );

    return (
        recommendList && (
            <div className='recommendBox'>
                { recommendList.map(recommend => <RecommendText key={recommend.id} recommend={ recommend }/>) }
            </div>
        )
    );

}

export default RecommedList;