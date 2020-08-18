<template>
  <div class="wrap">
    <!-- <div style="margin-top: 10rem; text-align: center;">This is Test</div> -->
    <div class="txt">「{{ txt }}」</div>
    <SimpleForm initial-value="初期値だよ" @submit="onSubmit" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SimpleForm from '~/components/SimpleForm.vue'

export default {
  components: {
    SimpleForm,
  },
  computed: {
    ...mapGetters('test', ['txt']),
  },
  methods: {
    onSubmit(value) {
      // console.log(value);
      this.$store.dispatch('test/saveTxt', { text: value })
    },
  },
}
</script>

<style lang="scss" scoped>
.wrap {
  max-width: 40rem;
  margin: 0 auto;
}

.txt {
  margin: 10rem 0 2rem;
  text-align: center;
}
</style>
