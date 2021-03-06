import { v4 as uuidv4 } from 'uuid';
import { createContext, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: "This item is from context",
            rating: 7
        }
    ]);

    // Edit feedback
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    // delete feedback
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')){
            setFeedback(feedback.filter(item => item.id !== id));
        }
    }

    // add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback,  ...feedback]);   
    }

    // update feedback
    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => (item.id === id ? {...item, ...updItem} : item)))
    }

    return <FeedbackContext.Provider value={{
        feedback, feedbackEdit,
        deleteFeedback, addFeedback, editFeedback, updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;