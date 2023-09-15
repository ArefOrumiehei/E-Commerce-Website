import axios from "axios";

const BASE_URL = 'https://fakestoreapi.com'

export const getProducts = async () => {
    let response = await axios.get(`${BASE_URL}/products`)
    return response.data
}