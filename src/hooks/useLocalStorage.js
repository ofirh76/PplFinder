import { useState, useEffect } from "react";

export const useLocalStorage = () => {
  const [favoriteUsers, setFavoriteUsers] = useState([]);

  const toggleFavorite = user => {
    //get favorites from local storage, intialize if not defined
    let favoriteUsersEmails = getItemLocalStorage('favoriteUsersEmails');
    if(!favoriteUsersEmails) {
      addItemLocalStorage('favoriteUsersEmails', {});
      favoriteUsersEmails = {};
    }
    //add favorite if doesn't exist, delete otherwise
    const favoriteUserEmail = favoriteUsersEmails[user?.email];
    if(!favoriteUserEmail) {
      favoriteUsersEmails[user?.email] = user;
      setFavoriteUsers(favoriteUsers => {
        favoriteUsers.push(user); 
        return [...favoriteUsers];
      });
    } else  {
      console.log(favoriteUsers, user?.email)
      delete favoriteUsersEmails[user?.email];
      setFavoriteUsers(favoriteUsers => [...favoriteUsers.filter( favoriteUser => favoriteUser?.email !== user?.email)]);
    }
    // delete favoriteUsersEmails from local storage if empty
    Object.keys(favoriteUsersEmails).length > 0 ? 
    addItemLocalStorage('favoriteUsersEmails', favoriteUsersEmails) :
    deleteItemLocalStorage('favoriteUsersEmails');
  };

  const isFavorite = email => {
		let favoriteUsersEmails = getItemLocalStorage('favoriteUsersEmails');
		if(favoriteUsersEmails) {
			const favoriteUserEmail = favoriteUsersEmails[email];
			return favoriteUserEmail  
		}
	}

  const getItemLocalStorage = key => {
    const favoriteUsersEmails = localStorage.getItem(key);
    return favoriteUsersEmails ? JSON.parse(favoriteUsersEmails) : undefined;
  };

  const addItemLocalStorage = (key, value) => {
    if(key && value) localStorage.setItem(key, JSON.stringify(value))
  };

  const deleteItemLocalStorage = key => {
    if(key) localStorage.removeItem(key);
  };

  useEffect(() => {
    console.log('first render')
    const favoriteUsers = getItemLocalStorage('favoriteUsersEmails');
    favoriteUsers && setFavoriteUsers([...Object.values(favoriteUsers)]);
  }, []);

  return { favoriteUsers, toggleFavorite, isFavorite };
};