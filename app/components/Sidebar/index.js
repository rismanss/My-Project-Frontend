import React from 'react';
import './style.css';

class Header extends React.Component {// eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="col-md-3 div-box">
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="kota tujuan ..." />
        </div>
        <div className="input-group mb-3">
          <select className="form-control">
            <option>Maksimal Harga</option>
          </select>
        </div>
        <div className="input-group mb-3">
          <select className="form-control">
            <option>Urut Berdasarkan</option>
          </select>
        </div>
        <div className="input-group mb-3">
          <button className="btn btn-primary btn-block">Cari Paket Travel</button>
        </div>
      </div>
    );
  }
}

export default Header;
