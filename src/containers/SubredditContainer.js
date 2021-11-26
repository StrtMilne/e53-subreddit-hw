import React, {useState, useEffect} from "react";
import ItemsList from "../components/ItemsList";

const SubredditContainer = () => {

    const [items, setItems] = useState([]);

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
        fetch("https://www.reddit.com/r/javascript.json")
            .then(res => res.json())
            .then(items => items.data.children)
            .then(array => sortByScore(array))
            .then(stories => setItems(stories));
    }

    useEffect(() => {
        getItems();
    }, [])

    return(
        <>
            <h1>Subreddit: </h1>
            <ItemsList items={items}/>
        </>
    )
}

export default SubredditContainer;