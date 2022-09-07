<template>
  <div class="serviceCont">
    <div class="buffer"></div>
    <div class="HeaderAndArrows">
      <div class="Header">{{ tagText }}</div>
      <div class="arrows">
        <input
          type="image"
          @click="previous"
          class="sectionsArrow"
          :src="require(`@/assets/image/slider/${sectionsArrowArr[0]}`)"
        />
        <input
          type="image"
          @click="next"
          class="sectionsArrow"
          :src="require(`@/assets/image/slider/${sectionsArrowArr[1]}`)"
        />
      </div>
    </div>
    <div class="slidersContM" v-for="item in sliderData" :key="item">
      <div class="leftVupperSlider">
        <vueper-slides
          ref="Slides6"
          :arrows="false"
          :bullets="false"
          transition-speed="250"
          :slide-ratio="0.771"
        >
          <vueper-slide
            v-for="(imagePath, i) in item.leftArrIndex"
            :key="i"
            :image="imagePath"
          />
        </vueper-slides>
      </div>
      <div class="leftTextCont">
        <div class="leftText">{{ item.leftText }}</div>
        <div class="hyperLink">
          <div class="textLink">{{ item.hyperLinkText }}</div>
          <div
            class="linkImg"
            :style="{
              backgroundImage:
                'url(' + require(`../assets/image/${item.linkImg}`) + ')',
            }"
          ></div>
        </div>
      </div>
      <div class="leftVupperSliderM">
        <vueper-slides
          ref="Slides5"
          :arrows="false"
          :bullets="false"
          transition-speed="250"
          :slide-ratio="0.771"
        >
          <vueper-slide
            v-for="(imagePath, i) in item.middleArrIndex"
            :key="i"
            :image="imagePath"
          />
        </vueper-slides>
      </div>
      <div class="leftTextCont">
        <div class="leftText">{{ item.middleText }}</div>
        <div class="hyperLink">
          <div class="textLink">{{ item.hyperLinkText }}</div>
          <div
            class="linkImg"
            :style="{
              backgroundImage:
                'url(' + require(`../assets/image/${item.linkImg}`) + ')',
            }"
          ></div>
        </div>
      </div>
      <div class="leftVupperSlider">
        <vueper-slides
          ref="Slides4"
          :arrows="false"
          :bullets="false"
          transition-speed="250"
          :slide-ratio="0.771"
        >
          <vueper-slide
            v-for="(imagePath, i) in item.rightArrIndex"
            :key="i"
            :image="imagePath"
          />
        </vueper-slides>
      </div>
      <div class="leftTextCont">
        <div class="leftText">{{ item.rightText }}</div>
        <div class="hyperLink">
          <div class="textLink">{{ item.hyperLinkText }}</div>
          <div
            class="linkImg"
            :style="{
              backgroundImage:
                'url(' + require(`../assets/image/${item.linkImg}`) + ')',
            }"
          ></div>
        </div>
      </div>
    </div>
    <div class="slidersCont" v-for="item in sliderData" :key="item">
      <div class="leftSlider">
        <div class="leftVupperSlider">
          <vueper-slides
            ref="Slides1"
            :arrows="false"
            :bullets="false"
            transition-speed="250"
            :slide-ratio="0.771"
          >
            <vueper-slide
              v-for="(imagePath, i) in item.leftArrIndex"
              :key="i"
              :image="imagePath"
            />
          </vueper-slides>
        </div>
        <div class="leftTextCont">
          <div class="leftText">{{ item.leftText }}</div>
          <div class="hyperLink">
            <div class="textLink">{{ item.hyperLinkText }}</div>
            <div
              class="linkImg"
              :style="{
                backgroundImage:
                  'url(' + require(`../assets/image/${item.linkImg}`) + ')',
              }"
            ></div>
          </div>
        </div>
      </div>
      <div class="healthAndSlider">
        <div class="healthCont">
          <div class="health">{{ item.healthText }}</div>
          <div class="tag">
            <div class="tagText">{{ item.tagText }}</div>
          </div>
        </div>
        <div class="middleSlider">
          <div class="middleVuperSlider">
            <vueper-slides
              ref="Slides2"
              :arrows="false"
              :bullets="false"
              transition-speed="250"
              :slide-ratio="0.678"
            >
              <vueper-slide
                v-for="(imagePath, i) in item.middleArrIndex"
                :key="i"
                :image="imagePath"
              />
            </vueper-slides>
          </div>
          <div class="middleTextCont">
            <div class="middleText">{{ item.middleText }}</div>
            <div class="hyperLink">
              <div class="textLink">{{ item.hyperLinkText }}</div>
              <div
                class="linkImg"
                :style="{
                  backgroundImage:
                    'url(' + require(`../assets/image/${item.linkImg}`) + ')',
                }"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div class="rightSlider">
        <div class="rightVuperSlider">
          <vueper-slides
            ref="Slides3"
            :arrows="false"
            :bullets="false"
            transition-speed="250"
            :slide-ratio="1.385"
          >
            <vueper-slide
              v-for="(imagePath, i) in item.rightArrIndex"
              :key="i"
              :image="imagePath"
            />
          </vueper-slides>
        </div>
        <div class="rightTextCont">
          <div class="rightText">{{ item.rightText }}</div>
          <div class="hyperLink">
            <div class="textLink">{{ item.hyperLinkText }}</div>
            <div
              class="linkImg"
              :style="{
                backgroundImage:
                  'url(' + require(`../assets/image/${item.linkImg}`) + ')',
              }"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div class="laptop"></div>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  name: "ServiceComp",
  components: { VueperSlides, VueperSlide },
  methods: {
    next() {
      this.$refs.Slides1[0].next();
      this.$refs.Slides2[0].next();
      this.$refs.Slides3[0].next();
      this.$refs.Slides4[0].next();
      this.$refs.Slides5[0].next();
      this.$refs.Slides6[0].next();
    },
    previous() {
      this.$refs.Slides1[0].previous();
      this.$refs.Slides2[0].previous();
      this.$refs.Slides3[0].previous();
      this.$refs.Slides4[0].previous();
      this.$refs.Slides5[0].previous();
      this.$refs.Slides6[0].previous();
    },
  },
  mounted() {
    console.log(this.$refs);
    console.log(this.$refs.yVueperSlides);
    console.log(this.$refs.testRef);
    // console.log(this.$refs.yVueperSlides[0]);
  },
  props: {
    sectionsArrowArr: {
      type: Array,
      require: true,
    },
    tagText: {
      type: String,
      require: true,
    },
    sliderData: {
      type: Array,
      require: true,
    },
  },
};
</script>

<style scoped>
@media (max-width: 360px) {
  .serviceCont {
    width: 360px;
    height: 1232px;
    background: #f6f6f6;
    border-radius: 20px;
    z-index: 6;
    position: absolute;
    font-size: 16px;
    color: #666666;
    font-family: Euclid Circular B;
  }
  .HeaderAndArrows {
    width: 328px;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: #3d3c3c;
    font-family: SangBleu Kingdom;
    font-size: 24px;
    margin-left: 20px;
  }
  .arrows {
    width: 96px;
    display: flex;
    justify-content: space-between;
  }

  .slidersCont {
    display: none;
    margin-top: 64px;
    width: 90%;
    padding-left: 16px;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .slidersContM {
    margin-top: 64px;
    display: flex;
    width: 90%;
    padding-left: 16px;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .leftTextCont {
    margin-top: 22px;
    margin-left: 15px;
    width: 296px;
    font-size: 20px;
    height: auto;
    align-items: start;
    justify-content: start;
    text-align: start;
    flex-direction: column;
    display: flex;
  }
  .hyperLink {
    width: 128px;
    height: 24px;
    font-weight: 600;
    display: flex;
    flex-direction: row;
    font-size: 12px;
    color: #ab955e;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 30px;
  }

  .linkImg {
    width: 16px;
    height: 2px;
  }

  .textLink {
    width: 138px;
    height: 24px;
    display: flex;
    align-items: center;
  }
}
@media (min-width: 1440px) {
  .slidersContM {
    display: none;
  }
  .buffer {
    margin-bottom: 64px;
  }

  .HeaderAndArrows {
    width: 596px;
    height: 56px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: #3d3c3c;
    font-family: SangBleu Kingdom;
    font-size: 54px;
    margin-left: 116px;
  }

  .tag {
    display: flex;
    flex-direction: column;
    font-size: 24px;
    color: #3d3c3c;
    text-align: start;
    margin-top: 24px;
  }

  .health {
    text-align: start;
    align-items: center;
    display: flex;
    font-size: 14px;
    width: 130px;
    height: 24px;
  }

  .slidersCont {
    margin-top: 64px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  .leftSlider {
    width: 560px;
    height: 536px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-left: 55px;
  }

  .leftVupperSlider {
    width: 560px;
    height: 432px;
    border-radius: 50px;
  }

  .leftTextCont {
    margin-top: 22px;
    width: 528px;
    height: 82px;
    align-items: start;
    justify-content: start;
    text-align: start;
    flex-direction: column;
    display: flex;
  }

  .middleSlider {
    width: 260px;
    height: 304px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .middleVuperSlider {
    width: 260px;
    height: 176px;
  }

  .middleTextCont {
    margin-top: 22px;
    width: 228px;
    height: 106px;
    align-items: start;
    justify-content: start;
    text-align: start;
    flex-direction: column;
    display: flex;
  }

  .arrows {
    width: 96px;
    display: flex;
    justify-content: space-between;
  }

  .rightSlider {
    width: 276px;
    height: 504px;
    background-color: #ffffff;
    box-shadow: 0.4em 0.4em 25px rgba(122, 122, 122, 0.5);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-right: 55px;
    margin-top: -120px;
  }

  .rightVuperSlider {
    width: 260px;
    height: 360px;
  }

  .rightTextCont {
    margin-top: 22px;
    width: 228px;
    height: 106px;
    align-items: start;
    justify-content: start;
    text-align: start;
    flex-direction: column;
    display: flex;
  }

  .healthAndSlider {
    width: 260px;
    height: 601px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .serviceCont {
    width: 1392px;
    height: 856px;
    background: #f6f6f6;
    border-radius: 20px;
    z-index: 6;
    position: absolute;
    margin-left: 24px;
    margin-top: 26px;
    font-size: 16px;
    color: #666666;
    font-family: Euclid Circular B;
  }

  .hyperLink {
    width: 118px;
    height: 24px;
    display: flex;
    flex-direction: row;
    font-size: 10px;
    color: #ab955e;
    font-weight: 600;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
  }

  .linkImg {
    width: 16px;
    height: 2px;
  }

  .textLink {
    width: 94px;
    height: 24px;
    display: flex;
    align-items: center;
  }

  .leftText {
    width: 452px;
    height: 48px;
  }

  .middleText {
    width: 208px;
    height: 72px;
  }

  .rightText {
    width: 184px;
    height: 72px;
  }

  .tagText {
    width: 224px;
  }

  .laptop {
    background-image: url("@/assets/image/Tablet.png");
    width: 616px;
    height: 822px;
    margin-left: 442px;
    margin-top: -70px;
  }
}
</style>
