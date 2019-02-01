<template>
  <div>
    <UpkeepHeader></UpkeepHeader>
    <b-container>
      <!-- If two or more images or split card, display in row with info underneath -->
      <template v-if="cJson.layout == 'split' || cJson.layout == 'planar' || Object.keys(images).length > 1">
          <b-row>
              <template v-for="card in images">
                <b-col class="mx-auto text-center">
                  <template v-if="cJson.layout == 'split' || cJson.layout == 'planar'">
                    <div >
                      <img class="horizontal-card-img" :src="card" style="">
                    </div>
                  </template>
                  <template v-else>
                    <img :src="card" style="">
                  </template>
                </b-col>
              </template>
          </b-row>
          <b-row>
            <template v-if="cJson.hasOwnProperty('card_faces')">
              <template v-for="cardFace in cJson.card_faces">
                <b-col class="card-info">
                  <div>
                    <b>{{cardFace.name}} {{cardFace.mana_cost}}</b>
                    <br>
                    <p>{{cardFace.type_line}}</p>
                    <p>{{cardFace.oracle_text}}</p>
                    <p><i>{{cardFace.flavor_text}}</i></p>
                    <p>Artist: {{cardFace.artist}}</p>
                  </div>
                </b-col>
              </template>
            </template>
            <template v-else>
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
      </template>
      <!-- Single card image, display card info on the side -->
      <template v-else>
        <b-row>
          <b-col class="mx-auto text-center">
            <template v-for="card in images">
              <b-col>
                <img :src="card" />
              </b-col>
            </template>
          </b-col>
          <template v-if="cJson.hasOwnProperty('card_faces')">
            <template v-for="cardFace in cJson.card_faces">
              <b-col class="card-info">
                <div>
                  <b>{{cardFace.name}} {{cardFace.mana_cost}}</b>
                  <br>
                  <p>{{cardFace.type_line}}</p>
                  <p>{{cardFace.oracle_text}}</p>
                  <p><i>{{cardFace.flavor_text}}</i></p>
                  <p>Artist: {{cardFace.artist}}</p>
                </div>
              </b-col>
            </template>
          </template>
          <template v-else>
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
      </template>
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
    }
  };
</script>

<style scoped>
.card-info {
  color: white;
  background-color: #1f1f1f;
  width: 25%;
  padding-top: 25px;
  padding-bottom: 15px;
}
  .horizontal-card-img {
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
  }
</style>
