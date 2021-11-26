import React from "react";
import Subreddit from "./Subreddit";

const SelectReddit = ({subreddits, setSelectedSubreddit}) => {

    const opts = subreddits.map((subreddit, index) => {
            return <Subreddit subreddit={subreddit} key={index}/>
        })

    const handleSelect = (event) => {
        setSelectedSubreddit(event.target.value);
    }

    return(
        <select onChange={handleSelect}>
            <option defaultValue disabled>--Select a subreddit--</option>
            {opts}
        </select>
    )
}

export default SelectReddit;