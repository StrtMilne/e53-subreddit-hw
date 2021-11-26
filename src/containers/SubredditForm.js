import React, {useState} from "react";

const SubredditForm = ({addSubreddit}) => {

    const [newSubreddit, setNewSubreddit] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        addSubreddit(event.target.subreddit.value);
        event.target.subreddit.value="";
    }

    return(
        <form onSubmit={handleSubmit}>
            <label name="subreddit"/>
            <input type="text" name="subreddit" placeholder="Enter subreddit to add"></input>
            <button type="submit">Add</button>
        </form>
    )
}

export default SubredditForm;