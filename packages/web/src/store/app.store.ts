import { create } from "zustand";
import produce from "immer";

import IUser from "../types/User";
import IProject from "../types/Project";

interface IUserData extends IUser {
  id: number;
}

export interface IProjectTimeTable extends IProject {
  timetableCoords: ReactGridLayout.Layout[];
}

export interface IUserTimetable extends IUserData {
  projects: IProjectTimeTable[];
}

interface AppState {
  users: IUserData[];
  timetableUsers: IUserTimetable[];
  timetableDate: string;
  setUsers: (usersData: IUserData[]) => void;
  setTimetableUsers: (id: number) => void;
  setTimetableDate: (date: string) => void;
}

const useAppStore = create<AppState>((set, get) => ({
  users: [],
  timetableUsers: [],
  timetableDate: "",

  setUsers: (usersData: IUserData[]): void => {
    set(
      produce((state: AppState) => {
        state.users = usersData;
      })
    );
  },

  setTimetableUsers: (id: number): void => {
    const inArray = get().timetableUsers.find((user) => user.id === id);

    if (inArray) return;

    const selectedUser = get().users.filter((user) => user.id === id);

    const newUser = {
      ...selectedUser[0],
      projects: [],
    } as unknown as IUserTimetable;

    if (!inArray) {
      set(
        produce((state: AppState) => {
          state.timetableUsers.push(newUser);
          state.timetableUsers.sort((a, b) =>
            a.firstName.localeCompare(b.firstName)
          );
        })
      );
    }
  },

  setTimetableDate: (date: string): void => {
    set(
      produce((state: AppState) => {
        state.timetableDate = date;
      })
    );
  },
}));

export default useAppStore;
