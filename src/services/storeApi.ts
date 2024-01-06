import axios, { AxiosInstance, AxiosResponse } from 'axios'

interface Rating {
    rate : number, 
    count : number
}

export interface Product {
    category: string,
    description: string,
    id: number,
    image: string,
    price: number, 
    rating: Rating,
    title: string 
}

const storeApi = () => {
    const instance : AxiosInstance = axios.create({
        baseURL: 'https://fakestoreapi.com'
    })
    return {
        async getProductCards() : Promise<Product[]> {
            const cards : AxiosResponse<Product[]> = await instance.get<Product[]>('/products')
            return cards.data 
        }
    }
}

export default storeApi 