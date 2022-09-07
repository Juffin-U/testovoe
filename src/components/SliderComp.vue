<template>
  <div class="slider">
    <input
      type="image"
      class="sectionsArrow"
      :src="require(`@/assets/image/${pathOfImage}`)"
    />
    <div class="corner" v-if="type == 0">
      <input
        type="image"
        class="cornerImage"
        :src="require(`@/assets/image/IntersectSlider${type.toString()}.png`)"
      />
      <div class="info">
        <div class="discount">-{{ discount }}%</div>
        <div class="conditions">{{ condition }}</div>
      </div>
    </div>
    <div class="corner1" v-else>
      <input
        type="image"
        class="cornerImage1"
        :src="require(`@/assets/image/IntersectSlider${type.toString()}.png`)"
      />
      <div class="info">
        <div class="conditions1">{{ condition }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SliderComp",
  props: {
    discount: {
      type: Number,
    },
    pathOfImage: {
      type: String,
      require: true,
    },
    condition: {
      type: String,
      require: true,
    },
    type: {
      type: Number,
      require: true,
    },
  },
};
</script>

<style scoped>
@media (max-width: 360px) {
  .info {
    display: flex;
    flex-direction: column;
    margin-top: -120px;
    margin-left: 27px;
    justify-content: space-between;
    color: white;
    font-size: 24px;
    text-align: start;
  }
  .conditions {
    width: 165px;
    height: 24px;
    display: flex;
    margin-top: 5px;
  }
  .conditions1 {
    width: 360px;
    height: 24px;
    display: flex;
    margin-top: 65px;
  }

  .sectionsArrow {
    width: 328px;
    height: 232px;
  }

  .corner {
    margin-top: -171px;
    width: 197.45px;
    height: 168px;
  }

  .corner1 {
    margin-top: -75px;
    width: 328px;
    height: 72px;
  }

  .cornerImage {
    width: 197.45px;
    height: 168px;
  }

  .cornerImage1 {
    width: 328px;
    height: 72px;
  }

  .discount {
    width: 62px;
    display: flex;
    height: 32px;
  }

  .slider {
    width: 328px;
    height: 232px;
  }
}
@media (min-width: 1440px) {
  .info {
    display: flex;
    flex-direction: column;
    margin-top: -120px;
    margin-left: 27px;
    justify-content: space-between;
    color: white;
    font-size: 24px;
    text-align: start;
  }

  .conditions {
    width: 165px;
    height: 24px;
    display: flex;
    margin-top: 5px;
  }

  .conditions1 {
    width: 360px;
    height: 24px;
    display: flex;
    margin-top: 65px;
  }

  .sectionsArrow {
    width: 360px;
    height: 232px;
  }

  .corner {
    margin-top: -171px;
    width: 197.45px;
    height: 168px;
  }

  .corner1 {
    margin-top: -75px;
    width: 360px;
    height: 72px;
  }

  .cornerImage {
    width: 197.45px;
    height: 168px;
  }

  .cornerImage1 {
    width: 360px;
    height: 72px;
  }

  .discount {
    width: 62px;
    display: flex;
    height: 32px;
  }

  .slider {
    width: 360px;
    height: 232px;
    margin-right: 40px;
  }
}
</style>
