import axios from "axios";

export const getFavorites = async () => {
    try {
        const favorites = await axios.get('/favorites');
        return favorites
    } catch (error) {
        console.log(error)
    }
}

export const addFavorite = async (playerId) => {
    try {
        const newFavorite = await axios.post(`/favorites/${playerId}`);
        return newFavorite;
    } catch (error) {
        console.log(error)
    }
}

export const removeFavorite = async (playerId) => {
    try {
        await axios.delete(`/favorites/${playerId}`);
    } catch (error) {
        console.log(error)
    }
}