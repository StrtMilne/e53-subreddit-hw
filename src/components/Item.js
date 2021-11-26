import React from "react";

const Item = ({item}) => {

    const imageUrl = () => {
        if (item.data.hasOwnProperty("thumbnail") && item.data.thumbnail != "self" && item.data.thumbnail != "spoiler" && item.data.thumbnail != "default" && item.data.thumbnail != "spoiler" && item.data.thumbnail != "nsfw"){
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
            <p className="glow">
                <img className="arrow" src="https://www.pinclipart.com/picdir/big/36-362800_when-cruising-t-d-use-this-handy-trick.png"/> 
                {item.data.score}
            </p>
            <section>            
                <a href={item.data.url} className="title">{item.data.title}</a>
                <br/>
                <p className="author">Author:<b>{item.data.author}</b></p>
            </section>
        </li>
    )
}

export default Item;