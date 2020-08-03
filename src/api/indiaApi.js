import Axios from "axios";

const url = "https://api.covid19india.org/state_district_wise.json";

export const fetchDataFromIndia = async () => {

    try {
        const {data} = await Axios.get(url);
        const modifiedDataFromIndian = {
            confirmed: data.Maharashtra.districtData.Mumbai.confirmed,
            active: data.Maharashtra.districtData.Mumbai.active,
            recovered: data.Maharashtra.districtData.Mumbai.recovered,
            deceased: data.Maharashtra.districtData.Mumbai.deceased
        }
        return modifiedDataFromIndian;
    } catch (error) {
        return error;
    }
}