import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Text from "components/Text";
import Spinner from "components/Spinner";
import * as S from "./style";

const List = ({users, isLoading}) => {
  const [hoveredUserId, setHoveredUserId] = useState();
  const toggleFavorite = user => {
		let favoriteUsersEmails = localStorage.getItem('favoriteUsersEmails');
		if(!favoriteUsersEmails) {
			localStorage.setItem('favoriteUsersEmails', JSON.stringify({}));
			favoriteUsersEmails = {};
		} else favoriteUsersEmails = JSON.parse(favoriteUsersEmails);
		const favoriteUserEmail = favoriteUsersEmails[user.email];
    !favoriteUserEmail ? 
    favoriteUsersEmails[user.email] = user.email :
    delete favoriteUsersEmails[user.email];
		localStorage.setItem('favoriteUsersEmails', JSON.stringify(favoriteUsersEmails));
  };
  const isFavorite = email => {
		let favoriteUsersEmails = localStorage.getItem('favoriteUsersEmails');
		if(favoriteUsersEmails) {
			favoriteUsersEmails = JSON.parse(favoriteUsersEmails);
			const favoriteUserEmail = favoriteUsersEmails[email];
			return favoriteUserEmail  
		}

	}

	const handleMouseEnter = (index) => {
    setHoveredUserId(index);
  };

  const handleMouseLeave = () => {
    setHoveredUserId();
  };

	console.log(users)

	return (
		<S.List>
			{users
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
      </S.List>
	)
}

export default List;