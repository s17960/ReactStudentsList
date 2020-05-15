import React from 'react';
import TableHeader from '../TableHeader';
import TableRow from '../TableRow';
import PropTypes from 'prop-types';

export default function Table({
  users,
  columnsNames,
  setSelectedUser,
  selectedUser,
  deleteUser,
  orderList
}) {
  return (
    <table>
      <TableHeader columnsNames={columnsNames} orderList={orderList} />
      <tbody>
        {users.map((u) => (
          <TableRow
            key={u.idUser}
            user={u}
            setSelectedUser={setSelectedUser}
            selectedUser={selectedUser}
            deleteUser={deleteUser}
          />
        ))}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      idUser: PropTypes.number,
      firstName: PropTypes.string,
      lastName: PropTypes.string
    })
  ).isRequired,
  columnsNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSelectedUser: PropTypes.func.isRequired,
  selectedUser: PropTypes.shape({
    idUser: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string
  }).isRequired
};
