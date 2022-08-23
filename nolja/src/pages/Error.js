import { Link } from 'react-router-dom';

function Error() {
    
    return (
        <>
            <h1 style="color:red;">404 Error!!! 당신은 경로를 이탈하였습니다!</h1>
            <Link to={'/'}>
                <span>HOME으로 돌아가기</span>
            </Link>
        </>
    );
}

export default Error;