const initialState = {
    data: {}
};

const favourites = (state = initialState, action) => {
    switch (action.type) {
        case "GET_FAVOURITES":
            return state;
        default:
            return state;
    }
};
export default favourites;
