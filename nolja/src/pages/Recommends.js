import { useNavigate } from "react-router-dom";
import RecommendList from '../components/lists/RecommedList';
import styles from './Photo.module.css';

function Review() {
    const loginStatus = !!localStorage.getItem('isLogin');
    const navigate = useNavigate();

    return(
        <div className={styles.on}>
            <h1>추천지 목록</h1>

            <RecommendList/>

            {/* &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; */}


            { (loginStatus) && <button onClick={ () => navigate(`/recommend/regist`) }>추천글 작성</button> } 
            
            
        </div>
    );

}

export default Review;
