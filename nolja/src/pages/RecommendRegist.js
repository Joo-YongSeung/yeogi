import { Navigate } from "react-router-dom";
import RecommendRegistForm from '../components/form/RecommendRegistForm';

function RecommendRegist() {

    const loginStatus = !!localStorage.getItem('isLogin');

    if(!loginStatus){
        return <Navigate to="/login" replace={true}/>
    }

    return (
        <>
            <h1>추천글 등록 화면</h1>
            <RecommendRegistForm/>
        </>
    );

}

export default RecommendRegist;