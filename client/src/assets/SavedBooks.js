import React from 'react';
// import Results from './Results'
import $ from 'jquery';

let list = []
class SavedBooks extends React.Component {
    state = {
        saved: list,
    }
    componentDidMount(){
        $.get('/api/books', (data) => {
            console.log(data)
            list = data.map((x) =>{
                return(
                    <li className = "listedItem row" key = {x.id}>
                    <div className = "col-2">
                        <img alt = {x.title} src = {x.image} />
                    </div>
                    <div className = "col-10">
                        <div className = "d-inline-flex">
                            <h3>{x.title}</h3>
                            <button 
                                className = "saveBtn btn btn-sm btn-success" 
                                onClick = {event => this.deleter(event)}
                                ident = {x.id}
                                title = {x.title}
                                author = {x.author}
                                image = {x.image}
                                desc = {x.description}>Delete Book!</button>
                        </div>
                        <p><em>By: {x.author}</em></p>
                        <p>{x.description}</p>
                    </div>
                </li>
                )
            })
            this.setState({
                saved: list
            });
        })
    }
    deleter(e){
        const btn = e.target;
        var ident= $(btn).attr('ident');
        $.ajax({
            url:'/api/books/' + ident,
            type: 'DELETE',
            success: (response) => console.log("Deleted" + response),
            fail:(response) => console.log("Uh oh..." + response)
        })
        // $.delete('/api/books/' + ident, ident, (data) =>console.log(data))
        //call to delete book
    }

    render(){
        return(
            <div className = 'container'>
                <h2>Saved Books:</h2>
                <ul className = "listedItems row">
                    {this.state.saved}
                </ul>
            </div>
        )
    }
}

export default SavedBooks;