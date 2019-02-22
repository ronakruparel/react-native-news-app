import Config from "react-native-config";
const environments = {
    development: {
        BASE_URL: Config.API_URL,
        API_KEY: Config.API_KEY
    }
};
export default environments[process.env.REACT_APP_ENV] ||
    environments[Object.keys(environments[0])];
