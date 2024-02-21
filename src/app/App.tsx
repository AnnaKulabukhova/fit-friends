import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { MainPage } from '../pages/MainPage';
import { Login } from '../pages/Login';
import { Registration } from '../pages/Registration';
import './index.css';
import { TrainerQuestionnaire } from '../pages/TrainerQuestionnaire';
import { UserQuestionnaire } from '../pages/UserQuestionnaire';

const router = createBrowserRouter([
  { path: '/', element: <MainPage /> },
  { path: '/login', element: <Login /> },
  { path: '/registration', element: <Registration /> },
  { path: '/user-questionnaire', element: <UserQuestionnaire /> },
  { path: '/trainer-questionnaire', element: <TrainerQuestionnaire /> },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
