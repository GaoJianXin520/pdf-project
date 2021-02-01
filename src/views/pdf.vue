<template>
  <div class="home">
    <iframe :src="`/pdf/web/viewer.html?file=${url}`" frameborder="0" width="100%" height="600"></iframe>
  </div>
</template>

<script>
export default {
  name: 'pdf',
  data() {
    return {
      url: 'http://localhost:8080/protocol.pdf',
    }
  }
}
</script>
