const api_key = "f99bbd9e4959b513e9bd0d7f7356b38d";

const getAPIEndPoint =  (type, city)=> (
    `http://api.openweathermap.org/data/2.5/${type}?q=${city}&APPID=${api_key}`
)

export default getAPIEndPoint;
