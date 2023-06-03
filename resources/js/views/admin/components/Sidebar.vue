<template>
    <ul
      class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >

      <router-link
        class="sidebar-brand d-flex align-items-center justify-content-center"
        to="/"
      >
        <div class="sidebar-brand-icon rotate-n-15">
          <i class="fas fa-laugh-wink"></i>
        </div>
        <div class="sidebar-brand-text mx-3">HOME</div>
      </router-link>


      <hr class="sidebar-divider my-0" />


      <li class="nav-item active">
        <router-link class="nav-link" to="/admin">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>MENU</span></router-link
        >
      </li>


      <!-- <hr class="sidebar-divider" />


      <div class="sidebar-heading">Interface</div>


      <li class="nav-item">
        <a
          class="nav-link collapsed"
          href="#"
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
            <router-link class="collapse-item" to="/admin/components/buttons">Buttons</router-link>
            <router-link class="collapse-item" to="/admin/components/cards">Cards</router-link>
          </div>
        </div>
      </li>


      <li class="nav-item">
        <a
          class="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseUtilities"
          aria-expanded="true"
          aria-controls="collapseUtilities"
        >
          <i class="fas fa-fw fa-wrench"></i>
          <span>Utilities</span>
        </a>
        <div
          id="collapseUtilities"
          class="collapse"
          aria-labelledby="headingUtilities"
          data-parent="#accordionSidebar"
        >
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Custom Utilities:</h6>
            <router-link class="collapse-item" to="/admin/utilities/colors">Colors</router-link>
            <router-link class="collapse-item" to="/admin/utilities/borders">Borders</router-link>
            <router-link class="collapse-item" to="/admin/utilities/animations"
              >Animations</router-link
            >
            <router-link class="collapse-item" to="/admin/utilities/other">Other</router-link>
          </div>
        </div>
      </li>


      <hr class="sidebar-divider" />


      <div class="sidebar-heading">Addons</div>


      <li class="nav-item">
        <a
          class="nav-link collapsed"
          href="#"
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
            <h6 class="collapse-header">Other Pages:</h6>
            <router-link class="collapse-item" to="/admin/pages/page-not-found">404 Page</router-link>
            <router-link class="collapse-item" to="/admin/pages/blank">Blank Page</router-link>
          </div>
        </div>
      </li> -->

      <li class="nav-item">
        <router-link class="nav-link" to="/">
          <i class="fas fa-fw fa-chart-area"></i>
          <span>Gia phả</span></router-link
        >
      </li>


      <li class="nav-item">
        <router-link class="nav-link" to="/albums">
          <i class="fas fa-fw fa-table"></i>
          <span>Albums</span></router-link
        >
      </li>


      <hr class="sidebar-divider d-none d-md-block" />


      <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle"></button>
      </div>
    </ul>

</template>

<script>

export default {
    name: 'Sidebar'
}
</script>
