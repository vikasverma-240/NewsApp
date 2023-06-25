import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor() {
    super();
    console.log("Hello I am a constroctor for this news components")
    this.state = {
      articles: [],
      loading: false
    }
  }

  async componentDidMount(){
    console.log("cmd");
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e60750c2775642ce8dc207e4db44e205&page=1";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles : parsedData.articles});
  }

  render() {
    console.log("render")
    return (
      <div className='container my-3'>
        <h2 className='mb-3'>E-NEWS - Top Headlines based on Us news!</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title?element.title.slice(0, 44):""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}

        </div>

      </div>
    )
  }
}

export default News
