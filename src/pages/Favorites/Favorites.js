import React, { useState } from "react";
import Text from "components/Text";
import { usePeopleFetch, useLocalStorage } from "hooks";
import List from "components/List";
import * as S from "./style";
import { Grow } from "@material-ui/core";
import { ContactsOutlined } from "@material-ui/icons";

const Favorites = (isLoading) => {
  // const { isLoading } = usePeopleFetch();
  const { favoriteUsers, toggleFavorite } = useLocalStorage();

  return (
    <Grow in={true}>
      <S.Home>
        <S.Content>
          <S.Header>
            <Text size="64px" bold>
              Favorites
            </Text>
          </S.Header>
          <List isLoading={isLoading} users={favoriteUsers} toggleFavorite={toggleFavorite} />
        </S.Content>
      </S.Home>
    </Grow>
  );
};

export default Favorites;
