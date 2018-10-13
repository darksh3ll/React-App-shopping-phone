import React, {Component, Fragment} from 'react';
class Panier extends Component {
    constructor(props){
        super(props);
        this.state = {
            articles:props.article
        }
    }
    render() {

        return (
            <Fragment>
                <div className="panier">
                    {
                        this.state.articles.map((article,id) => {
                            return(
                                <div className="articlepanier">
                                    <span>🗑</span>
                                    <img src={article.img} width={"50px"} alt="#"/>
                                    <h6 className="description">{article.article}</h6>
                                    <p>{article.prix + " " + "💰"}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </Fragment>

        );
    }
}


export default Panier;