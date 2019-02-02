<template>
  <div class="header">
    <div id="SexyHeader">
      <b-container fluid>
        <b-row>
          <b-col>
            <h1 class="float-left" @click="$router.push('/')">
              MTG Upkeep
            </h1>
          </b-col>
          <b-col>
            <b-nav-form class="search-bar float-right">
              <b-form-input ref="search-bar" v-model="searchEntry" @keyup.enter.native="searchCard" size="md"
                            class="mr-sm-2" type="text" placeholder="Begin your Search"/>
              <b-button size="md" class="my-2 my-sm-0" @click="searchCard">Search</b-button>
            </b-nav-form>
          </b-col>
        </b-row>

      </b-container>
    </div>

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
</template>
<script>
  const Scry = require('scryfall-sdk');
  export default {
    name: 'UpkeepHeader',
    data () {
      return {
        currentTime: '',
        searchEntry: ''
      };
    },
    mounted () {
      // Set the focus to the search bar whenever the page loads
      this.$refs['search-bar'].focus();
      // window.open('https://www.google.com');
      // Keep track of time
      setInterval(() => {
        this.updateTime();
      }, 500);
    },
    computed: {
      suggestedSearch () {
        let suggestions = [];
        Scry.Cards.autoCompleteName(this.searchEntry).then((results) => {
          for (const result of results) {
            suggestions.push(result);
            console.log(result);
            // Bloodscent
            // Blood Scrivener
            // Bloodscale Prowler
            // Burning-Tree Bloodscale
            // Ghor-Clan Bloodscale
          }
        });
        return suggestions;
      }
    },
    methods: {
      updateTime () {
        const date = new Date();
        const h = date.getHours();
        const m = date.getMinutes();
        // const s = date.getSeconds();
        const suffix = h >= 12 ? 'PM' : 'AM';
        const minAdj = m < 10 ? `0${m}` : m;
        this.currentTime = `${((h + 11) % 12 + 1)}:${minAdj} ${suffix}`;
      },
      searchCard () {
        Scry.Cards.byName(this.searchEntry, true).then(response => {
          try {
            let name = response.name;
            name = name.replace(/\s/g, '-');
            name = name.replace(/,/g, '');
            name = name.split('//').join('-');
            this.$router.push(
              {
                path: `/search-result/${name}`, query: {json: response}
              }
            );
          } catch (e) {
            console.warn(`${this.searchEntry} could not be found`);
            this.$router.push('/search-error');
          }
        });
      }
    }
  };
</script>
<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
  @import '../../../style.css';

  #SexyHeader {
    background-color: #1c75bc;
    color: #000000;
  }

  .search-bar {
    height: 100%;
  }

  h2 {
    color: white;
  }

</style>
