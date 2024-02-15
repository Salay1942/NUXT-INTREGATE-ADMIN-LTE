<template>
  <div>
    <!-- <button @click="isShow = !isShow">click Me</button> -->

    <NavBar v-if="isShow" />

    <SideBar v-if="isShow" />
    <body class="hold-transition layout-fixed">
      <!-- <div v-if="true" class="wrapper">
        <slot></slot>
      </div> -->
      <div v-if="true" class="content-wrapper">
        <slot></slot>
      </div>
    </body>
    <Footer v-if="isShow" />
  </div>
</template>

<script>
import { ref } from "vue";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
export default {
  components: {
    NavBar,
    SideBar,
    Footer,
  },
  setup() {
    const isShow = ref(true);
    function xx() {
      isShow.value;
    }
    return { isShow };
  },
};
</script>
