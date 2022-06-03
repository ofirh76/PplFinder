import React, { useState, useEffect } from "react";
import Text from "components/Text";
import Spinner from "components/Spinner";
import Filters from "components/Filters";
import List from "components/List";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useLocalStorage } from "hooks/useLocalStorage";
import * as S from "./style";

// const countriesMapping = {
//   "BR": "Brazil",
//   "AU": "Australia",
//   "CA": "Canada",
//   "DE": "Germany",
//   "NL": "Netherlands"
// }

const countriesMapping = {
  "Brazil": "BR",
  "Australia": "AU",
  "Canada": "CA",
  "Germany": "DE",
  "Netherlands": "NL"
}

const sortByOptions = [
  'name',
  'email',
  'country',
  'city'
]

// const sortFunc = (cardNext, card) => 
//   cardNext[props.sortBy].toLowerCase() > card[props.sortBy].toLowerCase() ? 1
//   : cardNext[props.sortBy].toLowerCase() < card[props.sortBy].toLowerCase() ? -1
//   : 0

const UserList = ({ users, isLoading, fetchUsersConcat }) => {
  const { toggleFavorite } = useLocalStorage();
  const [filter, setFilter] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const handleScroll = e => {
    //scrollHeight : the minimum height required in order to fit all the content of an element in the viewport,
    //scrollTop : the measurement of the distance from the element's top to its topmost visible content,
    //clientHeight : the inner height of an element in pixels
    //
    //To calculate when the scorll reaches the bottom, we will reduce the clientHeight and scrollTop
    //from scrollHeight. Because scrollTop is not rounded, unlike scrollHeight and clientHeight we will
    //check if the scroll amount is close enough to some threshold(1 was used for simplicity, may be changed).
    const SCROLL_THRESHHOLD = 1;
		const bottom = e.target.scrollHeight - e.target.clientHeight - e.target.scrollTop < SCROLL_THRESHHOLD;
		bottom && !isLoading && fetchUsersConcat();
 	};

  const sortName = (userNext, user) => {
    const fullNameNext = `${userNext?.name?.first} ${userNext?.name?.last.toLowerCase()}`;
    const fullName = `${user?.name?.first} ${user?.name?.last.toLowerCase()}`;
    return fullNameNext > fullName ? 1
    : fullNameNext < fullName ? -1
    : 0;
  };
  const sortEmail = (userNext, user) => {
    return userNext?.email?.toLowerCase() > user?.email?.toLowerCase() ? 1
    : userNext?.email?.toLowerCase() < user?.email?.toLowerCase() ? -1
    : 0;
  };
  const sortCountry = (userNext, user) => {
    const countryNext = userNext?.location?.country.toLowerCase();
    const country = user?.location?.country.toLowerCase();;
    return countryNext > country ? 1
    : countryNext < country ? -1
    : 0;
  };
  const sortCity = (userNext, user) => {
    const cityNext = userNext?.location?.city.toLowerCase();
    const city = user?.location?.city.toLowerCase();;
    return cityNext > city ? 1
    : cityNext < city ? -1
    : 0;
  };

  const filteredUsers = users
  .filter( user => 
    filter.length !== 0 ? 
    filter.includes(countriesMapping[user?.location.country]) :
    true
  )
  .sort( (userNext, user) => {
    switch (sortBy) {
      case 'email':
        return sortEmail(userNext, user);
      case 'country':
        return sortCountry(userNext, user);
      case 'city':
        return sortCity(userNext, user);
      default:
        return sortName(userNext, user);
    }
  });
  return (
    <S.UserList>
      <Filters countriesMapping={countriesMapping} setFilter={setFilter} filter={filter} sortBy={sortBy} setSortBy={setSortBy} sortByOptions={sortByOptions}/>
      <List isLoading={isLoading} users={filteredUsers} handleScroll={handleScroll}/>
    </S.UserList>
  );
};

export default UserList;
