<template>
  <nav class="top-header">
    <div class="vw top-header__container">
      <div class="top-header__logo">
        <a>
          <img class="top-header__wordmark" src="https://www.predix.io/assets/images/predixdev_logo.svg" />
        </a>
      </div>
      <nav
        class=" js-top-header__menu top-header__menu--visible"
      >
        <ul class="nav js-nav">
          <li class="nav__list-item">
            <a class="top-header__link js-nav-link active"> 
                <router-link :to="{ name: 'catalog'}" active-class="active" exact>CATALOG</router-link>
            </a>
          </li>
          <li class="nav__list-item">
            <a class="top-header__link js-nav-link"> DOCUMENTATION </a>
          </li>
          <li class="nav__list-item">
            <a class="top-header__link js-nav-link"> RESOURCES </a>
          </li>
          <li class="nav__list-item">
            <a class="top-header__link js-nav-link"> FORUM </a>
          </li>
          <li class="nav__list-item">
            <a class="top-header__link js-nav-link"> SUPPORT </a>
          </li>
          <li class="nav__list-item">
            <a class="top-header__link js-nav-link"> ABOUT IIOT PLATFORM </a>
          </li>
          <li class="nav__list-item" style="color: grey">
            |
          </li>
          <li class="nav__list-item">
            <a class="top-header__link js-nav-link p-1 pl-2 pr-2" style="background: #d8d8d8"> SIGN IN </a>
          </li>
        </ul>
      </nav>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
a {
    text-decoration: none;
    color: #333;
}
a:hover {
    color: #2886af !important;
    text-decoration: none;
}
.active {
    color: #2886af !important;
}
a.active.nav__detail-title,
a.active.top-header__link,
a.link--heavy.active {
  color: #2886af;
}
a.link--heavy,
a.nav__detail-title,
a.top-header__link {
  font-weight: 700;
}
a.dark-gray,
a.nav__detail-title,
a.top-header__link {
  color: #333;
}
.top-header__link {
  font-size: 14px;
}
/* a {
  background-color: transparent;
  text-decoration: none;
  box-shadow: none;
  cursor: pointer;
} */
.nav {
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  margin: 0;
  list-style: none;
}
.nav__list-item {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-right: 10px;
  padding-left: 10px;
}
.top-header__menu--visible {
  display: -ms-flexbox;
  display: flex;
}
.top-header__menu {
  display: none;
  top: 0;
  right: 0;
  left: 0;
  -ms-flex: 1 0 auto;
  flex: 1 0 auto;
  -ms-flex-pack: end;
  justify-content: flex-end;
  height: 80px;
  z-index: 9999;
}
.top-header__menu {
  display: none;
  top: 0;
  right: 0;
  left: 0;
  -ms-flex: 1 0 auto;
  flex: 1 0 auto;
  -ms-flex-pack: end;
  justify-content: flex-end;
  height: 80px;
  z-index: 9999;
}
.top-header__wordmark {
  height: 18px;
  color: #333;
}
img {
  max-width: none;
}
img {
  max-width: 100%;
  border: 0;
}
.top-header__logo {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -ms-flex-align: center;
  align-items: center;
}
.top-header__container {
  display: -ms-flexbox;
  display: flex;
}
.vw {
  width: 98%;
  max-width: 73.125rem;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
}
.top-header {
  display: -ms-flexbox;
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-pack: justify;
  justify-content: space-between;
  height: 80px;
  background-color: #eaeaea;
  z-index: 1000;
}
</style>