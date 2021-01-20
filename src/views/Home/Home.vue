<template>
  <div id="Home">
    <h1>Card List</h1>
    <div class="card-list">
      <div class="card-content" v-for="(item, index) in cards" :key="index">
        <Card v-bind:card="item" />
        <div class="options-buttons-content">
          <button class="btn btn-edit">
            <font-awesome-icon icon="plus" size="lg" /></button
          ><button class="btn btn-delete">
            <font-awesome-icon icon="plus" size="lg" />
          </button>
        </div>
      </div>
      <div class="card-content">
        <Card v-bind:card="null" />
      </div>
    </div>
  </div>
</template>

<script src="./Home.js"></script>

<style lang="scss" src="./Home.scss"></style>
