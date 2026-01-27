import {apiInstanceMovie} from "../http/api.instance.movie.js";

export const ApiMovie = {
    getMovies(page = 1) {
        return apiInstanceMovie.get('/movie/popular', {
            params: { page: page }
        })
    }
}
