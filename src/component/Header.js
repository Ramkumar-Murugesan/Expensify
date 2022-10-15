
import React from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

export const Header = ({ startLogout }) => (
  <div className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Expensify</h1>
        </Link>
        <button className="button button--link" onClick={startLogout}>Logout</button>
      </div>
    </div>
  </div>
)




const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);



   // error -- missed () in startLogout function
// const mapDispatchToProps = (dispatch) => ({
//     startLogout: () => dispatch(startLogout)
// })

//    export default connect(undefined, mapDispatchToProps)(Header);






// before applying style without removing anything
// export const Header = ({startLogout}) => (
//   <div>
//   <h1>Expensify</h1>
//   <div>
//   <NavLink to="/dashboard" activeClassName='is-active'>Dashboard</NavLink>
//   <NavLink to="/create" activeClassName='is-active'>Create Expense</NavLink>
//   <NavLink to="/edit/1" activeClassName='is-active'>Edit Expense</NavLink>
//   <NavLink to="/help" activeClassName='is-active'>Help</NavLink>
//   <button onClick={startLogout}>Logout</button>
//   </div>
//   </div>
//  )