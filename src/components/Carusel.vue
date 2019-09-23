<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="2000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="100"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"

    >
      <b-carousel-slide
        v-for="slide in slidesList"
        :key="slide.id"
        class="class-name"
        :caption="slide.caption"
        :text="slide.text"
        :img-src="slide.imgSrc"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
    computed: {
    slidesList() {
        
      return this.$store.getters.slideList;
    }
  },
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  },
  beforeCreate(){
  }

};
</script>
<style scoped>
.class-name {
  height: 100vh;
}
</style>