import React, {Component} from 'react';

class Panier extends Component {
    constructor(props){
        super(props);
        this.state = {
            articles:props.article
        }
    }
    render() {
        return (
            <div className="panier">
                {
                    this.state.articles.map((article,id) => {
                        return(
                            <div className="articlepanier">
                                <img src={article.img} width={"50px"} alt="#"/>
                                <h6 className="description">{article.article}</h6>
                                <p>{article.prix}</p>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Panier;