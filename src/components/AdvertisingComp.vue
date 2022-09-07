<template>
  <div class="advetisingCont">
    <div class="info">
      <div class="waves"></div>
      <div class="tagLine">
        <div class="engTag">{{ engTagText }}</div>
        <div class="ruTag">{{ ruTagText }}</div>
      </div>
      <div
        class="logo"
        :style="{
          backgroundImage:
            'url(' + require(`../assets/image/VectorA.png`) + ')',
        }"
      ></div>
      <div
        class="logoM"
        :style="{
          backgroundImage:
            'url(' + require(`../assets/image/VectorAM.png`) + ')',
        }"
      />
      <div class="description">{{ description }}</div>
      <div class="button">
        <button-component
          v-for="item in arrOfButtonsNames"
          :key="item"
          :button-text="item.name"
          :color="item.color"
        ></button-component>
      </div>
    </div>
    <div class="background">
      <div class="backgroundImageLeft"></div>
      <div class="backgroundImageRight"></div>
    </div>
  </div>
</template>

<script>
import ButtonComponent from "@/components/buttonComponent";
export default {
  name: "AdvertisingComp",
  props: {
    ruTagText: {
      type: String,
      require: true,
    },
    engTagText: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    arrOfButtonsNames: {
      type: Array,
      require: true,
    },
  },
  components: { ButtonComponent },
};
</script>

<style scoped>
@media (max-width: 360px) {
  .advetisingCont {
    width: 360px;
    height: 616px;
    margin-top: 300px;
    z-index: 6;
  }
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .waves {
    width: 146px;
    height: 8px;
    background-image: url("@/assets/image/waves1.png");
    margin-bottom: 60px;
    margin-top: -140px;
  }
  .tagLine {
    width: 328px;
    height: 64px;
    display: flex;
    flex-direction: column;
    font-size: 24px;
    justify-content: center;
  }

  .engTag {
    width: 100%;
    height: 50%;
    font-weight: 400;
  }

  .ruTag {
    font-weight: 700;
    width: 100%;
    height: 50%;
  }
  .logoM {
    margin-top: 12px;
    width: 37px;
    height: 24px;
  }
  .logo {
    display: none;
  }
  .description {
    width: 328px;
    height: 192px;
    font-size: 18px;
    font-weight: 400;
    flex-wrap: wrap;
    line-height: 32px;
    margin-top: 36px;
  }
}
@media (min-width: 1440px) {
  .logoM {
    display: none;
  }
  .background {
    display: flex;
    flex-direction: row;
    margin-top: -774px;
  }

  .backgroundImageLeft {
    width: 365px;
    height: 880px;
    background-image: url("@/assets/image/backgroundLeft.png");
  }

  .backgroundImageRight {
    width: 524px;
    height: 848px;
    margin-top: 360px;
    margin-left: 551px;
    background-image: url("@/assets/image/backgroundRight.png");
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .button {
    margin-top: 42px;
    align-items: center;
  }

  .waves {
    width: 146px;
    height: 8px;
    background-image: url("@/assets/image/waves1.png");
  }

  .description {
    width: 620px;
    height: 96px;
    font-size: 20px;
    font-weight: 400;
    flex-wrap: wrap;
    line-height: 32px;
    margin-top: 36px;
  }

  .logo {
    margin-top: 42px;
    width: 62px;
    height: 40px;
  }

  .advetisingCont {
    width: 1440px;
    height: 616px;
    margin-top: -139px;
  }

  .tagLine {
    margin-top: 78px;
    width: 560px;
    height: 112px;
    display: flex;
    flex-direction: column;
    font-size: 40px;
    justify-content: center;
  }

  .engTag {
    width: 100%;
    height: 50%;
    font-weight: 400;
  }

  .ruTag {
    font-weight: 700;
    width: 100%;
    height: 50%;
  }
}
</style>
