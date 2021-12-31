<template>
  <div>
    <Header />
    <VisiMisi/>
  </div>
</template>
<script>

const Header = () => import("../components/Header");
const VisiMisi = () =>import ("./VisiMisi.vue");


export default {
  components: {
    Header,
    VisiMisi
  },
   metaInfo: {
    title: " || HOME",
  },
  data() {
    return {
      selected: 1,
      activeComponent: undefined,
    };
  },
  mounted() {

  },
  computed: {

    // items() {
    //   return [
    //     {
    //       id: 1,
    //       title: "INFO KULIAH GRATIS",
    //       component: InfoKuliahGratis,
    //     },
    //     {
    //       id: 2,
    //       title: "DOSEN & STAFF",
    //       component: DosenStaff,
    //     },
    //     {
    //       id: 3,
    //       title: "AKREDITASI",
    //       component: Akreditasi,
    //     },
    //     {
    //       id: 4,
    //       title: "BERITA TERBARU",
    //       component: Berita,
    //     },
    //      {
    //       id: 5,
    //       title: "SAMBUTAN KETUA YAYASAN KRESNA ANDHI MANDIRI",
    //       component: Sambutan,
    //     },
    //     {
    //       id: 6,
    //       title: "PEJABAT STRUKTURAL",
    //       component: PejabatStruktural,
    //     },
    //   ];
    // },
  },
  methods: {
    scrollPage(){
        let yOffset = -60;
        let el = this.$refs.scroll;
        let y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
  },
};
</script>
<style scoped>
.row{
    margin-top:0px;
}
.callout-section {
  margin: 0px;
  position: relative;
  z-index: 0;
  display: flex;
  align-items: center;
}

.callout-section .callout-item {
  background: #3333332d;
  padding: 30px 0 20px;
  /* border-left: #333333 solid 1px; */
  cursor: pointer;
}

.callout-section .callout-item.light-bg {
  background: transparent;
}

.callout-section .callout-item.deep-bg {
  background: transparent;
}

.callout-section .default-bg {
  margin: 0px;
  height: 10vh;
}
.callout-item h5 {
  font-weight: bold;
  font-size: 0.9rem;
  text-align: center;
  padding-left: 25px;
}

.callout-item .inner-item {
  position: relative;
  margin: 0px 30px 0px 100px;
}

.callout-item .icon-box {
  position: absolute;
  top: 5px;
  left: 0px;
}

.callout-item .icon-box i:before {
  font-size: 50px;
  color: #333333;
}

.callout-item h5 {
  transition: 0.5s ease;
}

.callout-item .text {
  color: #222;
}

@media (max-width: 883px) {
  .callout-section .callout-item {
    padding: 20px 5px 10px;
  }
  .callout-item h5 {
    font-weight: bold;
    font-size: 0.85rem;
    text-align: center;
    }

}
.sp-home{
    width: 90%;
    margin: auto;
}

</style>
