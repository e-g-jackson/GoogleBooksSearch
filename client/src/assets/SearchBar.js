import React from "react";
import Results from "./Results"
import $ from "jquery";

let list;

class SearchBar extends React.Component {
    
    state = {
        txtInput: "",
        results: ""
    }

    handleChange = (event) => {
        const newSearch = event.target.value;
        this.setState({
            txtInput:newSearch
        });
    };

    search = () => {
        const search = $("#bookSearch").val().trim();
        $.get("https://www.googleapis.com/books/v1/volumes?q=" + search, function (data) {
            list = data.items;
        }, "json").done(() => {
            this.setState({results: list})
        }).fail(() => alert('Something went wrong, try again!'))
    }
    
    saveBook(click) {
        const btn = click.target;
        const bookData = {
            id: $(btn).attr("ident"),
            title: $(btn).attr("title"),
            author: $(btn).attr("author"),
            image: $(btn).attr("image"),
            description: $(btn).attr("desc")
        };
        $.post(window.location.href + "./api/books", bookData, (response) => {
            console.log(response);
        })
    }

    render = () => {
        // console.log(this.state.results)
        return(
            <div>
                {/* SearchBar */}
                <div className = "container border-top border-bottom border-success">
                    <div className = "row py-4">
                        <div className = "col-1">
                            <h3>Search:</h3>
                        </div>
                        <div className = "col-1"></div>
                        <div className = "col-8">
                            <input 
                                id = "bookSearch" 
                                type = "text" 
                                placeholder = "Search by Book Name or Author here!" 
                                onChange = {event => this.handleChange(event)} 
                            />
                        </div>
                        <div className = "col-1"></div>
                        <div className = "col-1">
                            <button id = "SearchBtn"
                                className = "btn btn-md btn-success"
                                onClick = {() => {this.search()}}>Search!</button>
                        </div>
                    </div>
                </div>

                {/* Results */}
                <Results 
                    data = {this.state.results}
                    saver = {(event) => this.saveBook(event)}
                    />
            </div>
        )
    }
}


export default SearchBar