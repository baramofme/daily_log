<template>
  <div class="ui-post-info d-flex">
    <div class="post-info-item">
      <CalendarIcon />
      {{ createdDate }}
    </div>
    <div
      class="post-info-item"
      v-if="timeToRead"
    >
      <ClockIcon />
      {{ timeToRead }}
    </div>
    <div class="post-info-item">
      <NavigationIcon />
      {{ location }}
    </div>
  </div>
</template>

<script>
import { NavigationIcon, ClockIcon, CalendarIcon } from "vue-feather-icons";

export default {
  components: { NavigationIcon, ClockIcon, CalendarIcon },
  props: ["date", "timeToRead", "location"],
  computed:{
    createdDate(){
      if(this.date) return new Date(this.date.trim()).toDateString();
      return '';
    },
  },
};
</script>

<style lang="stylus">
div.post-info-item {
  margin-right: 1rem;
  font-size: .8rem;

  svg {
    width: 17px;
    height: 17px;
  }
}
</style>