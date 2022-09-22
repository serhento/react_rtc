import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

//const DOGS_API_KEY = 'cbfb51a2-84b6-4025-a3e2-ed8616edf311'

type PhotosType = {
    albumId: string,
    id: string
    title: string,
    url: string,
    thumbnailUrl: string
}

export const photosApiSlice = createApi({
    reducerPath: 'photos',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/photos',
        // prepareHeaders(headers){
        //     headers.set('x-api-key', DOGS_API_KEY)
        //     return headers
        // }
    }),
    endpoints(builder){
        return{
            fetchPhotos: builder.query<PhotosType[], number | void>({
                query(limit = 5){
                    return `?_limit=${limit}`
                }
            })
        }
    }
})

export const {useFetchPhotosQuery} = photosApiSlice