const environments = {
    development: {
        BASE_URL: "https://newsapi.org/v2/top-headlines",
        API_KEY: "b9a2923947448b7ba22b48bc573f2e2"
    }
};
export default environments[process.env.REACT_APP_ENV] ||
    environments[Object.keys(environments[0])];
