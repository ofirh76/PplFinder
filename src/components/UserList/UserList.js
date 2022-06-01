import React, { useState, useEffect } from "react";
import Text from "components/Text";
import Spinner from "components/Spinner";
import Filters from "components/Filters";
import List from "components/List";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useLocalStorage } from "hooks/useLocalStorage";
import * as S from "./style";

const countriesMapping = {
  "BR": "Brazil",
  "AU": "Australia",
  "CA": "Canada",
  "DE": "Germany",
  "NL": "Netherlands"
}

const UserList = ({ users, isLoading, fetchUsersConcat }) => {
  const { toggleFavorite, isFavorite } = useLocalStorage();
  const [filter, setFilter] = useState({});
  const handleScroll = e => {
		const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
		bottom && fetchUsersConcat();
 	}
  const filteredUsers = users.filter( user => 
    !(Object.keys(filter).length === 0) ? 
    Object.values(filter).includes(user?.location.country) :
    true
  );
  return (
    <S.UserList>
      <Filters countriesMapping={countriesMapping} setFilter={setFilter} filter={filter}/>
      <List isLoading={isLoading} users={filteredUsers} toggleFavorite={toggleFavorite} isFavorite={isFavorite} handleScroll={handleScroll}/>
    </S.UserList>
  );
};

export default UserList;
