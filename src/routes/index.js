import React from "react";
import { Switch } from "react-router-dom";

import Route from "./Route";

import SignIn from "../pages/SignIn";
import ListStudents from "../pages/ListStudents";
import ListRegistries from "../pages/ListRegistries";
import ListPlans from "../pages/ListPlans";
import ListHelpOrders from "../pages/ListHelpOrders";
import EditPlans from "../pages/EditPlans";
import EditRegistries from "../pages/EditRegistries";
import EditStudents from "../pages/EditStudents";
import CreatePlans from "../pages/CreatePlans";
import CreateRegistries from "../pages/CreateRegistries";
import CreateStudents from "../pages/CreateStudents";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} isPublic />

      <Route path="/list/students" component={ListStudents} />
      <Route path="/list/registries" component={ListRegistries} />
      <Route path="/list/plans" component={ListPlans} />
      <Route path="/list/help-orders" component={ListHelpOrders} />

      <Route path="/edit/plans" component={EditPlans} />
      <Route path="/edit/registries" component={EditRegistries} />
      <Route path="/edit/students" component={EditStudents} />

      <Route path="/create/plans" component={CreatePlans} />
      <Route path="/create/registries" component={CreateRegistries} />
      <Route path="/create/students" component={CreateStudents} />
    </Switch>
  );
}
