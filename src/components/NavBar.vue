<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav me-auto">
            <li class="nav-item dropdown">
              <a
                class="nav-link active dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                >Products</a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Diamond discs</a>
                <a class="dropdown-item" href="#">Grinding cups</a>
                <a class="dropdown-item" href="#">Diamond drills</a>
                <a class="dropdown-item" href="#">Devices</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">All products</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"
                >Reviews
                <span class="visually-hidden">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contacts</a>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-sm-2" type="search" placeholder="Search" />
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            <button type="button" class="btn btn-danger my-2 my-sm-0">LogIn</button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>
  
  <script>
    export default {
        name: "NavBar"
    }
</script>

  <style scoped>
  .btn-danger{
    margin-left: 20px;
  }
</style>