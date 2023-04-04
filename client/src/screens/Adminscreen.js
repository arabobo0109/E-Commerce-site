import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch,BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";

import Addpizza from "./Addpizza";
import Editpizza from "./Editpizza";
import Orderslist from "./Orderslist";
import Pizzaslist from "./Pizzalist";
import Userslist from "./Userslist";

export default function Adminscreen() {
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch();

  useEffect(() => {
     if (!currentUser.isAdmin) {
        window.location.href = "/";
      }
  }, []);

  return (
    <div>
      <div className="row justify-content-center p-3">
        <div className="col-md-10">
          <h2 style={{ fontSize: "35px" }}>Admin Panel</h2>

          <ul className="adminfunctions">
             <li>
             
            
              <Link to={'/admin/userslist'} style={{color: 'black'}}>Users List</Link>
            </li>
            <li>
            <Link to={'/admin/pizzaslist'} style={{color: 'black'}}>Pizzas List</Link>
            </li>
            <li>
            <Link to={'/admin/addpizza'} style={{color: 'black'}}>Add Pizza</Link>
            </li>
             <li>
            <Link to={'/admin/orderslist'} style={{color: 'black'}}>Orders List</Link>
            </li>

             
          </ul>


          
          <Switch>
          
              <Route path="/admin/userslist" component={Userslist} exact/>
              <Route path="/admin/orderslist" component={Orderslist} exact/>
             <Route path="/admin/pizzaslist" component={Pizzaslist} exact/>
               <Route path="/admin/addpizza" component={Addpizza} exact/>
              <Route path="/admin/editpizza/:pizzaid" component={Editpizza} exact/>
               
              </Switch> 
              
        </div>
      </div>
    </div>
  );
}
