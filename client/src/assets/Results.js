import React from "react";

class Results extends React.Component {

    manageData (list) {
        console.log(list);
        const listItems = []
        for (var i = 0; i < list.length; i++){
            const obj = {
                id: list[i].id,
                title: list[i].volumeInfo.title,
                author: list[i].volumeInfo.authors[0],
                image: list[i].volumeInfo.imageLinks.thumbnail,
                description: list[i].volumeInfo.description,
            }
            listItems.push(obj)
        };
        console.log(listItems)
        return listItems;
    }

    render() {
        const list = this.manageData(this.props.data);
        
        const listedItems = list.map((x)=> 
            <li className = "listedItem row" key = {x.id}>
                <div className = "col-2">
                    <img alt = {x.title} src = {x.image} />
                </div>
                <div className = "col-10">
                    <div className = "d-inline">
                        <h3>{x.title}</h3>
                        <button 
                            className = "saveBtn btn btn-sm btn-success float-right" 
                            onClick = {(event) => this.props.saver(event)}
                            ident = {x.id}
                            title = {x.title}
                            author = {x.author}
                            image = {x.image}
                            desc = {x.description}>Save Book!</button>
                    </div>
                    <p><em>By: {x.author}</em></p>
                    <p>{x.description}</p>
                </div>
            </li>
        )

        return(
            <ul className = "container">
                {listedItems}
            </ul>
        )
    }
}

export default Results;