<template>
  <div>
    <section class="qa-section section page-load-catalog">
      <h2 class="gamma u-mb-- ng-binding">
        {{
          this.$route.params.service === "services"
            ? sevices.heading
            : ppcServices.heading
        }}
      </h2>
      <p class="text--medium u-mb++ ng-binding">
        {{
          this.$route.params.service === "services"
            ? sevices.description
            : ppcServices.description
        }}
      </p>
      <div v-for="(data, index) in catalogs" :key="index">
        <h4 class="">{{ data.category }}</h4>
        <div class="row m-0">
          <div
            v-for="(service, serviceindex) in data.services"
            :key="serviceindex"
          >
            <div class="catalog-tile" @click="goTodetail(service.id)">
              <div class="catalog-tile__content">
                <h3 class="catalog-tile__title">
                  {{ service.name }}
                </h3>
                <div class="catalog-tile__shortdescription ng-binding"> 
                  {{service.shortDescription}}
                </div>
                <img class="catalog-tile__icon" v-bind:src="service.image">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import config from '../config';

export default {
  data() {
    return {
      sevices: {
        heading: "Services and Software",
        description:
          "Use these key industrial services to build, test, and run your innovative Industrial Internet applications.",
      },
      ppcServices: {
        heading: "Predix Private Cloud (PPC) Services",
        description:
          "Use these key industrial services to build, test, and run your innovative Industrial Internet applications on premise.",
      },
      catalogs: null,
    };
  },
   methods: {
    goTodetail(prodId) {
      let proId = prodId;
      this.$router.push({ name: "details", params: { id: proId } });
    },
  },
  mounted() {
    axios
      .get(
        `${config.url}/products/service/${this.$route.params.service}`
      )
      .then((response) => {
        // this.product = response.data;
        let services = [];
        response.data.filter((data) => {
          if (services.length) {
            const checkExists = services.filter((servData) => {
              return servData.category === data.category;
            });
            if (checkExists.length) {
              const serviceIndex = services.indexOf(checkExists[0]);
              services[serviceIndex].services.push(data);
              return;
            } else {
              console.log("not exists");
              services.push({
                category: data.category,
                services: [data],
              });
              return;
            }
          } else {
            services.push({
              category: data.category,
              services: [data],
            });
          }
        });
        this.catalogs = services;
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
.catalog-tile__shortdescription, .catalog-tile__shortdescription > p {
	font-size: .7rem;
	line-height: 1.66667;
}
img {
	max-width: none;
}
img {
	max-width: 100%;
	border: 0;
}
.catalog-tile__icon {
	position: absolute;
	bottom: 1.1875rem;
	left: 1.1875rem;
	height: 30px;
}
.catalog-tile__title {
	font-size: 1rem;
	/* line-height: 1.25; */
	font-weight: 700;
	line-height: 1em;
}
.catalog-tile__content:hover {
  padding: 1.0625rem;
  padding-right: 1.0625rem;
  border-width: 3px;
  box-shadow: 0 3px 4px -1px rgb(209 219 208 / 80%);
}
.catalog-tile__content:hover:after {
  top: -7px;
  right: -15px;
  border-bottom: 3px solid #2886af;
}
.catalog-tile__link {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.catalog-tile {
  display: inline-block;
  position: relative;
  height: 170px;
  margin-top: 11px;
  margin-bottom: 9px;
  width: 267px;
  margin-top: 0.625rem;
  margin-right: 0.625rem;
  margin-bottom: 0.625rem;
}
.catalog-tile__content {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1.1875rem;
  padding-right: 1.1875rem;
  border: 1px solid #2886af;
  background: #fff;
}
.catalog-tile__content:after {
  position: absolute;
  top: -6px;
  right: -14px;
  width: 38px;
  height: 23px;
  transform: rotate(45deg);
  border-bottom: 1px solid #2886af;
  background-color: #eaeaea;
  content: "";
}
.u-mb\+\+ {
  margin-bottom: 1.875rem !important;
}
.c-search--banner .c-search__text,
.masthead__sub-text,
.nav__detail-description,
.nav__subnav-description,
.predix-banner-carousel__description,
.text--medium {
  font-size: 1.25rem;
  /* line-height: 1; */
  font-weight: 400;
  line-height: 1.4em;
}
.u-mb-- {
  margin-bottom: 0.3125rem !important;
}
.c-platform-plan__name,
.documentation-area.loaded h1:not(.alpha),
.gamma {
  font-size: 1.875rem;
  line-height: 1.33333;
  font-weight: 400;
}
.page-load-catalog {
  min-height: 1200px;
}
.section {
  padding-top: 1.875rem;
  padding-bottom: 1.875rem;
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