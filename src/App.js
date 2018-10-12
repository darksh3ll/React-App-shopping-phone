import React, { Component } from 'react';
import './css/App.css';
// import Users from "./components/Users";
import DataArticles from "./components/DataArticles";
import Panier from "./components/Panier";


class App extends Component {
    constructor(props){
        super(props);
        this.state={
            listarticle:[]
        }
    }
    // Ajout article au panier
    addArticle(article){
        let currentAtricle = this.state.listarticle;
        currentAtricle.push(article);
        this.setState({lisarticle:currentAtricle});
    }
    deleteArticle(article){
        let currentAtricle = this.state.listarticle;
        const indexOfarticle=currentAtricle.indexOf(article);
        indexOfarticle.splice(indexOfarticle,1);
        this.setState({listarticle: currentAtricle})

    }
  render() {
        console.log(this.state.listarticle);
    return (
      <div className="App">
         <Panier article={this.state.listarticle}/>
          <DataArticles
              addArticle={(article)=>this.addArticle(article)}
          />
      </div>
    );
  }
}

export default App;
