<template>
  <div>
    <div class="header">
      <b-jumbotron id="header-jumbotron" bg-variant="warning">
        <template slot="header">
          MTG App
        </template>
        <template slot="lead">
          A Magic: the Gathering bootstrap electron-vue application
        </template>
      </b-jumbotron>

      <div class="navigation-bar">
        <b-navbar toggleable="md" type="dark" variant="dark">
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="http://tappedout.net/">
              <div style="color: lightgray">
                TappedOut
              </div>
            </b-nav-item>
            <b-nav-item>{{currentTime}}</b-nav-item>
          </b-navbar-nav>
        </b-navbar>
      </div>
    </div>

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
      </b-container>
    </div>
  </div>
</template>

<script>
  const videos = [
    'https://www.youtube.com/embed/qws6_1_VeTw',
    'https://www.youtube.com/embed/rNRLqU4Z98o',
    'https://www.youtube.com/embed/BCcXMwwHEcU',
    'https://www.youtube.com/embed/lmQ0bmpHCKA',
    'https://www.youtube.com/embed/xLvvgjOVFAM',
    'https://www.youtube.com/embed/PGe7mGtoabc'
  ];
  export default {
    name: 'landing-page',
    data () {
      return {
        online: false,
        currentTime: ''
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
