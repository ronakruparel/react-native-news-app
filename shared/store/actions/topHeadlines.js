import { GET_HEADLINES } from "../constants";
//import environments from "../../../environments";
export const getTopHeadlines = () => {
    return {
        type: GET_HEADLINES,
        promise: client =>
            client.get(
                "https://newsapi.org/v2/top-headlines?country=us&apiKey=bb9a2923947448b7ba22b48bc573f2e2"
            )
    };
};
