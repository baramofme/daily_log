<template>
  <conso ref="conso"/>
</template>

<script>
var { Conso } = require("./vue-conso");
// import { Conso } from "vue-conso";

export default {
  name: "consol-box",
  props: {
    initScript: Array
  },
  components: {
    Conso
  },
  data() {
    return {};
  },
  computed: {
    consoleType: function() {
      return Conso.ConsoleType;
    }
  },
  mounted: function() {
    // this.$refs.conso.getInputElment().focus();
    // this.$refs.conso.storePush({
    //   type: this.consoleType.Input,
    //   content: this.initScript
    // });

    // 자동 focus 막기
    this.$refs.conso.$refs.input.disabled = true;

    console.log(this.$refs.conso.$refs);

    if (this.initScript) {
      this.initScript.forEach(script => {
        this.runScripts(script.script, script.hideResult);
      });

      this.$nextTick(() => {
        // console.log(this.$refs.conso.$refs);

        // focus 가능하게 하기
        this.$refs.conso.$refs.input.disabled = false;
      });
    }
  },
  methods: {
    runScripts(scriptText, hideResult) {
      scriptText.split("//").forEach(script => {
        this.$refs.conso.$refs["input"].value = script;
        this.$refs.conso.run();
        hideResult ? this.$refs.conso.store.pop() : "";
      });
    }
  }
};
</script>
