import React, { useState, useEffect } from "react";
import Text from "components/Text";
import Spinner from "components/Spinner";
import Filters from "components/Filters";
import List from "components/List";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import * as S from "./style";

const countriesMapping = {
  "BR": "Brazil",
  "AU": "Australia",
  "CA": "Canada",
  "DE": "Germany",
  "NL": "Netherlands"
}

const UserList = ({ users, isLoading }) => {
  // const [hoveredUserId, setHoveredUserId] = useState();
  const [filter, setFilter] = useState({});
  // const [filteredUsers, setFilteredUsers] = useState(users);
  // const toggleFavorite = user => {
  //   const favoriteUserEmail = localStorage.getItem(user.email);
  //   !favoriteUserEmail ? 
  //   localStorage.setItem(user.email, user.email) :
  //   localStorage.removeItem(favoriteUserEmail);
  // };
  // const isFavorite = email => localStorage.getItem(email);

  // const handleMouseEnter = (index) => {
  //   setHoveredUserId(index);
  // };

  // const handleMouseLeave = () => {
  //   setHoveredUserId();
  // };

  const filteredUsers = users.filter( user => 
    !(Object.keys(filter).length === 0) ? 
    Object.values(filter).includes(user?.location.country) :
    true
  );
  return (
    <S.UserList>
      <Filters countriesMapping={countriesMapping} setFilter={setFilter} filter={filter}/>
      <List isLoading={isLoading} users={filteredUsers}/>
      {/* <S.List>
        {users
        .filter( user => 
          !(Object.keys(filter).length === 0) ? 
          Object.values(filter).includes(user?.location.country) :
          true
        )
        .map((user, index) => {
          return (
            <S.User
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <S.UserPicture src={user?.picture.large} alt="" />
              <S.UserInfo>
                <Text size="22px" bold>
                  {user?.name.title} {user?.name.first} {user?.name.last}
                </Text>
                <Text size="14px">{user?.email}</Text>
                <Text size="14px">
                  {user?.location.street.number} {user?.location.street.name}
                </Text>
                <Text size="14px">
                  {user?.location.city} {user?.location.country}
                </Text>
              </S.UserInfo>
              <S.IconButtonWrapper isVisible={isFavorite(user?.email) || index === hoveredUserId}>
                <IconButton onClick={() => toggleFavorite(user)}>
                  <FavoriteIcon color="error" />
                </IconButton>
              </S.IconButtonWrapper>
            </S.User>
          );
        })}
        {isLoading && (
          <S.SpinnerWrapper>
            <Spinner color="primary" size="45px" thickness={6} variant="indeterminate" />
          </S.SpinnerWrapper>
        )}
      </S.List> */}
    </S.UserList>
  );
};

export default UserList;
