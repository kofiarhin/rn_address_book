import React, {createContext, useState, useEffect} from 'react';
import Data from '../mocks/data';

export const DataContext = createContext();

export const DataContextProvider = ({children}) => {
  const [users, setUsers] = useState(Data);
  const [searchData, setSearchData] = useState([]);

  return (
    <DataContext.Provider
      value={{
        users,
        setUsers,
        searchData,
        setSearchData,
      }}>
      {children}
    </DataContext.Provider>
  );
};
