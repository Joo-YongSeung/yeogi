import { Link } from "react-router-dom";
import styles from './Items.module.css';

function ReviewText({ recommend }) {

    return (
        
        <Link to={`/review/${review.id}`}>
                <div className="reviewText">
                <h3>제목 : {review.reviewTitle}</h3>
            </div>
        </Link>
        
    );

}

export default ReviewText;