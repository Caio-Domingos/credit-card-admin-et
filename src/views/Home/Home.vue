<template>
  <div id="Home">
    <h1>Card List</h1>
    <div class="card-list">
      <div class="card-content mb-5" v-for="(item, index) in cards" :key="index">
        <Card v-bind:card="item" />
        <div class="option-buttons-content">
          <a class="button is-warning mb-2" @click="goEdit(item.id)">
            <font-awesome-icon icon="edit" size="lg" />
          </a>
          <a class="button is-danger">
            <font-awesome-icon icon="times" size="lg" />
          </a>
        </div>
      </div>
      <div class="card-content">
        <Card v-bind:card="null" v-on:new-card="goNew()" />
      </div>
    </div>
  </div>
</template>

<script src="./Home.js"></script>

<style lang="scss" src="./Home.scss"></style>
