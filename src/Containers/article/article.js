import React, {Component} from "react";
import './article.css';
import imagePatate from './image/imageFoodDefault.jpg';

class Article extends Component{
    state = {
        fakeDate  : [
            {nom: "Sac de patate", prix : "10€", image : {imagePatate}},
            {nom: "Biscuit", prix : "2,50€", image : {imagePatate}}
        ]
    }
    render() {
        return <div className="blockArticle"> 
            <div>
                <h3>{this.state.fakeDate[0].nom}</h3>
                <p>{this.state.fakeDate[0].prix}</p>
                <img className="imageArticle" src={imagePatate}/>
            </div> 
            <button>En Savoir plus !</button>
            
        </div>
    }

}

export default Article;