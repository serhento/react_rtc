import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

const DOGS_API_KEY = 'cbfb51a2-84b6-4025-a3e2-ed8616edf311'

type BreedType = {
    id: string,
    name: string,
    image: {
        url: string
    }
}

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.thedogapi.com/v1',
        prepareHeaders(headers){
            headers.set('x-api-key', DOGS_API_KEY)
            return headers
        }
    }),
    endpoints(builder){
        return{
            fetchBreeds: builder.query<BreedType[], number | void>({
                query(limit = 5){
                    return `/breeds?limit=${limit}`
                }
            })
        }
    }
})

export const {useFetchBreedsQuery} = apiSlice