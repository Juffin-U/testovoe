<template>
  <div class="navItemHolder">
    <div class="burger"></div>
    <div class="itemHolder">
      <div class="links">
        <div class="link" v-for="link in arrayOfLinks" :key="link">
          {{ link }}
        </div>
      </div>
      <div class="navLogoCont">
        <div class="logo"></div>
        <div class="starsCont">
          <div class="stars"></div>
        </div>
      </div>
      <div class="languagePanel">
        <div
          class="language"
          v-for="language in arrayOfLanguage"
          :key="language"
        >
          {{ language }}
        </div>
      </div>
      <div class="enterPanel">
        <div class="key"></div>
        <div class="enter">
          <div class="enterText">{{ enterText }}</div>
          <div class="enterLine"><div class="enterLineImg"></div></div>
        </div>
      </div>
      <div class="number">{{ phoneNumber }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavMenuComp",
  props: {
    arrayOfLinks: {
      type: Array,
      require: true,
    },
    arrayOfLanguage: {
      type: Array,
      require: true,
    },
    enterText: {
      type: String,
      require: true,
    },
    phoneNumber: {
      type: String,
      require: true,
    },
  },
};
</script>

<style scoped>
@media (max-width: 360px) {
  .navItemHolder {
    justify-content: space-between;
    width: 360px;
    height: 80px;
    display: none;
    flex-direction: row;
  }
}
@media (min-width: 1440px) {
  .itemHolder {
    align-items: center;
    height: 80px;
    width: 1360px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  .burger {
    width: 80px;
    height: 80px;
  }
  .links {
    width: 470px;
    font-size: 24px;
    height: 24px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .navLogoCont {
    margin-top: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 73px;
    height: 75px;
  }

  .logo {
    width: 66px;
    height: 56px;
    background-image: url("@/assets/image/logo.png");
  }

  .starsCont {
    height: 14px;
    display: flex;
    justify-content: end;
    align-items: end;
  }

  .stars {
    width: 73px;
    height: 8px;
    background-image: url("@/assets/image/stars.png");
  }

  .languagePanel {
    width: 80px;
    height: 24px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .language {
    width: auto;
    height: 100%;
  }

  .enterPanel {
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

  .number {
    width: 117px;
    height: 24px;
    color: #ffffff;
  }
  .navItemHolder {
    justify-content: space-between;
    width: 1440px;
    height: 80px;
    display: flex;
    flex-direction: row;
  }
}
</style>
