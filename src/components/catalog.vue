<template>
  <div>
    <div class="top-banner top-banner--level-2-page top-banner--tabs u-mb+">
      <div class="top-banner__labels vw">
        <h1 class="alpha">Catalog</h1>
      </div>
      <div class="navbar-subnav navbar-subnav-filter vw">
        <ul class="navbar-subnav__list list-inline">
          <li
            class="navbar-subnav__item"
            @click="selected = 'services'"
            v-bind:class="{ 'is-active': selected === 'services' }"
          >
            <router-link to="/catalog/services">
              Public Cloud Services
            </router-link>
          </li>
          <li
            class="navbar-subnav__item"
            @click="selected = 'ppc-services'"
            v-bind:class="{ 'is-active': selected === 'ppc-services' }"
          >
            <router-link to="/catalog/ppc-services">PPC Services </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="vw">
      <router-view class="view"></router-view>
    </div>
  </div>
<!-- //  -->
</template>
<script>
export default {
  data() {
    return {
      selected: "services",
    };
  },
};
</script>

<style>
a:link, a:visited {
	color: white;
  text-decoration: none;
}
.navbar-subnav__list .navbar-subnav__item.is-active {
  color: #2886af;
}
.navbar-subnav__list .navbar-subnav__item {
  color: #fff !important;
  line-height: 3.5;
  text-align: center;
  cursor: pointer;
}
.navbar-subnav__item {
  color: #fff !important;
}
.navbar-subnav__list .navbar-subnav__item {
  width: 200px;
  margin-left: 2px;
  background: linear-gradient(#2886af, rgba(40, 134, 175, 0.7));
  color: #fff;
  line-height: 3.5;
  text-align: center;
  cursor: pointer;
}
.list-inline > li,
.top-header__login-container > li {
  display: inline-block;
}
.navbar-subnav__list .navbar-subnav__item.is-active {
  background: #eaeaea;
  color: #2886af;
}
.navbar-subnav__list {
  display: -ms-inline-flexbox;
  display: inline-flex;
}
.list-inline,
.top-header__login-container {
  margin: 0;
  padding: 0;
  list-style: none;
}
dd,
ol,
ul {
  margin-left: 1.875rem;
}
.navbar-subnav {
  line-height: 1;
}
.vw {
  width: 98%;
  max-width: 73.125rem;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
}
.top-banner--tabs {
  -ms-flex-pack: inherit;
  justify-content: inherit;
}
.top-banner--level-2-page {
  background-position: 50% 50%;
  background-size: 1800px 380px;
}

.top-banner--level-2-page {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-pack: center;
  justify-content: center;
  height: 380px;
  min-height: 380px;
  background-image: url("https://www.predix.io/assets/images/landing/L2_banner_2x.png");
}
.top-banner {
  background-color: #021f2b;
  background-repeat: no-repeat;
}
.u-mb\+ {
  margin-bottom: 1.25rem !important;
}
.alpha,
.masthead__bold-text,
.predix-banner-carousel__title {
  font-size: 3.125rem;
  line-height: 1.2;
  margin-bottom: 1.25rem;
  font-weight: 400;
}
.top-banner__labels {
  -ms-flex-positive: 1;
  flex-grow: 1;
  padding-top: 180px;
  color: #3ab4d4;
}
.vw {
  width: 98%;
  max-width: 73.125rem;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
}
</style>