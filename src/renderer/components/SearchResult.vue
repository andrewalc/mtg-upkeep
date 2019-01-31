<template>
  <div>
    <UpkeepHeader></UpkeepHeader>
    <b-container>
      <b-row>
        <b-col></b-col>
        <b-col>
          <b-row>
            <template v-if="images.length < 2">
              <template v-for="card in images">
                <b-col>
                  <img :src="card" />
                </b-col>
              </template>
            </template>
            <template v-else>
              <template v-for="card in images">
                <b-col>
                  <img :src="card" style="display: flex; float: left;">
                </b-col>
              </template>
            </template>
          </b-row>
        </b-col>
        <b-col></b-col>
      </b-row>
      <b-row>
        <template v-for="card in images">
          <b-col class="card-info">
            <div>
              <b>{{cJson.name}} {{cJson.mana_cost}}</b>
              <br>
              <p>{{cJson.type_line}}</p>
              <p>{{cJson.oracle_text}}</p>
              <p><i>{{cJson.flavor_text}}</i></p>
              <p>Artist: {{cJson.artist}}</p>
            </div>
          </b-col>
        </template>
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
        let result = {};
        if (this.cJson.image_uris) {
          result[this.cJson.name] = this.cJson.image_uris.normal;
          return result;
        } else {
          for (const cardKey in this.cJson.card_faces) {
            const card = this.cJson.card_faces[cardKey];
            result[card.name] = card.image_uris.normal;
          }
          return result;
        }
      },
      cJson () {
        return this.mounted ? this.json : '';
      }
      // cardInfo () {
      //     if (this.mounted) {
      //         let result = {};
      //         return result;
      // }
    }
  };
</script>

<style scoped>
.card-info {
  color: white;
  background-color: #1f1f1f;
  width: 25%;
  height: 400px;
  padding-top: 25px;

}
</style>
