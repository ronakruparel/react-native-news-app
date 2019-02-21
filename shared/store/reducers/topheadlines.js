const initialState = {
    data: {}
};

const topheadlines = (state = initialState, action) => {
    switch (action.type) {
        case "GET_HEADLINES":
            return state;

        default:
            return state;
    }
};
export default topheadlines;
