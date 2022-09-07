<template>
  <div class="burgerMenuCont" id="7">
    <div class="burgerMenu">
      <div class="topSegment">
        <div class="lang">RU</div>
        <div class="logo"></div>
        <div class="exit" @click="openClose(8)"></div>
        <div class="itemPanel">
          <div class="item" v-for="item in arrayOfLinks" :key="item">
            {{ item }}
          </div>
        </div>
        <div class="enterPanel">
          <div class="key"></div>
          <div class="enter">
            <div class="enterText">{{ enterText }}</div>
            <div class="enterLine"><div class="enterLineImg"></div></div>
          </div>
        </div>
      </div>
      <div class="middleSegment">
        <div class="leftSubsegment">
          <div class="vector"></div>
          <social-button
            v-for="image in imageArr"
            :key="image"
            :image="image"
          ></social-button>
        </div>
        <div class="rightSubsegment">
          <div class="top">
            <div class="itemList">
              <div
                @mouseover="
                  ((this.idList = index), (this.subListID = 0)),
                    chengeColor(index + 100),
                    cl(index + 100)
                "
                class="list"
                :id="index + 100"
                v-for="(item, index) in arrayOfListData"
                :key="item"
              >
                {{ item.firstName }}
              </div>
            </div>
            <div class="vectorA"></div>
            <div class="subList">
              <div class="subListItemCont">
                <div
                  :id="testIdFunc(index)"
                  @mouseover="macros(index)"
                  class="subListItem"
                  v-for="(itemSub, index) in arrayOfListData[this.idList]
                    .arrOfSubList"
                  :key="itemSub"
                >
                  {{ itemSub.secondName }}
                </div>
              </div>
              <div class="subText">
                {{
                  arrayOfListData[this.idList].arrOfSubList[this.subListID].text
                }}
              </div>
            </div>
            <div class="slider">
              <input
                type="image"
                class="sliderImg"
                :src="require(`@/assets/image/Banner.png`)"
              />
              <div class="sliderCorner">
                <div class="cornerInfo">
                  <div class="name">Антистресс</div>
                  <div class="time">10-21 дня</div>
                  <button-component
                    :button-text="buttonArr.name"
                    :color-text="buttonArr.colorText"
                    :color="buttonArr.color"
                  ></button-component>
                </div>
              </div>
            </div>
          </div>
          <div class="bottom">INFO@MRIYARESORT.COM</div>
        </div>
      </div>
      <div class="infoBurgerCont">
        <div class="buttonSegment">
          <button class="button">НАЙТИ НОМЕР</button>
        </div>
        <div class="offers">
          <div class="item">О КОМПЛЕКСЕ</div>
          <div class="item">БЛОГ</div>
          <div class="item">FAQ</div>
          <div class="item">АФИША</div>
          <div class="item">СПЕЦПРЕДЛОЖЕНИЯ</div>
          <div class="item">ВАЖНАЯ ИНФОРМАЦИЯ</div>
          <div class="item">КОНТАКТЫ</div>
        </div>
        <div class="socialButtons">
          <social-button
            v-for="image in imageArr"
            :key="image"
            :image="image"
          ></social-button>
        </div>
        <div class="phoneNumber">8 800 500 6847</div>
        <div class="mail">info@mriyaresort.com</div>
      </div>
    </div>
    <div class="close" @click="openClose(8)"></div>
  </div>
</template>

<script>
import SocialButton from "@/components/socialButton";
import ButtonComponent from "@/components/buttonComponent";
export default {
  name: "BurgerMenuComp",
  mounted() {
    document.getElementById(100).style.backgroundColor =
      "rgba(217, 194, 135, 0.24)";
  },
  methods: {
    testIdFunc(index) {
      let prevLen = 0;
      for (let i = 0; i < this.idList; i++) {
        prevLen += this.arrayOfListData[i].arrOfSubList.length;
      }
      return 100 + this.arrayOfListData.length + prevLen + index;
    },
    openClose(id) {
      if (id === 7) {
        document.getElementById(id).style.display = "flex";
        document.getElementById(8).style.display = "none";
      } else {
        document.getElementById(id).style.display = "flex";
        document.getElementById(7).style.display = "none";
      }
    },
    macros(index) {
      this.subListID = index;
      this.chengeColorSub(this.testIdFunc(index));
      this.cl(index + 100 + this.arrayOfListData.length);
    },
    cl(item) {
      console.log(this.idList);
      console.log(item);
    },
    chengeColor(id) {
      document.getElementById(id).style.backgroundColor =
        "rgba(217, 194, 135, 0.24)";
      document.getElementById(this.prevID).style.backgroundColor =
        "rgba(36, 36, 36, 1)";
      this.prevID = id;
    },
    chengeColorSub(id) {
      const prevElem = document.getElementById(this.subPrevID);
      if (prevElem) {
        document.getElementById(this.subPrevID).style.color = "#FFFFFF";
      }
      document.getElementById(id).style.color = "#D9C287";
      this.subPrevID = id;
    },
  },
  components: { ButtonComponent, SocialButton },
  data() {
    return { idList: 0, subListID: 0, prevID: 100, subPrevID: 100 };
  },
  props: {
    pathOfImage: {
      type: Array,
      require: true,
    },
    name: {
      type: Array,
      require: true,
    },
    time: {
      type: Array,
      require: true,
    },
    imageArr: {
      type: Array,
      require: true,
    },
    arrayOfLinks: {
      type: Array,
      require: true,
    },
    enterText: {
      type: String,
      require: true,
    },
    arrayOfListData: {
      type: Array,
      require: true,
    },
    buttonArr: {
      type: Array,
      require: true,
    },
  },
};
</script>

<style scoped>
@media (max-width: 360px) {
  .offers {
    width: 206px;
    height: 102px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    font-size: 14px;
    flex-wrap: wrap;
    margin-bottom: -100px;
  }

  .infoBurgerCont {
    width: 328px;
    height: 378px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .button {
    width: 328px;
    height: 64px;
    background-color: #bca56a;
    color: white;
    border-radius: 8px;
    box-shadow: none;
    outline: none;
    border: 1px solid #d9c287;
  }
  .buttonSegment {
    width: 328px;
    height: 64px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 15px;
    margin-bottom: 15px;
    justify-content: center;
  }
  .socialButtons {
    width: 328px;
    height: 280px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: -100px;
  }
  .phoneNumber {
    width: 117px;
    height: 24px;
  }
  .mail {
    width: 202px;
    height: 24px;
  }
  .subText {
    width: 321px;
    height: 144px;
    display: none;
    padding: 30px;
    text-align: start;
    align-items: end;
    color: rgba(255, 255, 255, 0.48);
  }

  .name {
    width: 195px;
    height: 56px;
    font-size: 40px;
  }

  .time {
    width: 200px;
    height: 32px;
    font-size: 24px;
    text-align: start;
  }

  .cornerInfo {
    width: 245px;
    height: 178px;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .sliderCorner {
    width: 360px;
    height: 306px;
    margin-left: -425px;
    margin-top: 315px;
    background-image: url("@/assets/image/Intersect3.png");
  }

  .sliderImg {
    width: 425px;
    height: 621px;
  }

  .bottom {
    display: none;
    align-items: center;
    justify-content: end;
    height: 72px;
    width: 95%;
    color: #b1b1b1;
  }

  .vector {
    width: 1px;
    height: 368px;
    background-color: rgba(217, 194, 135, 0.24);
  }

  .vectorA {
    width: 6px;
    height: 128px;
    border-radius: 3px;
    background-color: #d9c287;
  }

  .slider {
    display: none;
    width: 421px;
    height: 100%;
    flex-direction: row;
  }

  .middleSegment {
    height: 640px;
    width: 328px;
    display: flex;
    flex-direction: column;
    margin-bottom: 70px;
  }

  .leftSubsegment {
    align-items: center;
    justify-content: space-around;
    width: 135px;
    height: 100%;
    display: none;
    flex-direction: column;
  }

  .rightSubsegment {
    width: 253px;
    height: 92px;
    display: flex;
    flex-direction: column;
  }

  .top {
    width: 253px;
    height: 92px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .itemList {
    width: 324px;
    height: 640px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .subList {
    margin-left: 85px;
    width: 399px;
    height: 552px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .subListItem {
    width: 140px;
    height: auto;
    min-height: 54px;
    text-align: start;
    justify-content: start;
    display: flex;
    font-size: 16px;
    padding-left: 90px;
    align-items: center;
  }

  .list {
    width: 268px;
    margin-left: 80px;
    height: 54px;
    border-bottom: 1px solid rgba(217, 194, 135, 0.24);
    display: flex;
    align-items: center;
    text-align: start;
    justify-content: start;
    color: #ffffff;
    font-size: 20px;
  }

  .burgerMenuCont {
    width: 360px;
    margin-left: -168px;
    height: 1096px;
    flex-direction: row;
    color: #ffffff;
    display: none;
  }

  .close {
    width: 80px;
    height: 80px;
    display: none;
    background-image: url("@/assets/image/pad.png");
  }

  .itemPanel {
    width: 470px;
    height: 24px;
    display: none;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    font-size: 24px;
    margin-left: 86px;
  }

  .burgerMenu {
    background: #242424;
    opacity: 0.994;
    width: 360px;
    height: 1096px;
    display: flex;
    flex-direction: column;
  }

  .topSegment {
    width: 360px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: solid 1px rgba(196, 196, 196, 0.08);
  }

  .logo {
    width: 66px;
    display: flex;
    height: 56px;
    background-image: url("@/assets/image/logo.png");
    margin-right: 32px;
  }

  .enterPanel {
    margin-left: 403px;
    width: 64px;
    height: 24px;
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: #ffffff;
  }

  .key {
    width: 15px;
    height: 8px;
    background-image: url("@/assets/image/key.png");
  }

  .enter {
    width: 44px;
    height: 24px;
    display: flex;
    flex-direction: column;
  }

  .enterText {
    height: 60%;
    width: 100%;
  }

  .enterLine {
    height: 40%;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .enterLineImg {
    margin-top: 4px;
    height: 10%;
    background-image: url("@/assets/image/line.png");
  }
  .exit {
    display: flex;
    width: 80px;
    height: 80px;
    background-image: url("@/assets/image/pad.png");
    align-items: center;
    text-align: center;
    justify-content: center;
  }
  .lang {
    display: flex;
    width: 80px;
    height: 80px;
    align-items: center;
    text-align: center;
    justify-content: center;
    font-size: 20px;
  }
}
@media (min-width: 1440px) {
  .exit {
    display: none;
  }
  .infoBurgerCont {
    display: none;
  }
  .lang {
    display: none;
  }
  .subText {
    width: 321px;
    height: 144px;
    display: flex;
    padding: 30px;
    text-align: start;
    align-items: end;
    color: rgba(255, 255, 255, 0.48);
  }

  .name {
    width: 195px;
    height: 56px;
    font-size: 40px;
  }

  .time {
    width: 200px;
    height: 32px;
    font-size: 24px;
    text-align: start;
  }

  .cornerInfo {
    width: 245px;
    height: 178px;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .sliderCorner {
    width: 360px;
    height: 306px;
    margin-left: -425px;
    margin-top: 315px;
    background-image: url("@/assets/image/Intersect3.png");
  }

  .sliderImg {
    width: 425px;
    height: 621px;
  }

  .bottom {
    display: flex;
    align-items: center;
    justify-content: end;
    height: 72px;
    width: 95%;
    color: #b1b1b1;
  }

  .vector {
    width: 1px;
    height: 368px;
    background-color: rgba(217, 194, 135, 0.24);
  }

  .vectorA {
    width: 6px;
    height: 128px;
    border-radius: 3px;
    background-color: #d9c287;
  }

  .slider {
    width: 421px;
    height: 100%;
    display: flex;
    flex-direction: row;
  }

  .middleSegment {
    height: 688px;
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  .leftSubsegment {
    align-items: center;
    justify-content: space-around;
    width: 135px;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .rightSubsegment {
    width: 1221px;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .top {
    width: 1221px;
    height: 621px;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid rgba(217, 194, 135, 0.24);
    align-items: center;
    justify-content: space-between;
  }

  .itemList {
    width: 379px;
    height: 552px;
    display: flex;
    flex-direction: column;
  }

  .subList {
    margin-left: 15px;
    border-left: 1px solid rgba(217, 194, 135, 0.24);
    width: 399px;
    height: 552px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .subListItem {
    width: 342px;
    height: auto;
    min-height: 54px;
    text-align: start;
    display: flex;
    font-size: 24px;
    padding-left: 20px;
    align-items: center;
  }

  .list {
    width: 340px;
    height: 54px;
    border-bottom: 1px solid #242424;
    border-radius: 10px;
    display: flex;
    align-items: center;
    text-align: start;
    justify-content: start;
    color: #ffffff;
    font-size: 24px;
    padding-left: 20px;
  }

  .burgerMenuCont {
    display: none;
    flex-direction: row;
    color: #ffffff;
  }

  .close {
    width: 80px;
    height: 80px;
    background-image: url("@/assets/image/pad.png");
  }

  .itemPanel {
    width: 470px;
    height: 24px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    font-size: 24px;
    margin-left: 86px;
  }

  .burgerMenu {
    background: #242424;
    opacity: 0.994;
    width: 1360px;
    height: 768px;
    display: flex;
    flex-direction: column;
  }

  .topSegment {
    width: 1360px;
    height: 80px;
    display: flex;
    align-items: center;
    border-bottom: solid 1px rgba(196, 196, 196, 0.08);
  }

  .logo {
    width: 66px;
    height: 56px;
    background-image: url("@/assets/image/logo.png");
    margin-left: 49px;
  }

  .enterPanel {
    margin-left: 403px;
    width: 64px;
    height: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: #ffffff;
  }

  .key {
    width: 15px;
    height: 8px;
    background-image: url("@/assets/image/key.png");
  }

  .enter {
    width: 44px;
    height: 24px;
    display: flex;
    flex-direction: column;
  }

  .enterText {
    height: 60%;
    width: 100%;
  }

  .enterLine {
    height: 40%;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .enterLineImg {
    margin-top: 4px;
    height: 10%;
    background-image: url("@/assets/image/line.png");
  }
}
</style>
