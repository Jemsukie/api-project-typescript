import React from "react";

const Count = (props: any) => {
    return (
      <ul>
        {props.list.map((item: any, index: number) => {
          return (
            <li key={index}>
              <span className="name">
                {item.cityName}, {item.stateName}
                <>&nbsp;</>
              </span>
              <span className="population">{item.population}</span>
            </li>
          );
        })}
      </ul>
    );
  };
  
  export default Count;
  