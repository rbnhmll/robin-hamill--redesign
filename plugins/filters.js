import Vue from "vue";

Vue.filter("slug", value => {
  return value
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
});

Vue.filter("sub", (value, path = "") => {
  return `${path}${value}`;
});
