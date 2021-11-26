import React from "react";

const Item = ({item}) => {

    const imageUrl = () => {
        if (item.data.hasOwnProperty("thumbnail") && item.data.thumbnail != "self" && item.data.thumbnail != "spoiler" && item.data.thumbnail != "default"){
            return item.data.thumbnail
        } else {
            return "https://cdn.iconscout.com/icon/free/png-256/reddit-74-434748.png"
        }
    }
    return(
        <li>
            <p>
                <img className="thumbnail" src={imageUrl()}/>
            </p>
            <p>
                <img className="arrow" src="https://www.pinclipart.com/picdir/big/36-362800_when-cruising-t-d-use-this-handy-trick.png"/> 
                {item.data.score}
            </p>
            <section>            
                <a href={item.data.url}>{item.data.title}</a>
                <br/>
                <p className="author">Author: {item.data.author}</p>
            </section>
        </li>
    )
}

export default Item;