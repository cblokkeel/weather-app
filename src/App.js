import React, { Component } from 'react'
import Footer from './component/Footer/Footer'
import SearchBox from './component/SearchBox/SearchBox'
import Title from './component/Title/Title'
import Weather from './component/Weather/Weather'
import './styles/App.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            inputValue: '',
            gaveCity: false,
            city: '',
            temp: '',
            country: ''
        }
    }

    handleChange = e => {
        this.setState({ inputValue: e.target.value })
    }

    getData = async () => {
        try {
            const res = await fetch(`https://sleepy-fjord-31986.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=${this.state.inputValue}&appid=dbffa0e2aaf81af73f48577380cdf39d&units=metric`, {
                headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                }
            })
            const data = await res.json()
            console.log(data)
            this.setState({city: data.name, temp: data.main.temp, country: data.sys.country})
        } catch (err) {
            console.log('error happened', err)
        }
    }

    onGiveCity = e => {
        this.setState({gaveCity: true})
        this.getData()
    }

    handleSubmit = e => {
        if (e.key === 'Enter') {
            this.onGiveCity()
            e.target.value = ''
        }
    }

    render() {
        return (
        <div className="App">
            <Title />
            <SearchBox onChange={this.handleChange}  onSubmit={this.handleSubmit} handleClear={this.handleClear}/>
            <Weather city={this.state.city} temp={this.state.temp ? `${this.state.temp} °C` : this.state.temp}/>
            <Footer />
        </div>
        )
    }
}

export default App;
