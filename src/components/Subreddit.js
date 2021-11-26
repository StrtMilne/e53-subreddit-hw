import React from "react";
import SubredditForm from "../containers/SubredditForm";

const Subreddit = (subreddit) => {
    return(
        <option value={subreddit.subreddit}>{subreddit.subreddit}</option>
    )
}

export default Subreddit;