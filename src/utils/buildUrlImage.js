const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p';

export const buildUrlImage = (path, size = 'w342') => {
    if (!path) {
        return 'https://via.placeholder.com/342x513?text=Sin+Imagen';
    }

    return `${BASE_IMAGE_URL}/${size}${path}`;
}