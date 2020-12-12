const axios = require('axios');

const getClima = async(lat, lng) => {   

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=ed9b425492de63015ec1808ebc4de2db&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}