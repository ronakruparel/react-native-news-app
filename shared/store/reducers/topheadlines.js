import { GET_HEADLINES } from "../constants";
const initialState = {
    data: []
};

const topheadlines = (state = initialState, action) => {
    switch (action.type) {
        case GET_HEADLINES:
            return {
                ...state,
                data: action.payload.articles
            };

        default:
            return state;
    }
};
export default topheadlines;
