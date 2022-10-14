import React from "react"
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"

const geoUrl =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"
const markers = [
    {
        markerOffset: -30,
        name: "Buenos Aires",
        coordinates: [-58.3816, -34.6037]
    },
    { markerOffset: 15, name: "La Paz", coordinates: [-68.1193, -16.4897] },
    { markerOffset: 15, name: "Brasilia", coordinates: [-47.8825, -15.7942] },
    { markerOffset: 15, name: "Santiago", coordinates: [-70.6693, -33.4489] },
    { markerOffset: 15, name: "Bogota", coordinates: [-74.0721, 4.711] },
    { markerOffset: 15, name: "Quito", coordinates: [-78.4678, -0.1807] },
    { markerOffset: -30, name: "Georgetown", coordinates: [-58.1551, 6.8013] },
    { markerOffset: -30, name: "Asuncion", coordinates: [-57.5759, -25.2637] },
    { markerOffset: 15, name: "Paramaribo", coordinates: [-55.2038, 5.852] },
    { markerOffset: 15, name: "Montevideo", coordinates: [-56.1645, -34.9011] },
    { markerOffset: 15, name: "Caracas", coordinates: [-66.9036, 10.4806] },
    { markerOffset: 15, name: "Lima", coordinates: [-77.0428, -12.0464] }
];
export default function MapChart() {
    return (
        <>
            <div className="h-full rounded-3xl border-2 border-gray-3  flex " >
                <div className="w-[89%] ">
                <h2 className="font-bold text-black pl-3 pt-3">Facilities</h2>
                <ComposableMap className="">
                    <Geographies geography={geoUrl}  >
                        {({ geographies }) =>
                            geographies.map((geo) => (
                                <Geography
                                    fill=" #ACC3E2"
                                    stroke="#ACC3E2"
                                    key={geo.rsmKey} geography={geo}
                                />
                            ))
                        }
                    </Geographies>

                    {markers.map(({ name, coordinates, markerOffset }) => (
                        <Marker key={name} coordinates={coordinates}>
                            <circle r={10} fill="#05B1F3" strokeWidth={2} />

                        </Marker>
                    ))}
                </ComposableMap>
                </div>
                <div className="border-l-2 border-gray-3 py-6  p-3 w-32">
                    <div className="my-5">
                        <h2 className="text-black-1 font-bold text-xs">Laboratories</h2>
                        <p className="text-blue-5 font-bold w-[50%] border-b-4 text-xs border-blue-5">200</p>
                    </div>
                    <div className="my-5">
                        <h2 className="text-black-1 font-bold text-xs">Laboratories</h2>
                        <p className="text-black font-bold w-[50%] text-xs border-b-4 border-black">200</p>
                    </div>
                    <div className="my-5">
                        <h2 className="text-black-1 font-bold text-xs">Laboratories</h2>
                        <p className="text-text-red-1 font-bold w-[50%] border-b-4 border-text-red-1 text-xs">200</p>
                    </div>
                    <div className="my-5">
                        <h2 className="text-black-1 font-bold text-xs">Laboratories</h2>
                        <p className="text-blue-5 font-bold w-[50%] border-b-4 border-blue-5 text-xs">200</p>
                    </div>

                </div>
            </div>
        </>
    )
}
