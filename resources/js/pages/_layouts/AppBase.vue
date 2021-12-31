<template>
  <div>
    <Navbar />
    <router-view></router-view>
    <Footer />
  </div>
</template>
<script>
const Navbar = () => import("../../components/Navbar");
const Footer = () => import("../../components/Footer");
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>
