import React, {Component} from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import './App.css';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    // returns list of users at json placeholder
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> {return response.json();})
            .then(users => {this.setState({robots: users});})
        
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const {robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robots =>{
            return robots.name.toLowerCase().includes(searchfield.toLowerCase());
    })
        if (robots.length === 0) {
            return <h1>Loading</h1>
        }
        else{
        return(
            <div className='tc'>
              <h1 className='f1'>Robofriends</h1>
              <Searchbox searchChange = {this.onSearchChange}/>
              <Scroll>
              <CardList robots={filteredRobots}/>
              </Scroll>
            </div>

        );
    }
}
}

export default App;