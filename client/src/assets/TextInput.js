import React from "react"

function TextInput(){
    return(<div className = "container border-top border-bottom border-success">
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
</div>)
}