import { FaTimes, FaEdit } from 'react-icons/fa';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import PropTypes from "prop-types";
import Card from "./shared/Card";

function FeedbackItem({item}) {
 
    const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
    

    return (
        <Card reverse={true}>
            <div className="num-display">{item.rating}</div>
            <button onClick={() => deleteFeedback(item.id) } className='close'><FaTimes /></button>
            <button onClick={() => editFeedback(item)} className='edit'><FaEdit /></button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default FeedbackItem;
