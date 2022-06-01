import React, { useState } from "react";
import Text from "components/Text";
import { usePeopleFetch, useLocalStorage } from "hooks";
import List from "components/List";
import * as S from "./style";
import { ContactsOutlined } from "@material-ui/icons";

const Favorites = () => {
  const { users, isLoading } = usePeopleFetch();
  const { favoriteUsers, toggleFavorite, isFavorite } = useLocalStorage();
  return (
    <S.Home>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            Favorites
          </Text>
        </S.Header>
        <List isLoading={isLoading} users={favoriteUsers} toggleFavorite={toggleFavorite} isFavorite={isFavorite} />
      </S.Content>
    </S.Home>
  );
};

export default Favorites;
