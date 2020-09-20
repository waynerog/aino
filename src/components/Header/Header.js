import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

const Header = ({cartLength}) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <NavLink className="navbar-brand" to="/">Aino's Delivery</NavLink>
            </div>
        </nav>
    );
};


const mapStateToProps = (state) => {
  return {
      cartLength: state.shop.cart.length
  }
};

export default connect(mapStateToProps, null)(Header);

