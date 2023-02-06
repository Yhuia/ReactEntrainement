import { Component } from "react";
import Article from "../article/article";

class Categorie extends Component {
    state = {
        itemsListing :[
        {CategorieA : 'Pizza', image : null},
        {CategorieA : 'Pate',image : null},
        ] 
    }
    render() {
        return (<div>
            <a href="#">
            {this.state.itemsListing[0].CategorieA}
            </a>
        </div>)
    }
}

export default Categorie;