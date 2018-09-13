<template>
  <div>
      <UpkeepHeader :current-time="currentTime" :search-card="searchCard" :search-entry="searchEntry"/>

    <div class="contents">
      <b-container>
        <b-row id="carousel-row">
          <b-col></b-col>
          <b-col cols="12">
            <div id="carousel-container">
              <b-carousel id="header-carousel"
                          style="text-shadow: 1px 1px 2px #333;"
                          controls
                          indicators
                          background="#aaaaa"
                          :interval="5000">
                <b-carousel-slide img-src= "https://magic.wizards.com/sites/mtg/files/images/featured/EN_UnchartedRealms_Header_0.jpg">
                  <h1 style="float: left;">Featured Video:</h1>
                  <div id="featured-video">
                    <b-embed type="iframe"
                             aspect="16by9"
                             :src="featuredVideo">
                    </b-embed>
                  </div>
                  <br>
                  <br>
                </b-carousel-slide>
                <!-- Text slides with image -->
                <b-carousel-slide caption="Guilds of Ravnica Spoilers"
                                  text="New spoilers released weekly!"
                                  img-src="https://media.wizards.com/2018/grn/mQkhNUOYSj.jpg">

                </b-carousel-slide>
                <!-- Slides with custom text -->
                <b-carousel-slide caption="Endless Magic Card Browser"
                                  text="Discover more cards for your brew!"
                                  img-src="https://media.wizards.com/2018/images/magic/C18/zlzQ1BIMLd_Preloader.jpg">
                </b-carousel-slide>
                <b-carousel-slide caption="EDH Deck Builders Hub"
                                  text="View and mange your decks here."
                                  img-src= "https://magic.wizards.com/sites/mtg/files/images/featured/EN_UnchartedRealms_Header_0.jpg">
                </b-carousel-slide>

              </b-carousel>
            </div>
          </b-col>
          <b-col></b-col>
        </b-row>
        <b-row>
          <b-col></b-col>
          <b-col>
            <img :src="imageUrl"/>
          </b-col>
          <b-col></b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
  import UpkeepHeader from './UpkeepHeader';

  const videos = [
    'https://www.youtube.com/embed/qws6_1_VeTw',
    'https://www.youtube.com/embed/rNRLqU4Z98o',
    'https://www.youtube.com/embed/BCcXMwwHEcU',
    'https://www.youtube.com/embed/lmQ0bmpHCKA',
    'https://www.youtube.com/embed/xLvvgjOVFAM',
    'https://www.youtube.com/embed/PGe7mGtoabc'
  ];
  const Scry = require('scryfall-sdk');
  export default {
    name: 'landing-page',
    components: {UpkeepHeader},
    data () {
      return {
        online: false,
        currentTime: '',
        imageUrl: '',
        searchEntry: ''
      };
    },
    mounted () {
      // window.open('https://www.google.com');
      // Keep track of time
      setInterval(() => {
        this.updateTime();
      }, 500);
    },
    computed: {
      featuredVideo () {
        return videos[Math.floor(Math.random() * videos.length)];
      }
    },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link);
      },
      searchCard () {
        Scry.Cards.byName(this.searchEntry, true).then(response => {
          try {
            this.imageUrl = response.image_uris.large;
          } catch (e) {
            console.warn(`${this.searchEntry} could not be found`);
            this.$router.push('/search-error');
          }
        });
      },
      updateTime () {
        const date = new Date();
        const h = date.getHours();
        const m = date.getMinutes();
        // const s = date.getSeconds();
        const suffix = h >= 12 ? 'PM' : 'AM';
        const minAdj = m < 10 ? `0${m}` : m;
        this.currentTime = `${((h + 11) % 12 + 1)}:${minAdj} ${suffix}`;
      }
    }
  };
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
  @import '../../../style.css';

  h2 {
    color: white;
  }

  #header-jumbotron {
    padding-top: 30px;
    padding-bottom: 5px;
    margin-bottom: 0px;
  }

</style>
