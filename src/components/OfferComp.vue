<template>
  <div class="offerCont" id="10">
    <div class="offer">
      <div class="offerText">{{ offerText }}</div>
      <div class="selectorCont">
        <div class="select">
          <div class="text">{{ selectorText }}</div>
          <div class="arrow"></div>
        </div>
        <div class="type"></div>
        <div class="data">
          <div class="dataText">{{ dataText }}</div>
          <div class="dataImg"></div>
        </div>
        <div class="filters">
          <div class="filterText">
            <div class="filterTextElem" v-for="item in filterText" :key="item">
              {{ item }}
            </div>
          </div>
          <div class="filterImg"></div>
        </div>
        <div class="button">
          <div class="textButtton">{{ buttonText }}</div>
        </div>
      </div>
      <div class="sectionsAndSliders">
        <div class="sectionsAndArrows">
          <div class="sections">
            <button class="section" id="0" @click="choosingSO(0)">
              {{ sectionsArr[0] }}
              <div class="line" id="3"></div>
            </button>
            <button class="section" id="1" @click="choosingSO(1)">
              {{ sectionsArr[1] }}
              <div class="line" id="4"></div>
            </button>
            <button class="section" id="2" @click="choosingSO(2)">
              {{ sectionsArr[2] }}
              <div class="line" id="5"></div>
            </button>
          </div>
          <div class="sectionsM">
            <button
              class="section"
              id="0"
              @click="choosingSO(0), chengeHeight(0)"
            >
              {{ sectionsArr[0] }}
              <div class="line" id="3"></div>
            </button>
            <button
              class="section"
              id="1"
              @click="choosingSO(1), chengeHeight(1)"
            >
              {{ sectionsArr[1] }}
              <div class="line" id="4"></div>
            </button>
            <button
              class="section"
              id="2"
              @click="choosingSO(2), chengeHeight(2)"
            >
              {{ sectionsArr[2] }}
              <div class="line" id="5"></div>
            </button>
          </div>
          <div class="arrows">
            <input
              type="image"
              class="sectionsArrow"
              @click="sliderLeft()"
              :src="require(`@/assets/image/${sectionsArrowArr[0]}`)"
            />
            <input
              type="image"
              class="sectionsArrow"
              @click="sliderRight()"
              :src="require(`@/assets/image/${sectionsArrowArr[1]}`)"
            />
          </div>
        </div>
        <div class="linePanel"></div>
        <div class="slidersPanel">
          <slider-comp
            class="sliderItem"
            v-for="data in arrOfIndex[this.a]"
            :key="data"
            :discount="data.discount"
            :condition="data.text"
            :path-of-image="data.imgPath"
            :type="this.a"
          ></slider-comp>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SliderComp from "@/components/SliderComp";
export default {
  name: "offerComp",
  components: { SliderComp },
  data() {
    return { a: 0, arrOfIndex: this.sliderData };
  },
  mounted() {
    document.getElementById(0).style.color = "#BCA56A";
    document.getElementById((3).toString()).style.backgroundColor = "#BCA56A";
  },
  methods: {
    sliderLeft() {
      let buf = this.arrOfIndex[this.a][0];
      this.arrOfIndex[this.a].shift();
      this.arrOfIndex[this.a].push(buf);
    },
    sliderRight() {
      let buf = this.arrOfIndex[this.a][this.arrOfIndex[this.a].length - 1];
      this.arrOfIndex[this.a].pop();
      this.arrOfIndex[this.a].unshift(buf);
    },
    chengeHeight(id) {
      console.log(this.sliderData[id].length);
      document.getElementById(10).style.marginBottom = `${
        (this.sliderData[id].length - 2) * 338
      }px`;
    },
    choosingSO(id) {
      if (typeof id == "undefined") {
        if (this.a < 0) {
          this.a = 2;
        } else if (this.a == 3) {
          this.a = 0;
        }
        for (let i = 0; i < 3; i++) {
          if (i != this.a) {
            document.getElementById(i.toString()).style.color = "#3D3C3C";
            document.getElementById((3 + i).toString()).style.backgroundColor =
              "#efefef";
          } else {
            document.getElementById(i.toString()).style.color = "#BCA56A";
            document.getElementById((3 + i).toString()).style.backgroundColor =
              "#BCA56A";
          }
        }
      } else {
        for (let i = 0; i < 3; i++) {
          if (i != id) {
            document.getElementById(i.toString()).style.color = "#3D3C3C";
            document.getElementById((3 + i).toString()).style.backgroundColor =
              "#efefef";
          } else {
            document.getElementById(i.toString()).style.color = "#BCA56A";
            document.getElementById((3 + i).toString()).style.backgroundColor =
              "#BCA56A";
          }
          this.a = id;
        }
      }
    },
  },
  props: {
    offerText: {
      type: String,
      require: true,
    },
    selectorText: {
      type: String,
      require: true,
    },
    buttonText: {
      type: String,
      require: true,
    },
    dataText: {
      type: String,
      require: true,
    },
    filterText: {
      type: Array,
      require: true,
    },
    sectionsArr: {
      type: Array,
      require: true,
    },
    sliderData: {
      type: Array,
      require: true,
    },
    sectionsArrowArr: {
      type: Array,
      require: true,
    },
  },
};
</script>

<style scoped>
@media (max-width: 360px) {
  .offerCont {
    align-items: center;
    display: flex;
    width: 360px;
    margin: auto;
    height: auto;
    min-height: 963px;
    max-height: 1600px;
  }
  .offerText {
    width: 274px;
    height: 56px;
    font-size: 24px;
    font-family: SangBleu Kingdom;
    align-items: start;
    display: flex;
    margin-left: 20px;
  }
  .selectorCont {
    width: 312px;
    font-size: 16px;
    height: 288px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    margin-left: 20px;
  }
  .select {
    width: 312px;
    padding-left: 20px;
    height: 64px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px #e3e3e3 solid;
  }
  .arrow {
    margin-left: 156px;
    width: 10px;
    height: 5px;
    background-image: url("@/assets/image/arrow.png");
  }
  .data {
    width: 312px;
    padding-left: 20px;
    height: 64px;
    border: 1px #e3e3e3 solid;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .dataImg {
    width: 23px;
    height: 22px;
    margin-right: 13px;
    background-image: url("@/assets/image/Data.png");
  }
  .filters {
    width: 334px;
    height: 64px;
    border: 1px #e3e3e3 solid;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .filterText {
    width: 270px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 16px;
  }
  .filterImg {
    width: 20px;
    height: 22px;
    background-image: url("@/assets/image/Subtract.png");
  }
  .button {
    width: 312px;
    height: 64px;
    display: flex;
    background-color: #3d3c3c;
    border-radius: 10px;
    color: white;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .sectionsAndArrows {
    width: 328px;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .sections {
    display: none;
  }
  .sectionsM {
    margin-left: 14px;
    display: flex;
    flex-direction: row;
  }
  .section {
    padding: 0;
    border: none;
    width: 157px;
    font-family: Euclid Circular B;
    font-size: 18px;
    text-align: center;
    color: #3d3c3c;
    cursor: pointer;
    background-color: transparent;
  }
  .arrows {
    display: none;
  }
  .linePanel {
    width: 100%;
    height: 1px;
    background-color: #efefef;
  }
  .slidersPanel {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 232px;
    margin-top: 32px;
    margin-left: 15px;
  }
  .sliderItem {
    margin-bottom: 10px;
  }
}
@media (min-width: 1440px) {
  .sectionsM {
    display: none;
  }
  .line {
    width: 100%;
    height: 1px;
    margin-top: 20px;
  }

  .slidersPanel {
    width: auto;
    display: flex;
    flex-direction: row;
    height: 232px;
    margin-top: 32px;
  }

  .linePanel {
    width: 100%;
    height: 1px;
    background-color: #efefef;
  }
  .section {
    padding: 0;
    border: none;
    font-family: Euclid Circular B;
    font-size: 18px;
    text-align: center;
    color: #3d3c3c;
    cursor: pointer;
    background-color: transparent;
  }

  .select {
    width: 328px;
    height: 64px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px #e3e3e3 solid;
  }

  .selectorCont {
    width: 1160px;
    font-size: 16px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }

  .text {
    margin-left: 16px;
    height: 24px;
  }

  .offerCont {
    align-items: center;
    display: flex;
    width: 1440px;
    height: 704px;
    margin-left: 140px;
  }

  .offerText {
    margin-top: -250px;
    width: 456px;
    height: 56px;
    font-size: 40px;
    align-items: start;
    display: flex;
  }

  .arrow {
    margin-left: 156px;
    width: 10px;
    height: 5px;
    background-image: url("@/assets/image/arrow.png");
  }
  .arrowM {
    margin-left: 156px;
    width: 10px;
    height: 5px;
    background-image: url("@/assets/image/arrow.png");
  }

  .arrows {
    width: 96px;
    height: 40px;
  }

  .section {
    padding: 0;
    border: none;
    font-family: Euclid Circular B;
    font-size: 18px;
    text-align: center;
    color: #3d3c3c;
    cursor: pointer;
    background-color: transparent;
  }

  .sectionsArrow {
    width: 40px;
    height: 40px;
  }

  .data {
    width: 264px;
    height: 64px;
    border: 1px #e3e3e3 solid;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .selectorCont {
    margin-top: 42px;
    display: flex;
    flex-direction: row;
  }

  .filters {
    width: 392px;
    height: 64px;
    border: 1px #e3e3e3 solid;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .button {
    width: 144px;
    height: 80px;
    display: flex;
    background-color: #3d3c3c;
    border-radius: 0 10px 10px 0;
    color: white;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .dataImg {
    width: 23px;
    height: 22px;
    background-image: url("@/assets/image/Data.png");
    margin-left: 55px;
  }

  .filterImg {
    width: 20px;
    height: 22px;
    margin-left: 61px;
    background-image: url("@/assets/image/Subtract.png");
  }

  .filterText {
    width: 270px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 16px;
  }

  .dataText {
    margin-left: 16px;
  }

  .sections {
    width: 493px;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .sectionsAndArrows {
    width: 1160px;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
