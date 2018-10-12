import React, {Component} from 'react';
import { Button } from 'reactstrap';


class DisplayArticle extends Component {
    render() {
        return (
            <div className="cardsPhone">
                <h4>{this.props.article.article}</h4>
                <img src={this.props.article.img} width={"200px"} alt="#"/>
                <p>{this.props.article.prix } Euros</p>
                <Button
                    onClick={(article)=>this.props.addArticle(article)}
                    color="primary">
                    Commander
                </Button>
            </div>
        );
    }
}

export default DisplayArticle;