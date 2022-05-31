import React, { useState } from "react";
import Text from "components/Text";
import { usePeopleFetch } from "hooks";
import * as S from "./style";
import { ContactsOutlined } from "@material-ui/icons";

const Favorites = () => {
  const { users, isLoading } = usePeopleFetch();
  const [favoriteUsersEmails, setFavoriteUsersEmails] = useState({...localStorage});
  const favoriteUsers = users.filter( user => favoriteUsersEmails[user.email]);

  return (
    <S.Home>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            Favorites
          </Text>
        </S.Header>
        <S.List isLoading={isLoading} users={favoriteUsers} />
      </S.Content>
    </S.Home>
  );
};

export default Favorites;
