import React from "react";
import Spinner from "components/Spinner";
import * as S from "./style";
import { usePeopleFetch } from "hooks/usePeopleFetch";
import User from "components/User";

const List = ({users, handleScroll, toggleFavorite}) => {
	const { isLoading } = usePeopleFetch();

	return (
		<S.List onScroll={handleScroll}>
			{users
			.map((user, index) => {
				return (
					<User key={user?.email} user={user} index={index} toggleFavorite={toggleFavorite}/>
				);
			})}
			{isLoading && (
				<S.SpinnerWrapper>
					<Spinner color="primary" size="45px" thickness={6} variant="indeterminate" />
				</S.SpinnerWrapper>
			)}
      </S.List>
	)
}

export default List;