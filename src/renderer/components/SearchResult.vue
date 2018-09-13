<template>
    <div>
        <UpkeepHeader></UpkeepHeader>
    <b-container>
        <b-row>
            <b-col></b-col>
            <b-col>
                <img :src="searchResult"/>
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
    props: {
      searchResult: {
        type: String,
        required: true
      }
    }
  };
</script>

<style scoped>

</style>
