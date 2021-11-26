import React from "react";

const Item = ({item, url}) => {
    return(
        <li>
            <a href={item.data.url}>{item.data.title}</a>
            <br/>
            <p>Score: {item.data.score}</p>
            <br/>
            <p>Author: {item.data.author_fullname}</p>
        </li>
    )
}

export default Item;