import React from "react";

const Subreddit = (subreddit) => {
    return(
        <option value={subreddit.subreddit}>{subreddit.subreddit}</option>
    )
}

export default Subreddit;