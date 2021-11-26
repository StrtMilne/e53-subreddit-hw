import React from "react";
import Item from "./Item";

const ItemsList = ({items}) => {

    const itemNodes = items.map((item, index) => {
        return <Item item={item} key={index}/>
    });

    return(
        <ul>
            {itemNodes}
        </ul>
    )
}

export default ItemsList;