<template>
  <div id="app">
    <notifications group="notifications-default" />
    <notifications group="notifications-top-left" position="top left" />
    <notifications group="notifications-top-center" position="top center" />
    <notifications group="notifications-bottom-right" position="bottom right" />
    <notifications group="notifications-bottom-left" position="bottom left" />
    <notifications group="notifications-bottom-center" position="bottom center" />
    <router-view />
  </div>
</template>

<style src="./style.scss" lang="scss"></style>

<script>
export default {
  name: "app",
  metaInfo: {
    title: "Index",
    titleTemplate: "%s - AliançaDEV"
  },
  updated() {
    // Remove loading state
    setTimeout(() => document.body.classList.remove("app-loading"), 1);
  }
};
</script>
