import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
    // search () {
    //     return(
    //         <button className = "btn btn-lg btn-success mr-3 ml-auto">
    //             Search Books
    //         </button>
    //     )
    // }

    // saved () {
    //     return(
    //         <button className = "btn btn-lg btn-success ml-3 mr-auto">
    //             Saved Books
    //         </button>
    //     )
    // }

    render(){
        return(
            <div className = "jumbotron container mb-4 text-center text-success">
                <div className = "row text-center">
                    <h1 className = "col-12 mb-3">
                        <strong>Google Books Search!</strong>
                    </h1>
                    <div className = "text-center container-fluid">
                        <Link to = "/">
                            <button className = "btn btn-success mr-3 ml-auto">
                                Search Books
                            </button>
                            {/* {this.search()} */}
                        </Link>
                        <Link to = "/saved">
                            <button className = "btn btn-success ml-3 mr-auto">
                                Saved Books
                            </button>
                            {/* {this.saved()} */}
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;