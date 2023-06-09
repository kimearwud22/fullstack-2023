import React, { Component } from "react";
import { Link } from "react-router-dom";
export class Sidebar extends Component {
  render() {
    return (
      <div>
        <ul
          class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion d-flex"
          id="accordionSidebar"
        >
          <a
            class="sidebar-brand d-flex align-items-center justify-content-center"
            href="index.html"
          >
            <div class="sidebar-brand-text mx-3">Admin Studio Mu </div>
          </a>

          <hr class="sidebar-divider my-0" />

          <li class="nav-item active">
            <a class="nav-link" href="/admin">
              <i class="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </a>
          </li>
          <hr class="sidebar-divider" />
          <div class="sidebar-heading">Interface</div>
          <li class="nav-item">
            <a
              class="nav-link collapsed"
              href="/"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <i class="fas fa-fw fa-cog"></i>
              <span>Components</span>
            </a>
            <div
              id="collapseTwo"
              class="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionSidebar"
            >
              <div class="bg-white py-2 collapse-inner rounded">
                <h6 class="collapse-header">Custom Components:</h6>
                <Link class="collapse-item" to="/admin/produkall">
                  All Produk
                </Link>
                <Link class="collapse-item" to="/admin/pelanggan">
                  All Pelanggan
                </Link>
                <Link class="collapse-item" to="/admin/testiall">
                  All Testimoni
                </Link>
              </div>
            </div>
          </li>
          
          <hr class="sidebar-divider" />

          <div class="sidebar-heading">Addons</div>
          <li class="nav-item">
            <a
              class="nav-link collapsed"
              href="/"
              data-toggle="collapse"
              data-target="#collapsePages"
              aria-expanded="true"
              aria-controls="collapsePages"
            >
              <i class="fas fa-fw fa-folder"></i>
              <span>Pages</span>
            </a>
            <div
              id="collapsePages"
              class="collapse"
              aria-labelledby="headingPages"
              data-parent="#accordionSidebar"
            >
              <div class="bg-white py-2 collapse-inner rounded">
                <h6 class="collapse-header">Login Screens:</h6>
                <a class="collapse-item" href="login.html">
                  Login
                </a>
                <a class="collapse-item" href="register.html">
                  Register
                </a>
                <a class="collapse-item" href="forgot-password.html">
                  Forgot Password
                </a>
                <div class="collapse-divider"></div>
                <h6 class="collapse-header">Other Pages:</h6>
                <a class="collapse-item" href="404.html">
                  404 Page
                </a>
                <a class="collapse-item" href="blank.html">
                  Blank Page
                </a>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/color">
              {" "}
              <i class="fas fa-fw fa-chart-area"></i>Colors
            </Link>
            {/* <a class="nav-link" href="charts.html"> 
                            <i class="fas fa-fw fa-chart-area"></i> 
                            <span>Charts</span></a> */}
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/table">
              {" "}
              <i class="fas fa-fw fa-table"></i>Tables
            </Link>
            {/* <a class="nav-link" href="tables.html"> 
                            <i class="fas fa-fw fa-table"></i> 
                            <span>Tables</span></a> */}
          </li>
          <hr class="sidebar-divider d-none d-md-block" />
          <div class="text-center d-none d-md-inline">
            <button class="rounded-circle border-0" id="sidebarToggle"></button>
          </div>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
