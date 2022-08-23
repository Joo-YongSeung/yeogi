import { Navigate } from "react-router-dom";
import RecommendModifyForm from '../components/form/RecommendModifyForm';

function RecommendModify() {

    const loginStatus = !!localStorage.getItem('isLogin');

    if(!loginStatus) {
        return <Navigate to="/login" replace={true}/>
    }

    return (
        <>
            <h1>추천글 수정 페이지</h1>
            <RecommendModifyForm/>
        </>
    );

}

export default RecommendModify;