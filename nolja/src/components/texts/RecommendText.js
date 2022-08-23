import { Link } from "react-router-dom";
import styles from './Items.module.css';

function RecommendText({ recommend }) {

    return (
        
        <Link to={`/recommend/${recommend.id}`}>
                <div className="recommendText">
                <h3>제목 : {recommend.recommendTitle}</h3>
            </div>
        </Link>
        
    );

}

export default RecommendText;