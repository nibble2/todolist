import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from '../TodoTemplate';
import {TodoProvider } from '../../TodoContext' ;
import TodoHead from '../TodoHead' ;
import TodoList from '../TodoList' ;
import TodoCreate from '../TodoCreate' ;

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
          <TodoHead />
          <TodoList />
          <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;