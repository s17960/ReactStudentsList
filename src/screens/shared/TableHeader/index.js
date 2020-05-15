import React from 'react';
import PropTypes from 'prop-types';

export default function TableHeader({ columnsNames, orderList }) {
  return (
    <thead>
      <tr>
        {columnsNames.map((c) => (
          <th onClick={() => orderList(c)} key={c}>
            <button className="btn-flat" style={{ fontWeight: 'bold' }}>
              {c}
            </button>
          </th>
        ))}
      </tr>
    </thead>
  );
}

TableHeader.propTypes = {
  columnsNames: PropTypes.arrayOf(PropTypes.string).isRequired
};
