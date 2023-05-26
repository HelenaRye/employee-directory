<template>
    <input type="text" placeholder="Search.." v-model="searchText">
</template>

<script>
export default {
  name: 'SearchEmployee'

}
</script>

<style scoped>

input {
  border-radius: 30px;
  border: 1px solid #BFBFB770;
  padding: 0rem 2rem;
  height: 2.5rem;
}

</style>