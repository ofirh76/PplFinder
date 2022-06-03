import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Text from "components/Text";
import { useLocalStorage } from "hooks/useLocalStorage";
import * as S from "./style";

const User = (props) => {
  // const [hoveredUserId, setHoveredUserId] = useState();
	const [hovered, setHovered] = useState(false);
	const { isFavorite, toggleFavorite } = useLocalStorage();
	// const handleMouseEnter = (index) => {
  //   setHoveredUserId(index);
  // };

  // const handleMouseLeave = () => {
  //   setHoveredUserId();
  // };

	return (
		<S.User
			key={props.index}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<S.UserPicture src={props.user?.picture.large} alt="" />
			<S.UserInfo>
				<Text size="22px" bold>
					{props.user?.name.title} {props.user?.name.first} {props.user?.name.last}
				</Text>
				<Text size="14px">{props.user?.email}</Text>
				<Text size="14px">
					{props.user?.location.street.number} {props.user?.location.street.name}
				</Text>
				<Text size="14px">
					{props.user?.location.city} {props.user?.location.country}
				</Text>
			</S.UserInfo>
			<S.IconButtonWrapper isVisible={isFavorite(props.user?.email) || hovered}>
				<IconButton onClick={() => props.toggleFavorite ? props.toggleFavorite(props.user): toggleFavorite(props.user)}>
					<FavoriteIcon color="error" />
				</IconButton>
			</S.IconButtonWrapper>
		</S.User>
	)
}

export default User;