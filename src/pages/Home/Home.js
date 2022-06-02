import React from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import { Grow } from "@material-ui/core";
import { usePeopleFetch } from "hooks";
import * as S from "./style";

const Home = () => {
  const { users, isLoading, fetchUsersConcat } = usePeopleFetch();

  return (
    <Grow in={true}>
      <S.Home>
        <S.Content>
          <S.Header>
            <Text size="64px" bold>
              PplFinder
            </Text>
          </S.Header>
          <UserList users={users} isLoading={isLoading} fetchUsersConcat={fetchUsersConcat}/>
        </S.Content>
      </S.Home>
    </Grow>
  );
};

export default Home;
