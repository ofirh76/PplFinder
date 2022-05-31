import React from "react";
import CheckBox from "components/CheckBox";
import * as S from "./style";


const Filters = ({countriesMapping, filter, setFilter}) => {
	const handleCheckBoxChange = eventCountry =>{
	setFilter( filter => {
		!filter[eventCountry] ?
		filter[eventCountry] = countriesMapping[eventCountry] :
		delete filter[eventCountry]
		return {...filter};
	});
	console.log(filter)
	}
	return (
		<S.Filters>
			{Object.entries(countriesMapping).map( country =>
			<CheckBox key={country[0]} value={country[0]} label={country[1]} 
				onChange={ handleCheckBoxChange }/>
			)}
		</S.Filters>
	)
}

export default Filters;