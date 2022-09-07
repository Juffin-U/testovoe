<template>
  <div class="body" id="55">
    <NavMenuComp
      :array-of-links="navData.arrayOfLinks"
      :array-of-language="navData.arrayOfLanguage"
      :enter-text="navData.enterText"
      :phone-number="navData.phoneNumber"
    ></NavMenuComp>
    <div class="burgerCont">
      <div class="burger" id="8" @click="openClose(7)"></div>
      <div class="logoM"></div>
      <div class="key"></div>
      <BurgerMenuComp
        :array-of-links="navData.arrayOfLinks"
        :array-of-language="navData.arrayOfLanguage"
        :enter-text="navData.enterText"
        :phone-number="navData.phoneNumber"
        :array-of-list-data="burgerData.arrayOfListData"
        :image-arr="burgerData.arrOfImages"
        :button-arr="burgerData.arrayOfButtonsNames"
        :arr-image-index="burgerData.ArrIndex"
      ></BurgerMenuComp>
    </div>
    <IntroComp
      :tag="introData.tag"
      :name="introData.name"
      :arr-of-buttons-names="introData.arrayOfButtonsNames"
      :tag-ru="introData.tagRu"
      :image-arr="introData.arrOfImages"
    ></IntroComp>
    <offer-comp
      :offer-text="offerData.offerText"
      :sectionsArr="offerData.sectionsArr"
      :sliderData="offerData.sliderData"
      :selector-text="offerData.selectorText"
      :button-text="offerData.buttonText"
      :data-text="offerData.dataText"
      :filter-text="offerData.filterText"
      :sections-arrow-arr="offerData.sectionsArrowArr"
    >
    </offer-comp>
    <advertising-comp
      :description="advertisingData.description"
      :eng-tag-text="advertisingData.engTagText"
      :ru-tag-text="advertisingData.ruTagText"
      :arr-of-buttons-names="advertisingData.arrayOfButtonsNames"
    ></advertising-comp>
    <ServiceComp
      :tag-text="serviceData.tagText"
      :slider-data="serviceData.sliderData"
      :sections-arrow-arr="serviceData.sectionsArrowArr"
    ></ServiceComp>
    <div class="vector">
      <div class="leftVector"></div>
      <div class="rightVector"></div>
    </div>
    <div class="end">
      <div class="watermark"></div>
      <div class="logo"></div>
    </div>
    <div class="endM">
      <div class="backgroundImageRight"></div>
      <div class="backgroundImageLeft"></div>
    </div>
    <div class="endBuff"><div class="logoM"></div></div>
  </div>
</template>
<script>
import NavMenuComp from "@/components/NavMenuComp";
import IntroComp from "@/components/IntroComp";
import OfferComp from "@/components/OfferComp";
import AdvertisingComp from "@/components/AdvertisingComp";
import ServiceComp from "@/components/ServiceComp";
import BurgerMenuComp from "@/components/BurgerMenuComp";
export default {
  name: "HomePage",
  mounted() {
    document.getElementById(8).style.display = "flex";
  },
  methods: {
    openClose(id) {
      if (id == 7) {
        document.getElementById(id).style.display = "flex";
        document.getElementById(8).style.display = "none";
      } else {
        document.getElementById(id).style.display = "flex";
        document.getElementById(7).style.display = "none";
      }
    },
  },
  metaInfo() {
    return {
      title: "Vue App",
      meta: [
        { vmid: "description", property: "description", content: "Vue App" },
        { vmid: "og:title", property: "og:title", content: "Vue App" },
        {
          vmid: "og:description",
          property: "og:description",
          content: "Vue App",
        },
      ],
    };
  },
  components: {
    BurgerMenuComp,
    ServiceComp,
    AdvertisingComp,
    OfferComp,
    NavMenuComp,
    IntroComp,
  },
  data: () => {
    return {
      navData: {
        arrayOfLinks: ["О комплексе", "Блог", "FAQ", "Контакты"],
        arrayOfLanguage: ["RU", "ENG"],
        enterText: "Вход",
        phoneNumber: "8 800 500 6847",
      },
      burgerData: {
        arrayOfListData: [
          {
            firstName: "Размещение",
            arrOfSubList: [
              {
                secondName: "Однокомнатный номер",
                text: "Международные стандарты проживания и современные комфорта в сочетании с 1 комнатой",
              },
              {
                secondName: "Двухкомнатный номер",
                text: "Международные стандарты проживания и современные комфорта в сочетании с 2 комнатами",
              },
              {
                secondName: "Дом",
                text: "Международные стандарты проживания и современные комфорта в сочетании с 4 комнатами",
              },
            ],
          },
          {
            firstName: "Медицина",
            arrOfSubList: [
              {
                secondName: "Клиника персонализированной медицины",
                text: "Международные стандарты лечения и современные методики в сочетании с высококлассным сервисом и проживанием в одном из лучших семейных курортов мира Mriya Resort & SPA 5* ",
              },
              {
                secondName: "Медицинский центр",
                text: "Современная аппаратура, высококлассные специалисты, огромный выбор медицинских услуг ",
              },
            ],
          },
          {
            firstName: "Мероприятия",
            arrOfSubList: [
              {
                secondName: "Просмотр фильмов под открытым небом",
                text: "Международные стандарты кинематографа и современные методики показа фильмов в сочетании со свежим воздухом",
              },
              {
                secondName: "Туристические прогулки вдоль горной реки",
                text: "Международные стандарты туризма и современные методики путешествий в сочетании с красивыми горными пейзажами",
              },
            ],
          },
          {
            firstName: "Красота и восстановление",
            arrOfSubList: [
              {
                secondName: "СПА процедуры",
                text: "Международные стандарты красоты и современные методики косметологии в сочетании расслабляющей атмосферой",
              },
            ],
          },
          {
            firstName: "Бары и рестораны",
            arrOfSubList: [
              {
                secondName: "Коктейльный безалкогольный бар",
                text: "Международные стандарты производства газированных напитков и современные методики в сочетании с высококлассным сервисом",
              },
              {
                secondName: "Столовая",
                text: "Международные стандарты кулинарии и современные методики приготовления завтрака в сочетании с низкой ценой",
              },
              {
                secondName: "Вечерний ресторан",
                text: "Международные стандарты кулинарии и современные методики культурного проведения отдыха в сочетании c приятной музыкой",
              },
            ],
          },
          {
            firstName: "Развлечения",
            arrOfSubList: [
              {
                secondName: "Бассейн",
                text: "Международные стандарты архитектуры и современные методики строительства бассейнов в сочетании с крутыми горками",
              },
              {
                secondName: "Тенннис",
                text: "Международные стандарты игры в тенис и современные методики спорта в сочетании с красивым газоном",
              },
            ],
          },
          {
            firstName: "Спорт",
            arrOfSubList: [
              {
                secondName: "Футбол",
                text: "Международные стандарты судейства и современные методики построения командной работы в сочетании с огромным стадионом",
              },
              {
                secondName: "Лёгкая атлетика",
                text: "Международные стандарты бега и современные методики дыхания в сочетании с красивыми пейзажами",
              },
            ],
          },
          {
            firstName: "Детям",
            arrOfSubList: [
              {
                secondName: "Детские площадки",
                text: "Международные стандарты безопасности и современные методики присмотра в сочетании с интересной для детей архитектурой",
              },
              {
                secondName: "Аниматоры",
                text: "Международные стандарты развлечения и современные методики юмора в сочетании с высококлассным специалистами",
              },
            ],
          },
          {
            firstName: "Транспорт",
            arrOfSubList: [
              {
                secondName: "Самолёт",
                text: "На территории отеля есть аэропорт, который принимает все воздушные суда планеты Земля",
              },
              {
                secondName: "Автобус",
                text: "В отель можно добраться прямым рейсом из Симферополя на 52 автобусе за 2 часа 45 минут",
              },
            ],
          },
        ],
        arrOfImages: ["Facebook.png", "Twitter.png", "Instagram.png"],
        arrOfImage: ["Facebook2.png", "Twitter2.png", "Instagram2.png"],
        arrayOfButtonsNames: {
          name: "ПОДРОБНЕЕ",
          color: "#d9c287",
          colorText: "#fff",
        },
        ArrIndex: [
          require("@/assets/image/slider/1.png"),
          require("@/assets/image/slider/2.png"),
          require("@/assets/image/slider/3.png"),
        ],
      },
      introData: {
        color: "#",
        tag: "Family & Health Club",
        name: "Mriya Resort",
        tagRu: "Российский курорт для всей семьи на берегу черного моря",
        arrayOfButtonsNames: [
          {
            name: "НАЙТИ НОМЕР",
            color: "#d9c287",
            colorText: "#fff",
          },
          {
            name: "3D ТУР",
            color: "#fff",
          },
        ],
        arrOfImages: ["Facebook2.png", "Twitter2.png", "Instagram2.png"],
      },
      offerData: {
        offerText: "Выберите свой отдых",
        selectorText: "Семейный отдых",
        dataText: "пт, 8 мая — вс, 17 мая",
        filterText: ["2 взрослых", "•", "без детей", "•", "1 номер"],
        buttonText: "Найти",
        sectionsArr: ["Спецпредложения", "Афиша", "Категории отдыха"],
        sectionsArrowArr: ["Left.png", "Right.png"],
        sliderData: [
          [
            {
              imgPath: "1.png",
              text: "Для тех кто рядом",
              discount: 20,
            },
            {
              imgPath: "2.png",
              text: "Раннее бронирование",
              discount: 10,
            },
          ],
          [
            {
              imgPath: "2.png",
              text: "Для тех кто рядом",
              discount: 20,
            },
            {
              imgPath: "1.png",
              text: "Раннее бронирование",
              discount: 10,
            },
          ],
          [
            {
              imgPath: "11.png",
              text: "Семейный отдых",
            },
            {
              imgPath: "12.png",
              text: "Оздоровление",
            },
            {
              imgPath: "13.png",
              text: "Релакс и красота",
            },
            {
              imgPath: "14.png",
              text: "Новые впечатления",
            },
          ],
        ],
      },
      advertisingData: {
        engTagText: "Mriya Resort & SPA —",
        ruTagText: "больше чем просто отдых",
        description:
          "В окружении необычного природного ландшафта курорт становится по-настоящему уникальным. Это место идеально для тех, кто больше гор любит только море.",
        arrayOfButtonsNames: [
          {
            name: "О комплексе",
            color: "#fff",
          },
        ],
      },
      serviceData: {
        tagText: "Все включено",
        sectionsArrowArr: ["Left.png", "Right.png"],
        sliderData: [
          {
            ArrIndex: [
              [
                require("@/assets/image/slider/1.png"),
                require("@/assets/image/slider/2.png"),
                require("@/assets/image/slider/3.png"),
              ],
              [
                require("@/assets/image/slider/2.png"),
                require("@/assets/image/slider/3.png"),
                require("@/assets/image/slider/1.png"),
              ],
              [
                require("@/assets/image/slider/3.png"),
                require("@/assets/image/slider/2.png"),
                require("@/assets/image/slider/1.png"),
              ],
            ],
            leftArrIndex: [
              require("@/assets/image/slider/1.png"),
              require("@/assets/image/slider/2.png"),
              require("@/assets/image/slider/3.png"),
            ],
            middleArrIndex: [
              require("@/assets/image/slider/2.png"),
              require("@/assets/image/slider/3.png"),
              require("@/assets/image/slider/1.png"),
            ],
            rightArrIndex: [
              require("@/assets/image/slider/3.png"),
              require("@/assets/image/slider/2.png"),
              require("@/assets/image/slider/1.png"),
            ],
            leftImgPath: "1.png",
            leftText:
              "Занимайтесь в тренажерном зале и посещайте групповые тренировки",
            hyperLinkText: "ЧИТАТЬ БОЛЬШЕ",
            linkImg: "minus.png",
            middleImgPath: "1.png",
            middleText:
              "Питаться в ресторане шведской линии согласно выбранному варианту",
            rightImgPath: "1.png",
            rightText:
              "Исследовать все общедоступные зоны и территории комплекса",
            healthText: "Оздоровление",
            tagText:
              "Mriya Resort — это маленький город со множеством возможностей, каждый найдет себе занятие по вкусу",
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
@font-face {
  font-family: "Euclid Circular B";
  src: url("@/assets/Fonts/euclidcircularb/EuclidCircularB-Medium.ttf");
}
@font-face {
  font-family: "SangBleu Kingdom";
  src: url("@/assets/Fonts/SangBleu Kingdom/SangBleuKingdom-Regular-WebXL.otf");
}
@font-face {
  font-family: "SangBleu KingdomA";
  src: url("@/assets/Fonts/SangBleu Kingdom/SangBleuKingdom-Regular-WebXL.otf");
}
@media (max-width: 360px) {
  .burger {
    background-image: url("@/assets/image/Btn.png");
    width: 80px;
    height: 80px;
    margin-right: 100px;
    position: fixed;
  }
  .logoM {
    width: 80px;
    height: 80px;
    background-image: url("@/assets/image/logoM.png");
    margin-top: 10px;
    margin-left: 150px;
    background-repeat: no-repeat;
  }
  .key {
    width: 80px;
    height: 80px;
    margin-right: 15px;
    background-image: url("@/assets/image/KeyM.png");
  }
  .burgerCont {
    z-index: 7;
    position: fixed;
    width: 360px;
    height: 80px;
    display: flex;
    background-color: white;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 80px;
  }
  .backgroundImageLeft {
    width: 365px;
    height: 880px;
    margin-top: 1127px;
    background-image: url("@/assets/image/111.png");
  }
  .backgroundImageRight {
    width: 213px;
    height: 545px;
    background-size: cover;
    margin-top: -1590px;
    margin-left: 146px;
    background-image: url("@/assets/image/222.png");
  }
  .endM {
    z-index: 7;
    display: flex;
    width: 360px;
    height: 440px;
    flex-direction: column;
    margin-top: 1200px;
  }
  .endBuff {
    margin-top: -300px;
    position: absolute;
  }
  .vector {
    display: none;
  }
  .end {
    display: none;
  }
  .body {
    width: 360px;
    height: 3000px;
  }
}
@media (min-width: 1440px) {
  .burgerContM {
    display: none;
  }
  .body {
    font-family: "Euclid Circular B";
  }
  .burger {
    background-image: url("@/assets/image/Btn.png");
    width: 80px;
    height: 80px;
    position: fixed;
    margin-top: -80px;
    z-index: 7;
  }
  .logoM {
    display: none;
  }
  .key {
    display: none;
  }

  .burgerCont {
    z-index: 7;
    position: fixed;
  }

  .watermark {
    background-image: url("@/assets/image/watermark.png");
    width: 1531px;
    height: 253px;
    margin-top: 250px;
    background-repeat: no-repeat;
  }

  .logo {
    background-image: url("@/assets/image/logo.png");
    width: 66px;
    height: 56px;
    margin-bottom: 103px;
  }

  .end {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1531px;
    flex-direction: column;
    height: 942px;
    margin-top: -320px;
  }

  .vector {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 856px;
    margin-top: 250px;
  }

  .leftVector {
    background-image: url("@/assets/image/Vector1.png");
    width: 456px;
    height: 856px;
  }

  .rightVector {
    background-image: url("@/assets/image/Vector2.png");
    width: 313px;
    height: 856px;
    margin-left: 1200px;
    margin-top: 390px;
  }
}
</style>
