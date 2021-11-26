import React from "react";
import Subreddit from "./Subreddit";

const SelectReddit = ({subreddits}) => {

    const opts = subreddits.map((subreddit, index) => {
            return <Subreddit subreddit={subreddit} key={index}/>
        })

    return(
        <select>
            <option defaultValue disabled>--Select a subreddit--</option>
            {opts}
        </select>
    )
}

export default SelectReddit;