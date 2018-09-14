<template>
  <div>
    <UpkeepHeader></UpkeepHeader>
    <b-container>
      <b-row>
        <b-col></b-col>
        <b-col>
          <img :src="cardURL"/>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>

</template>

<script>
  import UpkeepHeader from './UpkeepHeader';

  export default {
    name: 'SearchResult',
    components: {UpkeepHeader},
    data () {
      return {
        cardURL: {
          type: String,
          required: true
        }
      };
    },
    mounted () {
      this.cardURL = this.$route.query.cardJSON.image_uris.large;
    }
  };
</script>

<style scoped>

</style>
