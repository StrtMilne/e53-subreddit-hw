import React, {useState, useEffect} from "react";
import ItemsList from "../components/ItemsList";
import SelectReddit from "../components/SelectReddit";
import SubredditForm from "./SubredditForm";
import Graph from "../components/Graph";
import "./style.css"


const SubredditContainer = () => {

    const [items, setItems] = useState([]);
    const [subreddits, setSubreddits] = useState(["announcements"]);
    const [selectedSubreddit, setSelectedSubreddit] = useState("announcements")

    const addSubreddit = (subreddit) => {
        setSubreddits([...subreddits, subreddit]);
    }

    const sortByScore = function(array) {
        array.sort((firstElement, secondElement) => {
            let score1 = firstElement.data.score;
            let score2 = secondElement.data.score;
            if (score1 > score2) {
                return -1;
            } 
            if (score1 < score2) {
                return 1;
            }
            return 0;
        })
        return array;
    }

    const getItems = function() {
        fetch(`https://www.reddit.com/r/${selectedSubreddit}.json`)
            .then(res => res.json())
            .then(items => items.data.children)
            .then(array => sortByScore(array))
            .then(array => array.slice(0, 10))
            .then(stories => setItems(stories));
    }

    useEffect(() => {
        getItems();
    }, [selectedSubreddit])

    return(
        <>
            <h1><img src="http://svgur.com/i/2SL.svg"/>Subreddit: {selectedSubreddit}</h1>
            <SubredditForm addSubreddit={addSubreddit}/>
            <SelectReddit subreddits={subreddits} setSelectedSubreddit={setSelectedSubreddit}/>
            <h2>Top 10 stories</h2>
            <Graph items={items}/>
            <ItemsList items={items}/>
        </>
    )
}

export default SubredditContainer;