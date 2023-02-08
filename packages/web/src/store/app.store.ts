import { create } from "zustand";
import produce from "immer";
import { Layout } from "react-grid-layout";

import IUser from "../types/User";
import IProject from "../types/Project";

import createGridInitialLayout from "./../helpers/createGridInitialLayout";
import getDateString from "../helpers/getDateString";

interface IUserData extends IUser {
  id: number;
}

interface IProjectData extends IProject {
  id: number;
}

export interface IProjectTimeTable extends IProject {
  id: number;
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
  deleteTimetableUser: (userId: number) => void;
  setTimetableUsers: (id: number) => void;
  setTimetableDate: (date: string) => void;
  addProjectToTimetableUser: (userId: number, projectId: number) => void;
  updatedUserProjectTimetable: (
    userId: number,
    changedLayout: Layout[]
  ) => void;
}

const useAppStore = create<AppState>((set, get) => ({
  users: [],
  projects: [],
  timetableUsers: [],
  timetableDate: getDateString(),

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

  deleteTimetableUser: (userId: number): void => {
    set(
      produce((state: AppState) => {
        state.timetableUsers = state.timetableUsers.filter(
          (user) => user.id !== userId
        );
      })
    );
  },

  setTimetableUsers: (id: number): void => {
    const isUserInArray = get().timetableUsers.find((user) => user.id === id);

    if (isUserInArray) return;

    const selectedUser = get().users.filter((user) => user.id === id);

    const newUser = {
      ...selectedUser[0],
      projects: [],
    };

    if (!isUserInArray) {
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

  addProjectToTimetableUser: (userId: number, projectId: number): void => {
    const project = get()
      .timetableUsers.filter((user) => user.id === userId)[0]
      .projects.filter((project) => project.id === projectId);

    if (project.length) return;

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
        state.timetableUsers
          .filter((user) => user.id === userId)[0]
          .projects.push(newProject);
      })
    );
  },

  updatedUserProjectTimetable: (
    userId: number,
    changedLayout: Layout[]
  ): void => {
    console.log("STORE", userId, changedLayout);

    if (!changedLayout.length) return;

    const userToUpdate = get().timetableUsers.filter(
      (user) => user.id === userId
    );

    const updatedProjects = userToUpdate[0].projects.map((project) => {
      const projectId = project.id;
      const newCoords = changedLayout.filter((cl) => +cl.i === projectId);

      console.log("store project", project);
      console.log("store newCoords", newCoords[0]);

      return {
        ...project,
        timetableCoords: {
          ...newCoords[0],
        },
      };
    });

    console.log("updatedProjects", updatedProjects);

    if (!updatedProjects.length) return;

    set(
      produce((state: AppState) => {
        state.timetableUsers.filter((user) => user.id === userId)[0].projects =
          updatedProjects as unknown as IProjectTimeTable[];
      })
    );
  },
}));

export default useAppStore;