import React, { useState, useEffect } from "react";
// import CheckBox from "components/CheckBox";
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import * as S from "./style";


const Filters = ({countriesMapping, filter, setFilter, sortBy, setSortBy, sortByOptions}) => {
	// const handleCheckBoxChange = eventCountry =>{
	// setFilter( filter => {
	// 	!filter[eventCountry] ?
	// 	filter[eventCountry] = countriesMapping[eventCountry] :
	// 	delete filter[eventCountry]
	// 	return {...filter};
	// });
	// console.log(filter)
	// }
	const [reversedCountriesMapping, setReversedCountriesMapping] = useState({});
	const handleCheckBoxChange = e => {
		const newFilter = e.target.value;
		console.log(e.target.value)
		setFilter(newFilter);
	};
	const reverseKeyValue = obj => { //reverse key and value of an object
		const reversedObj = {};
		Object.entries(obj).forEach( entry => reversedObj[entry[1]] = entry[0]);
		return reversedObj;
	};
	useEffect(() => {
		// reverse mapping to display country instead of key
		setReversedCountriesMapping(reverseKeyValue(countriesMapping));
	}, []);

	return (
		// <S.Filters>
		// 	{Object.entries(countriesMapping).map( country =>
		// 	<CheckBox key={country[0]} value={country[0]} label={country[1]} 
		// 		onChange={ handleCheckBoxChange }/>
		// 	)}
		// </S.Filters>
		<S.Container>
			<S.FilterContainer>
				<FormControl variant="outlined">
					<InputLabel>Filter</InputLabel>
					<Select
						onChange={ handleCheckBoxChange }
						multiple
						value={filter}
						renderValue={filter => filter.map( countryKey => ` ${reversedCountriesMapping[countryKey]}`)}
						label="Filter"
						>
						{Object.entries(countriesMapping).map((country) => (
							<MenuItem key={country[1]} value={country[1]}>
								<Checkbox checked={filter.includes(country[1])} />
								<ListItemText primary={country[0]} />
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</S.FilterContainer>
			<S.SortContainer>
				<FormControl variant='outlined'>
					<InputLabel>SortBy</InputLabel>
					<Select
					onChange={ (e) => setSortBy(e.target.value) }
					value={sortBy}
					label='SortBy'
					>
					{sortByOptions.map( option => 
						<MenuItem key={option} value={option}>
							<ListItemText primary={option} />
						</MenuItem>
					)}
					</Select>
				</FormControl>
			</S.SortContainer>
		</S.Container>
	)
}

export default Filters;