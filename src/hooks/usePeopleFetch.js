import { useState, useEffect } from "react";
import axios from "axios";

export const usePeopleFetch = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [getMoreUsers, setGetMoreUsers] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    fetchUsers(controller);
    return () => {controller.abort();} //cleanup
  }, []);

  useEffect(() => {
    if(getMoreUsers) {
      const controller = new AbortController();
      fetchUsersConcat(controller);
      setGetMoreUsers(false);
      return () => {setGetMoreUsers(false);controller.abort();}; //cleanup
    }
  }, [getMoreUsers]);

  async function fetchUsers(controller) {
    setIsLoading(true);
    const response = await axios.get(`https://randomuser.me/api/?results=25&page=1`, { signal: controller.signal });
    setIsLoading(false);
    setUsers(response.data.results);
  }

  async function fetchUsersConcat(controller) {
    // load more users for infinite scrollbar 
    setIsLoading(true);
    const response = await axios.get(`https://randomuser.me/api/?results=25&page=1`, { signal: controller.signal });
    setIsLoading(false);
    setUsers(users => {
      users = users.concat(response.data.results);
      return users;
    });
  }

  return { users, isLoading, fetchUsers, fetchUsersConcat, setGetMoreUsers };
};
