<template>
    <div class="header">
        <div id="SexyHeader">
            <b-container fluid>
                <b-row>
                    <b-col>
                        <h1 class="float-left">
                            MTG Upkeep
                        </h1>
                    </b-col>
                    <b-col>
                        <b-nav-form class="search-bar float-right">
                            <b-form-input v-model="searchEntry" @keyup.enter.native="searchCard" size="md"
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
  export default {
    name: 'UpkeepHeader',
    props: {
      currentTime: {},
      searchCard: {},
      searchEntry: {}
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