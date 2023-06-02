import React from "react";
import AdminNav from "./AdminNav";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div>
      <div id="wrapper">
        <Sidebar></Sidebar>
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <AdminNav />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
