import React from "react";
import axios from "axios";


// 1. application is going to render 

class App extends React.Component{
  state = {
    // this is the place where we put the data which will be changed.  ex ) count: 0

    //2. in the beginning isLoading is true 

    isLoading: true,
    movies:[]
  };
  //async = this function is async now it tells JS "you need to wait for it"
  // 5. after mount get movie execute axios.get however, it take a time to get big json file data. so we put await
  getMovies = async () => {
    const {
      data: {
        data: {movies}
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    // await tell wait axiout.get is finished then continue function 
    //console.log({movies})
    // 6. put data we want to movie[]
    this.setState({movies, isLoading:false})
  };

  //4. after the application is mount we call the this.getMovie() immediately
  componentDidMount() {
    this.getMovies();
  }
  render(){
    const { isLoading } = this.state;
    // 3. so we going to see "Loading.."
    return <div>{isLoading ? "Loading.." : "We are ready"}</div>
  }
}

export default App; 