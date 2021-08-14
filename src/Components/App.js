import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import youtube from '../Apis/youtube';
import SearchBar from './SearchBar/SearchBar';
import VideosList from './VideosList/VideosList';
import './App.css';
import VideoDetail from './VideoDetail/VideoDetail';
import GoogleV from './GoogleV';

const Load = () => <div className='text-shadow-pop-tl'>loading ...</div>;

class App extends Component {
  state = { videos: [], loading: false, selectedVideo: null };
  componentDidMount() {
    this.handelSearch('buildings')
  }
  handelSearch = async (term) => {
    const res = await youtube('/search', {
      q: term
    });

    this.setState({
      videos: res.data.items,
      selectedVideo: res.data.items[0],
      loading: true
    });
  }
  handelSelectedVideo = video => {
    this.setState({ selectedVideo: video });
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/'>
            <div className="ui container">
              <SearchBar onFormSearch={this.handelSearch} />
              <div>
                {this.state.loading ? `i have ${this.state.videos.length} videos.` : <Load />}
              </div>
              <div className="ui grid">
                <div className="ui row">
                  <div className="eleven wide column">
                    <VideoDetail video={this.state.selectedVideo} />
                  </div>
                  <div className="five wide column">
                    <VideosList onVideoSelect={this.handelSelectedVideo} videos={this.state.videos} />
                  </div>
                </div>
              </div>
            </div>
          </Route>
          <Route path='/google2d9648dfce7a486c.html'>
            <GoogleV />
          </Route>
        </Switch>
      </Router>
    );
  }
}
export default App;