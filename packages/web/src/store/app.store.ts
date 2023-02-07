import { create } from "zustand";
import produce from "immer";

import IUser from "../types/User";
import IProject from "../types/Project";

import createGridInitialLayout from "./../helpers/createGridInitialLayout";

interface IUserData extends IUser {
  id: number;
}

interface IProjectData extends IProject {
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
  projects: IProjectData[];
  timetableUsers: IUserTimetable[];
  timetableDate: string;
  setUsers: (usersData: IUserData[]) => void;
  setProjects: (projectsData: IProjectData[]) => void;
  setTimetableUsers: (id: number) => void;
  setTimetableDate: (date: string) => void;
  updateTimetableUser: (userId: number, projectId: number) => void;
}

const useAppStore = create<AppState>((set, get) => ({
  users: [],
  projects: [],
  timetableUsers: [],
  timetableDate: "",

  setUsers: (usersData: IUserData[]): void => {
    set(
      produce((state: AppState) => {
        state.users = usersData;
      })
    );
  },

  setProjects: (projectsData: IProjectData[]): void => {
    set(
      produce((state: AppState) => {
        state.projects = projectsData;
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

  updateTimetableUser: (userId: number, projectId: number): void => {
    const selectedUser = get().timetableUsers.filter(
      (user) => user.id === userId
    );

    const selectedProject = get().projects.filter(
      (project) => project.id === projectId
    );

    const newProject = {
      ...selectedProject[0],
      timetableCoords: createGridInitialLayout(
        String(selectedProject[0].id)
      ) as unknown as ReactGridLayout.Layout[],
    };

    set(
      produce((state: AppState) => {
        state.timetableUsers.map((user) => {
          if (user.id === userId) {
            return {
              ...user,
              projects: user.projects.push(newProject),
            };
          } else {
            return {
              user,
            };
          }
        });
      })
    );
  },
}));

export default useAppStore;
