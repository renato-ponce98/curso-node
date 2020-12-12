const axios = require('axios');

const getLugarLatLng = async(direccionJson) => {
    const encodeUrl = encodeURI(direccionJson);

    const instance = axios.create({
        baseURL: `http://api.positionstack.com/v1/forward?access_key=107bf1b479b0667d577b3b01f71e002a&query=${encodeUrl}`
    });

    const resp = await instance.get();

    if( resp.data.data.length === 0){
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = resp.data.data[0];
    const direccion = data.label;
    const lat = data.latitude;
    const lng = data.longitude;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}

