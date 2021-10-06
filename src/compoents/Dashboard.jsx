/** @jsxImportSource @emotion/react */
import React from 'react'
import { css, jsx, useTheme } from '@emotion/react';
import Sidebar from './Sidebar';

const Dashboard = () => {

  const theme = useTheme();

  return (
    <div css={css`
      height: 100vh; 
      background-color: #ffffff;
      width: 100vw;
      display: flex;
    `}>
      <Sidebar />
      <div css={css`
        width: 100%; 
        height: 100%; 
        background-color: ${theme?.dark?.darkGrey};
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${theme?.dark?.textWhite};
      `}>
        Please choose or create a board.
      </div>
    </div>
  )
}

export default Dashboard
