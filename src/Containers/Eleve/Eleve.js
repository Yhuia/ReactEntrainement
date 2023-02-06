import React, {Component} from 'react';
import './Eleve.css';
class Eleve extends Component {
    state = {
        eleves : [
         {nom:'Eva Dupont', moyenne:15, citation:'Allée toujours plus loin'},
         {nom:'Timothée Galo', moyenne:5}   
        ]
    }
    buttonClickedHandler = () =>{
        this.setState({
            eleves : [
                {nom:'Bob', moyenne:15, citation:'Allée toujours plus loin'},
                {nom:'Timothée Galo', moyenne:5}   
               ]
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.buttonClickedHandler}>changer le prenom</button>
                <div className='eleve'>
                    <h3> {this.state.eleves[1].nom}</h3>
                    <p>{this.state.eleves[1].moyenne}</p>
                    <p>{this.state.eleves[1].citation}</p>
                    <i>Age : {Math.floor(Math.random()*100)}</i>
                </div>
               
            </div>
        )
    }

}

export default Eleve; 