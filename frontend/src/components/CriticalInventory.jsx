import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import './CriticalInventory.css';

const statusColors = {
  'Out of Stock': 'status-out',
  'Low Stock': 'status-low',
  'In Stock': 'status-in',
};

const forecastColors = {
  'Out of Stock': 'forecast-urgent',
  'Low Stock': 'forecast-warning',
  'In Stock': 'forecast-safe',
};

const CriticalInventory = ({ items }) => {
  const navigate = useNavigate();

  return (
    <div className="ci-wrapper">
      <div className="ci-header">
        <h2 className="ci-title">Critical Inventory</h2>
        <button className="ci-reorder-btn">
          <ShoppingCart size={16} />
          Reorder All Low Stock
        </button>
      </div>

      <div className="ci-table-wrapper">
        <table className="ci-table">
          <thead>
            <tr className="ci-thead-row">
              <th className="ci-th">Product</th>
              <th className="ci-th">Stock</th>
              <th className="ci-th">Price</th>
              <th className="ci-th">Status</th>
              <th className="ci-th">Forecast</th>
              <th className="ci-th ci-th-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => (
              <tr key={i} className="ci-row">
                <td className="ci-td">
                  <p className="ci-product-name">{item.name}</p>
                  <p className="ci-product-meta">{item.category} • {item.supplier}</p>
                </td>
                <td className={`ci-td ci-stock ${statusColors[item.status]}`}>
                  {item.stock}
                </td>
                <td className="ci-td ci-price">{item.price}</td>
                <td className="ci-td">
                  <span className={`ci-badge ${statusColors[item.status]}`}>
                    {item.status}
                  </span>
                </td>
                <td className={`ci-td ci-forecast ${forecastColors[item.status]}`}>
                  {item.daysLeft}
                </td>
                <td className="ci-td ci-td-right">
                  <button
                    onClick={() => navigate('/inventory')}
                    className="ci-action-btn"
                  >
                    Reorder
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CriticalInventory;
