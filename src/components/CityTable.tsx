//import useCities from "../scripts/useCities";
import useCityList from "../scripts/useCityList";
import React from "react";

const CityTable = () => {


  const { cityList, loading} = useCityList();

  if (loading) {
    return( 
      <p>Loading...</p>
    )
  }

  return (
    <div>
      {cityList.map((city: any) => {
        return <p>{city.city}</p>
      })}
    </div>
  )
}

export default CityTable
