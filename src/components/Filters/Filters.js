import React from "react";
import CheckBox from "components/CheckBox";
// import OutlinedInput from '@material-ui/core/OutlinedInput';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import Select from '@material-ui/core/Select';
// import Checkbox from '@material-ui/core/Checkbox';
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
		// <React.Fragment>
		// 	<InputLabel>Countries</InputLabel>
		// 	<Select
		// 		onChange={ handleCheckBoxChange }
		// 		multiple
		// 		value={Object.values(filter)}
		// 		>
		// 		{Object.entries(countriesMapping).map((country) => (
		// 			<MenuItem key={country[0]} value={country[0]}>
		// 				<Checkbox checked={Object.keys(filter).indexOf(country[0]) > -1} />
		// 				<ListItemText primary={country[1]} />
		// 			</MenuItem>
		// 		))}
		// 	</Select>
		// </React.Fragment>
	)
}

export default Filters;