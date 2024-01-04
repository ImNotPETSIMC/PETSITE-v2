import axios from "axios";

export const postData = async (route : string, content : any) => {
    return axios
        .post(process.env.NEXT_PUBLIC_API_URL + route, {data: content})
        .then(response => response.data.data)
};