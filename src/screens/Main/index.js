import React, { useState } from 'react';
import Header from '../shared/Header';
import Table from '../shared/Table';

export default function Main() {
  const usersInitial = [
    { idUser: 1, firstName: 'Jan', lastName: 'Kowalski' },
    { idUser: 2, firstName: 'Andrzej', lastName: 'Malewicz' },
    { idUser: 3, firstName: 'Anna', lastName: 'Andrzejewicz' },
    { idUser: 4, firstName: 'Marcin', lastName: 'Kwiatkowski' },
    { idUser: 5, firstName: 'Michał', lastName: 'Kowalski' }
  ];
  const columnsNames = ['User Id', 'First Name', 'Last Name'];

  const [users, setUsers] = useState(usersInitial);
  const [selectedUser, setSelectedUser] = useState({});
  const [currentSortKey, setSortKey] = useState({});
  const [currentSortDirection, setSortDirection] = useState({});

  const addUser = () => {
    const newIdUser =
      users.length !== 0
        ? users.reduce((prev, curr) =>
            prev.idUser < curr.idUser ? curr : prev
          ).idUser + 1
        : 1;
    setUsers([
      ...users,
      {
        idUser: newIdUser,
        firstName: 'AAA',
        lastName: 'BBB'
      }
    ]);
  };

  const deleteUser = (user) => {
    setUsers(users.filter((u) => u !== user));
  };

  const setCurrentlySelectedUser = (user) => {
    setSelectedUser(user);
  };

  const orderListByKey = (key) => {
    let newSortDirection = 'ascending';
    switch (key) {
      case 'User Id':
        if (key === currentSortKey && currentSortDirection === 'ascending') {
          setUsers(users.sort((a, b) => (a.idUser < b.idUser ? 1 : -1)));
          newSortDirection = 'descending';
        } else {
          setUsers(users.sort((a, b) => (a.idUser > b.idUser ? 1 : -1)));
          newSortDirection = 'ascending';
        }
        break;
      case 'First Name':
        if (key === currentSortKey && currentSortDirection === 'ascending') {
          setUsers(users.sort((a, b) => (a.firstName < b.firstName ? 1 : -1)));
          newSortDirection = 'descending';
        } else {
          setUsers(users.sort((a, b) => (a.firstName > b.firstName ? 1 : -1)));
          newSortDirection = 'ascending';
        }
        break;
      case 'Last Name':
        if (key === currentSortKey && currentSortDirection === 'ascending') {
          setUsers(users.sort((a, b) => (a.lastName < b.lastName ? 1 : -1)));
          newSortDirection = 'descending';
        } else {
          setUsers(users.sort((a, b) => (a.lastName > b.lastName ? 1 : -1)));
          newSortDirection = 'ascending';
        }
        break;
      default:
        break;
    }
    setSortKey(key);
    setSortDirection(newSortDirection);
    console.log(key, newSortDirection);
  };

  return (
    <>
      <Header />
      <div className="container">
        <br />
        <button onClick={addUser} type="button" className="btn">
          Dodaj użytkownika
        </button>
        <Table
          users={users}
          columnsNames={columnsNames}
          setSelectedUser={setCurrentlySelectedUser}
          selectedUser={selectedUser}
          deleteUser={deleteUser}
          orderList={orderListByKey}
        />
      </div>
    </>
  );
}
