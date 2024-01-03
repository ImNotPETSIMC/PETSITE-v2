import axios from "axios";

export const fetchData = async (route : string, params? : any) => {
    return axios
        .get(process.env.NEXT_PUBLIC_API_URL + route, {params: params})
        .then(response => response.data.data)
};