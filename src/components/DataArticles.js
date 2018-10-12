import React, {Component} from 'react';
import Articles from "../data/Articles"
import DisplayArticle from "./DisplayArticle";

class DataArticles extends Component {
    constructor(props){
        super(props);
        this.state = {
            articles:[...Articles]
        };
    }

    render() {
        return (
            <div className="Phone">
                {
                    this.state.articles.map((article,id) => {
                        return <DisplayArticle
                            key={id}
                            article={article}
                            addArticle={() => this.props.addArticle(article) }

                        />
                    })
                }
            </div>
        );
    }
}

export default DataArticles;