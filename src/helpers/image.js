import axios from 'axios';
import { imageAPI } from 'constants/API';

export const getImages = async () => {
    try {
        const res = await axios.get(imageAPI);
        const { data } = res.data;

        return data.memes;
    } catch (err) {
        throw(err);
    }
}