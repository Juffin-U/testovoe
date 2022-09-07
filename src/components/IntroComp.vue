<template>
  <div class="introM">
    <div class="wavesAndFlower">
      <div class="waves"></div>
      <div class="flower"></div>
      <div class="flowerStroke"></div>
    </div>
    <div class="info">
      <div class="tagline">{{ tag }}</div>
      <div class="name">{{ name }}</div>
      <div class="taglineRu">{{ tagRu }}</div>
      <div class="buttonPanel">
        <button-component
          v-for="item in arrOfButtonsNames"
          :key="item"
          :color="item.color"
          :color-text="item.colorText"
          :button-text="item.name"
        />
      </div>
      <div class="dovnAnchorCont">
        <div class="downAnchor"></div>
      </div>
    </div>
  </div>
  <div class="intro">
    <div class="compContent">
      <div class="textAndButtons">
        <div class="waves"></div>
        <div class="tagline">{{ tag }}</div>
        <div class="name">{{ name }}</div>
        <div class="taglineRu">{{ tagRu }}</div>
        <div class="buttonPanel">
          <button-component
            v-for="item in arrOfButtonsNames"
            :key="item"
            :button-text="item.name"
            :color-text="item.colorText"
            :color="item.color"
          />
        </div>
        <div class="vector"></div>
        <div class="downAnchor"></div>
      </div>
      <div class="socialButtons">
        <social-button
          v-for="image in imageArr"
          :key="image"
          :image="image"
        ></social-button>
      </div>
    </div>
    <div class="leaf">
      <div class="weather">
        <div class="externalLeaf">
          <div class="middleLeaf"></div>
        </div>
      </div>
      <div class="flowerStroke"></div>
      <div class="intersect"></div>
      <div class="internalLeaf"></div>
      <div class="flower"></div>
      <div class="weatherInfo">
        <div class="cloudImg"></div>
        <div class="temperature"></div>
        <div class="weatherInfoText">
          <div class="weather">Облачно</div>
          <div class="pinAndGeo">
            <div class="pin"></div>
            <div class="geoPosition">Ялта, Россия</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComponent from "@/components/buttonComponent";
import SocialButton from "@/components/socialButton";
export default {
  name: "NavMenuComp",
  components: { SocialButton, ButtonComponent },
  props: {
    tag: {
      type: String,
      require: true,
    },
    imageArr: {
      type: Array,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    tagRu: {
      type: String,
      require: true,
    },
    arrOfButtonsNames: {
      type: Array,
      require: true,
    },
  },
  mounted() {
    console.log(this.arrOfButtonsNames);
  },
};
</script>

<style scoped>
@media (max-width: 360px) {
  .intro {
    display: none;
  }
  .introM {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100vw;
    height: 634px;
  }
  .wavesAndFlower {
    flex-direction: row;
    justify-content: space-between;
  }
  .waves {
    width: 182px;
    height: 32px;
    margin-top: 55px;
    margin-left: -60px;
    background-image: url("@/assets/image/waves.png");
  }
  .flowerStroke {
    width: 241px;
    height: 458px;
    margin-top: -390px;
    margin-left: 210px;
    background-image: url("@/assets/image/flower_strokeM.png");
  }
  .buttonPanel {
    width: 348px;
    height: 56px;
    margin-left: 7px;
    margin-top: 10px;
    margin-bottom: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .flower {
    width: 295px;
    margin-top: -110px;
    margin-left: 220px;
    background-repeat: no-repeat;
    background-size: contain;
    height: 388px;
    background-image: url("@/assets/image/IntersectM.png");
  }
  .tagline {
    width: 184px;
    height: 24px;
    margin-top: -380px;
    font-size: 14px;
    margin-bottom: 20px;
    font-family: "Euclid Circular B";
  }
  .name {
    width: 207px;
    height: 144px;
    font-size: 64px;
    margin-bottom: 28px;
    font-family: SangBleu Kingdom;
  }
  .taglineRu {
    width: 288px;
    height: 64px;
    margin-top: 40px;
    margin-left: 25px;
    font-family: Euclid Circular B;
    font-size: 20px;
    text-align: start;
  }
  .dovnAnchorCont {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .downAnchor {
    width: 64px;
    height: 64px;
    background-image: url("@/assets/image/Down.png");
    margin-top: 24px;
  }
}
@media (min-width: 1440px) {
  .introM {
    display: none;
  }
  .buttonPanel {
    width: 440px;
    height: 64px;
    display: flex;
    margin-top: 58px;
    flex-direction: row;
    justify-content: space-between;
  }

  .leaf {
    margin-top: -530px;
  }

  .waves {
    width: 162px;
    height: 32px;
    background-image: url("@/assets/image/waves.png");
    margin-left: -91px;
    margin-top: 11px;
  }

  .vector {
    width: 1px;
    height: 48px;
    margin-top: 26px;
    margin-left: 32px;
    background-image: url("@/assets/image/Vector.png");
  }

  .downAnchor {
    width: 64px;
    height: 64px;
    background-image: url("@/assets/image/Down.png");
    margin-top: 24px;
  }

  .tagline {
    margin-top: 23px;
    width: 184px;
    height: 24px;
    font-size: 14px;
    font-family: "Euclid Circular B";
  }

  .name {
    font-family: "SangBleu KingdomA ";
    margin-top: 54px;
    width: 311px;
    height: 192px;
    justify-content: start;
    text-align: start;
    font-size: 96px;
  }

  .taglineRu {
    margin-top: 64px;
    width: 410px;
    height: 64px;
    text-align: start;
    font-size: 24px;
    font-family: "Euclid Circular B";
  }

  .textAndButtons {
    margin-left: 139px;
    text-align: start;
  }

  .externalLeaf {
    background-image: url("@/assets/image/flower_stroke.png");
    width: 1642px;
    height: 1396px;
    background-repeat: no-repeat;
    margin-left: 486px;
    margin-top: -153px;
  }

  .intro {
    width: 1440px;
    height: 808px;
  }

  .middleLeaf {
    background-image: url("@/assets/image/flower.png");
    width: 1680px;
    height: 1428px;
    margin-left: 44px;
    background-repeat: no-repeat;
  }

  .intersect {
    background-image: url("@/assets/image/Intersect.png");
    width: 439.35px;
    height: 312.2px;
    margin-left: 718px;
    margin-top: -782px;
    background-repeat: no-repeat;
  }

  .internalLeaf {
    background-image: url("@/assets/image/IntersectIn.png");
    width: 761.35px;
    height: 312.01px;
    margin-left: 806.7px;
    margin-top: -316px;
    background-repeat: no-repeat;
  }

  .cloudImg {
    width: 59px;
    height: 40px;
    margin-top: -220px;
    margin-left: 1050px;
    background-image: url("@/assets/image/Cloudly.png");
    background-repeat: no-repeat;
  }

  .temperature {
    width: 69px;
    height: 56px;
    margin-top: -40px;
    margin-left: 1133px;
    background-image: url("@/assets/image/27.png");
    background-repeat: no-repeat;
  }

  .weatherInfo {
    margin-left: 0;
    color: #ffffff;
  }

  .weatherInfoText {
    margin-left: 1120px;
  }

  .weather {
    width: 89px;
    font-size: 15px;
  }

  .geoPosition {
    width: 99px;
    font-size: 15px;
    margin-left: 19px;
  }

  .pinAndGeo {
    display: flex;
    flex-direction: row;
  }

  .pin {
    width: 12px;
    height: 16px;
    margin-top: 0px;
    margin-left: -20px;
    background-image: url("@/assets/image/pin.png");
    background-repeat: no-repeat;
  }

  .socialButtons {
    width: 64px;
    height: 256px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 1300px;
    margin-top: -554px;
  }
}
</style>
