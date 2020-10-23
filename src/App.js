import React from 'react';

// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';

import { Cards, Chart, CountryPicker } from './components';

import coronaImage from './images/covid.jpg';
import styles from './App.module.css';
import{ fetchData } from './api';

class App extends React.Component {
    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetcheData = await fetchData();

        //console.log(fetcheData);
        // populate Data
        this.setState({ data: fetcheData})
    }

    handleCountryChange = async (country) => {
        const fetcheData = await fetchData(country);

        // console.log(fetcheData);
        //console.log(country);
        //fetch the data
        this.setState({ data: fetcheData, country: country });
        //set the data

    }

    render() {
        const { data, country } = this.state;

        return (
            <div className ={styles.container}>
            <img className={styles.image} src={coronaImage} alt="COVID-19"></img>
            <Cards  data = {data} />
            <CountryPicker handleCountryChange={this.handleCountryChange} />
            <Chart data={data} country={country} />
            </div>
        )
    }
}

export default App;