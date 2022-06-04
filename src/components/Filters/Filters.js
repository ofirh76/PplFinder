import React, { useState, useEffect } from "react";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import * as S from "./style";


const Filters = ({countriesMapping, sortByOptions, dispatch, users}) => {
	const [reversedCountriesMapping, setReversedCountriesMapping] = useState({});
	const [filter, setFilter] = useState([]);
  const [sortBy, setSortBy] = useState('');

	const handleCheckBoxChange = e => {
		dispatch({type: 'filter', payload: {filter: e.target.value, users}});
		sortBy && dispatch({type: 'sort', payload: {sortBy: sortBy}}); //apply sort after userList update
		setFilter(e.target.value);
	};
	const handleSortBy = e => {
		dispatch({type: 'sort', payload: {sortBy: e.target.value}});
		setSortBy(e.target.value);
	}
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
		<S.Container>
			<S.FormControl variant="outlined">
				<InputLabel>Filter</InputLabel>
				<S.Select
					onChange={ handleCheckBoxChange }
					multiple
					value={filter}
					renderValue={filter => filter.map( countryKey => ` ${reversedCountriesMapping[countryKey]}`)}
					label="Filter"
					MenuProps={{variant:'menu'}} // fix for jumpy menu
					>
					{Object.entries(countriesMapping).map((country) => (
						<MenuItem key={country[1]} value={country[1]}>
							<Checkbox checked={filter.includes(country[1])} />
							<ListItemText primary={country[0]} />
						</MenuItem>
					))}
				</S.Select>
			</S.FormControl>
			<S.FormControl variant='outlined'>
				<InputLabel>SortBy</InputLabel>
				<S.Select
				onChange={ handleSortBy }
				value={sortBy}
				renderValue={sortBy => sortBy[0].toUpperCase()+sortBy.slice(1)}
				label='SortBy'
				>
				{sortByOptions.map( option => 
					<MenuItem key={option} value={option}>
						<ListItemText primary={option[0].toUpperCase()+option.slice(1)} />
					</MenuItem>
				)}
				</S.Select>
			</S.FormControl>
		</S.Container>
	)
}

export default Filters;