import Axios from 'axios';
const url = "https://api.covid19india.org/data.json";

export const fetchDataFromGlobal = async () => {
    try {
        const {data} = await Axios.get(url);
            const modifiedDataFromIndian = {
            confirmed: data.statewise.confirmed,
            active: data.statewise.active,
            recovered: data.statewise.recovered,
            deaths: data.statewise.deaths
        }
        return modifiedDataFromIndian;

    } catch (error) {
        return error
    }
}