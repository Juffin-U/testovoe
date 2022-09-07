<template>
  <button class="button" :style="{ backgroundColor: color, color: colorText }">
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  name: "buttonComponent",
  props: {
    buttonText: {
      type: String,
      require: true,
    },
    color: {
      type: String,
      require: true,
    },
    colorText: {
      type: String,
      require: true,
    },
  },
};
</script>

<style scoped>
@media (max-width: 360px) {
  .button {
    width: 156px;
    min-width: 156px;
    height: 64px;
    border-radius: 8px;
    box-shadow: none;
    outline: none;
    border: 1px solid #d9c287;
  }
}

@media (min-width: 1440px) {
  .button {
    width: 200px;
    min-width: 156px;
    height: 64px;
    border-radius: 8px;
    box-shadow: none;
    outline: none;
    border: 1px solid #d9c287;
  }
}
</style>
