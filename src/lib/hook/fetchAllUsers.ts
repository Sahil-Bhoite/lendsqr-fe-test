import { UserData } from "../types/typesAndInterfaces";
import { useAllUsersStore } from "../store/useAllUsers";


async function fetchAllUserData(): Promise<UserData[] | undefined> {

  const storedData = localStorage.getItem("lendsqrUsers");

  if(storedData) {
    const lendsqrUsers: { state: { allUsers: UserData[], filteredUsers: UserData[] } } = JSON.parse(storedData);
    
    if(lendsqrUsers.state.allUsers.length === 0 && lendsqrUsers.state.filteredUsers.length === 0) {
      useAllUsersStore.getState().setAllUsers(lendsqrUsers.state.allUsers);
      useAllUsersStore.getState().setFilteredUsers(lendsqrUsers.state.filteredUsers);
      
      return lendsqrUsers.state.allUsers;
    }
    
    useAllUsersStore.getState().setAllUsers(lendsqrUsers.state.allUsers);
    useAllUsersStore.getState().setFilteredUsers(lendsqrUsers.state.filteredUsers);
    
    return lendsqrUsers.state.allUsers;
  } 


    try {
      const response = await fetch("https://cdn.filestackcontent.com/EWinhQDcQACSGlR5Lcfg");
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data: UserData[] = await response.json();
     
      const reversedData = data.reverse();
      
      useAllUsersStore.getState().setAllUsers(reversedData);
      useAllUsersStore.getState().setFilteredUsers(reversedData);
      
    } catch (error) {
      console.error(error);
  }
}

export default fetchAllUserData;







