import {createApi} from 'unsplash-js'

const unsplash = createApi({ accessKey: process.env.REACT_APP_UPSPLASH_KEY });

const getPhotos = async (query, page = 1) => {
    const data = await unsplash.search.getPhotos({
        query,
        page,
        perPage: 20
    })

    return data.response
}

export {
    getPhotos
}