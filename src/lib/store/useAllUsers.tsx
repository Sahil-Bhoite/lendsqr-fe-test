import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserData } from "../types/typesAndInterfaces";
import { enqueueSnackbar } from "notistack";
import fetchAllUserData from "../hook/fetchAllUsers";


interface UserStore {
  allUsers: UserData[];
  setAllUsers: (allusers: UserData[]) => void;
  changeUserStatus: (id: string, newStatus: string) => void;
  filteredUsers: UserData[];
  setFilteredUsers: (filterData: UserData[]) => void;
  resetUsers: () => void;
}

// Fetching the Mock User Data from the API
fetchAllUserData()

export const useAllUsersStore = create<UserStore>()(persist(
  (set) => (
    {
      allUsers: [],
      filteredUsers: [],
      // setting all users data 
      setAllUsers: (users: UserData[]) => set(() => ({ allUsers: users })),

      setFilteredUsers: (data: UserData[]) => set({filteredUsers: data}),
      // changing the user status
      changeUserStatus: (id, newStatus) => set((state ) =>{
        const existingUser = state.allUsers.find((user) => user.id === id);

        if(existingUser){

          enqueueSnackbar(`${existingUser.personalInfo.userName} is now ${newStatus}`, {
            variant: 'info',
            autoHideDuration: 3000,
          })
        }

        return{
          filteredUsers: state.filteredUsers.map((user) => (
            user.id === id ? {...user, status: newStatus} : user
          )),
          allUsers:state.allUsers.map((user) => (
            user.id === id ? {...user, status: newStatus} : user
          ))
        }
        
      }),
   
      
      
      resetUsers: () => set((state)=> ({filteredUsers: state.allUsers}))
    }),
  {
    name: "lendsqrUsers",
    partialize: (state) => ({
      allUsers: state.allUsers,
      filteredUsers: state.filteredUsers
    })
  }
))

