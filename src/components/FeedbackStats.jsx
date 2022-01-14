import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {

    const { feedback } = useContext(FeedbackContext);

    // calculate ratings average
    let average = feedback.reduce((acc, cur)=>{
        return acc + cur.rating;
    }, 0) / feedback.length;

    // to limit it to one decimal place
    average.toFixed(1)

    
    return (
        <div className="feedback-stats">
            <h4>Total Number of feedbacks: {feedback.length}</h4>
            <h4>Average Feedback Rating: {isNaN(average) ? 0 : average}</h4>
        </div>
    )
}

export default FeedbackStats;
