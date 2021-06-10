<template>
  <div v-if="product">
    <section class="top-banner top-banner--level-3-page text--white">
      <div class="vw">
        <div class="top-banner__info">
          <div>
            <a class="top-banner--level-3-page-header color" @click="goBack()">
              <i style="font-size: 20px" class="fas">&#xf104; </i> Back to
              Catalog
            </a>
            <div class="row m-0">
              <h1 class="mt-4">{{ product.name }}</h1>
              <small class="small-text pt-4 pl-3"
                ><b>{{ product.availability }}</b></small
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="vw section">
      <div class="layout layout--center">
        <div class="layout__item">
          <section class="section primary u-mb++ u-pb++ u-pt0 container">
            <div class="u-mt++">
              <img height="30" v-bind:src="product.image" />
              <h3 class="text--small text--gray">
                Service published by {{ product.createdAt | formatDate }}
              </h3>
              <div class="u-pb++">
                <a class="btn btn--bare-dark btn--small">
                  <i class="fas fa-file"></i> See Documentation
                </a>
              </div>
              <div class="text--small">{{ product.description }}</div>
              <div v-if="product.features" class="mt-4">
                <p class="mt-4"><strong>Features and benefits</strong></p>
                <div v-html="product.features">
                </div>
              </div>
              <div v-if="product.usesString" class="mt-4">
                <p class="mt-4"><strong>Example use</strong></p>
                <div>
                  {{product.usesString}}
                </div>
              </div>
              <div v-if="product.catalogItems" class="mt-4">
                <p class="mt-4"><strong>Related catalog items</strong></p>
                <div v-html="product.catalogItems">
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import config from '../config';

export default {
  name: "details",
  data() {
    return {
      proId: this.$route.params.id,
      title: "details",
      product: null,
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
  mounted() {
    axios
      .get(`${config.url}/products/${this.$route.params.id}`)
      .then((response) => {
        this.product = response.data;
        // this.product.features = response.data.features.replace(/[\[\]']+/g,'').split("'").filter((data) => {
        //   console.log(data)
        //   return (data !== ',' && data !== '');
        // });
        // console.log(this.product)
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
};
</script>

<style>
.u-mt\+\+ {
  margin-top: 1.875rem !important;
}
.text--white {
  color: #fff;
}
.layout {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  margin-left: -1rem;
  padding: 0;
}
.u-mr-- {
  margin-right: 0.3125rem !important;
}
.fa {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
/* .layout > .layout__item:nth-last-child(-n + 3):first-child,
.layout > .layout__item:nth-last-child(-n + 3):first-child ~ .layout__item {
  -ms-flex-preferred-size: 37.5rem;
  flex-basis: 37.5rem;
} */
.text--gray {
  color: #a9a9a9;
}
.c-error__sub-message,
.nc-widget .nc-widget__feature-name,
.promo-bar,
.text--small {
  font-size: 1rem;
  line-height: 1.25;
  font-weight: 400;
  line-height: 1.6em;
}
.btn.btn--bare-dark,
.btn.btn--bare-dark:link,
.btn.btn--bare-dark:visited {
  transition: all 0.5s;
  border: 1px solid #2886af;
  background-color: transparent;
  color: #2886af;
}
.btn.btn--small {
  padding: 0.625rem 1rem;
  font-size: 15px;
  font-weight: 700;
}
.btn,
.btn:link,
.btn:visited {
  border: 1px solid #2886af;
  background-color: #2886af;
  color: #fff;
}
a,
a:active,
a:link,
a:visited {
  color: #2886af;
}
a:link,
a:visited {
  color: #3e87e8;
}
.btn {
  display: inline-block;
  margin: 0;
  padding: 10px 20px;
  transition: all 0.5s;
  color: #fff;
  font: inherit;
  font-size: 28px;
  font-weight: 400;
  line-height: 1em;
  text-align: center;
  cursor: pointer;
  overflow: visible;
  vertical-align: middle;
}
a {
  background-color: transparent;
  text-decoration: none;
  box-shadow: none;
  cursor: pointer;
}
.section {
  padding-top: 1.875rem;
  padding-bottom: 1.875rem;
}
.small-text {
  margin-top: 15px;
  font-size: medium;
}
.beta,
.c-error__message {
  font-size: 2.5rem;
  line-height: 1;
  margin-bottom: 1rem;
  font-weight: 400;
  line-height: 1.3;
}
.top-banner__info {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.top-banner--level-3-page-header {
  position: relative;
  font-size: 1rem;
  top: 20px;
}
.u-pb\+\+ {
  padding-bottom: 1.875rem !important;
}
a {
  background-color: transparent;
  text-decoration: none;
  box-shadow: none;
  cursor: pointer;
}
.vw {
  width: 98%;
  max-width: 73.125rem;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
}
.color {
  color: #3ab4d4 !important;
}
.top-banner--level-3-page {
  background-position: 50% 50%;
  background-size: 1800px 240px;
}
.top-banner--level-3-page {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-pack: center;
  justify-content: center;
  height: 300px;
  background-image: url("https://www.predix.io/assets/images/landing/L3_banner_2x.png");
}
.top-banner {
  background-color: #021f2b;
  background-repeat: no-repeat;
}
.top-banner {
  background-color: #021f2b;
  background-repeat: no-repeat;
}
.section {
  padding-top: 1.875rem;
  padding-bottom: 1.875rem;
}
.u-pt0 {
  padding-top: 0 !important;
}
.u-pb\+\+ {
  padding-bottom: 1.875rem !important;
}
.u-mb\+\+ {
  margin-bottom: 1.875rem !important;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
menu,
nav,
section,
summary {
  display: block;
}
</style>