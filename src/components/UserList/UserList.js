import React, { useReducer, useEffect } from "react";
import Filters from "components/Filters";
import List from "components/List";
import * as S from "./style";

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

const reducer = (usersState, action) => {
  switch(action.type) {
    case 'update':
      return {...usersState, userList: action.payload.users};
    case 'filter':
      return {...usersState, userList: action.payload.users.filter( user => 
        action.payload.filter.length !== 0 ? 
        action.payload.filter.includes(countriesMapping[user?.location.country]) :
        true
      ), filter: action.payload.filter};
    case 'sort':
      //sort functions, adapt to different nesting of properties
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
      return {...usersState, userList: usersState.userList.sort( (userNext, user) => {
        switch (action.payload.sortBy) {
          case 'email':
            return sortEmail(userNext, user);
          case 'country':
            return sortCountry(userNext, user);
          case 'city':
            return sortCity(userNext, user);
          default:
            return sortName(userNext, user);
        }
      }), sortBy: action.payload.sortBy};   
    default:
      return usersState;
  }
}

const UserList = ({ users, isLoading, fetchUsersConcat }) => {
  const [usersState, dispatch] = useReducer(reducer, {userList: users, filter: [], sortBy: ''});

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

   useEffect(() => {
    //update the list on initial render and on infinite scrollbar added users
    dispatch({type: 'update', payload: {users}});
    usersState.filter.length > 0 && dispatch({type: 'filter', payload: {filter: usersState.filter, users}});
    usersState.sortBy && dispatch({type: 'sort', payload: {sortBy: usersState.sortBy}});
  }, [users]);

  return (
    <S.UserList>
      <Filters countriesMapping={countriesMapping} sortByOptions={sortByOptions}
        dispatch={dispatch} users={users}/>
      <List isLoading={isLoading} users={usersState.userList} handleScroll={handleScroll}/>
    </S.UserList>
  );
};

export default UserList;
