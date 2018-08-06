import React from "react";

import PageHeader from "./components/PageHeader";
import Add from "./containers/Add";
import Filters from "./containers/Filters";
import List from "./containers/List";


export default () => (
    <div>
        <PageHeader>Simple Todo App</PageHeader>
        <Add />
        <Filters />
        <List />
    </div>
);
