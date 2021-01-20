<template>
  <div id="Authentication">
    <h3>Please, sign in before enter in the aplication</h3>
    <form id="auth-form" v-on:submit.prevent="login">
      <div class="field">
        <p class="control has-icons-left">
          <input class="input" v-model="username" type="text" placeholder="Username" />
          <span class="icon is-small is-left">
            <font-awesome-icon icon="user" size="lg" />
          </span>
        </p>
      </div>
      <div class="field">
        <p class="control has-icons-left">
          <input class="input" v-model="password" type="password" placeholder="Password" />
          <span class="icon is-small is-left">
            <font-awesome-icon icon="lock" size="lg" />
          </span>
        </p>
      </div>
      <button type="submit" class="button is-success">Sign in</button>
    </form>
  </div>
</template>

<script src="./Authentication.js"></script>

<style lang="scss" src="./Authentication.scss"></style>
