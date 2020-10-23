import axios from 'axios';
// axios is use to make API requiest

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let changeableUrl = url;

    if(country) {
        changeableUrl = `${url}/countries/${country}`;
    }
    try{
    // const { data } = await axios.get(url);

    // const modifieData = {
    //     confirmed: data.confirmed,
    //     recovered: data.recovered,
    //     deaths: data.deaths,
    //     lastUpdate: data.lastUpdate,
    // }

    // ANOTHER WAY
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);

        return { confirmed, recovered, deaths, lastUpdate };

    } catch(error) {
        console.log(error);
    }
}

export const featchDailyData = async ()=> {
    try {
        const {data} = await axios.get(`${url}/daily`);

        //console.log(data);
        const modifieData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));
        return modifieData;


    } catch (error) {

        console.log(error);
    }
}


export const fetchCountries = async () => {
    try {
        const { data: { countries }} = await axios.get(`${url}/countries`);
        //console.log(response);
        return countries.map((country) => country.name);

    } catch (error) {
        console.log(error);
    }
}

