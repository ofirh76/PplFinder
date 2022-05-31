import { useState, useEffect } from "react";

export const useLocalStorage = () => {
  const [favoriteUsers, setFavoriteUsers] = useState(localStorage.getItem('favoriteUsersEmails') || {});

  return { favoriteUsers };
};