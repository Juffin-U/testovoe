<template>
  <div class="circle">
    <input
      class="content"
      type="image"
      :src="require(`@/assets/image/${image}`)"
    />
  </div>
</template>

<script>
export default {
  name: "socialButton",
  props: {
    image: {
      type: String,
      require: true,
    },
  },
};
</script>

<style scoped>
.circle {
  width: 64px;
  height: 64px;
  align-items: center;
  display: flex;
  justify-content: center;
}
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  width: auto;
  height: auto;
}
</style>
