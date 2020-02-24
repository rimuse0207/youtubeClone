import React from "react";
import SearchBar from "./SearchBar";
import YTSearch from "youtube-api-search";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import "./style.css";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      select: ""
    };
    this.SerachTerm("surfboards");
  }

  SerachTerm = term => {
    YTSearch({ key: process.env.REACT_APP_YOUTUBE_KEY, term: term }, videos => {
      console.log(term);
      this.setState({ videos, select: videos[0] });
    });
  };

  render() {
    return (
      <div className="App">
        <SearchBar onSearchTerm={term => this.SerachTerm(term)}></SearchBar>

        <VideoDetail video={this.state.select}></VideoDetail>
        <VideoList
          onVideoSelect={select => this.setState({ select })}
          videos={this.state.videos}
        ></VideoList>
      </div>
    );
  }
}
