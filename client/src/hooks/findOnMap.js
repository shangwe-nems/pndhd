import { useState, useEffect } from "react";
import datas from '../helpers/landmineDatas'

export const FindOnMap = selectedMine => {
    const [Coordinates, setCoordinates] = useState({ lat: 20.678557, lng: -11.89103,defaultZoom:7 });
    
    useEffect(() => {
        
        const dataFound = datas.filter((item) => item.Num === selectedMine);
        console.log(dataFound)
        setCoordinates({lat:dataFound.DS_Latitude, lng:dataFound.DS_Longitude,defaultZoom:10})

    }, [selectedMine]);
    
    return Coordinates;
}

