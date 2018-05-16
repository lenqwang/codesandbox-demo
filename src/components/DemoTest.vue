<template>
  <div class="demo-test">
    <ul>
      <li v-for="(value, key) in obj" :key="key">
        {{ key }} - {{ value }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "demo-test",

  data() {
    return {
      obj: {
        id: 1,
        name: "jake",
        title: "frontend",
        age: 30
      }
    };
  }
};
</script>
