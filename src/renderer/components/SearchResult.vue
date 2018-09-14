<template>
  <div>
    <UpkeepHeader></UpkeepHeader>
    <b-container>
      <b-row>
        <b-col></b-col>
        <template v-for="card in images">
          <b-col>
            <img :src="card" style="display: flex; float: left;"/>
          </b-col>
        </template>
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
        json: {
          type: Object,
          required: true
        },
        // cardURL: '',
        mounted: false
      };
    },
    mounted () {
      this.json = this.$route.query.json;
      // this.cardURL = this.$route.query.json.image_uris.large;
      this.mounted = true;
    },
    computed: {
      images () {
        if (this.mounted) {
          let result = {};
          if (this.json.image_uris) {
            result[this.json.name] = this.json.image_uris.normal;
            return result;
          } else {
            for (const cardKey in this.json.card_faces) {
              const card = this.json.card_faces[cardKey];
              result[card.name] = card.image_uris.normal;
            }
            return result;
          }
        }
      }
    }
  };
</script>

<style scoped>

</style>
