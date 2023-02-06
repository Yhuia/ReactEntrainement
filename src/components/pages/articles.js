import { Component } from 'react';
import './articles.css';

import Article from '../../Containers/article/article';
import Categorie from '../../Containers/Categorie/Categorie';


class Articles extends Component {
    render() {
        return (
        <div>
            <Categorie/>
            <div className='ArticlesContainer'> 
            <Article category='Pizza' />
            </div>
        </div>

    )}
    
}

export default Articles;