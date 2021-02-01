<template>
  <div class="home">
    <span @click="goPDF()">go pdf</span>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {

    }
  },
  methods: {
    goPDF() {
      this.$router.push({name: 'pdf'});
    }
  }
}
</script>
