<template>
  <div class="demo-test">
    <button class="btn btn-default" type="button" @click="handleUpdateTeam">修改团队</button>
    <ul>
      <li v-for="(value, key) in obj" :key="key">
        {{ key }} - {{ value }}
      </li>
    </ul>
    <fieldset align="left">
      <legend>标题</legend>
      <div>
        <demo />
      </div>
    </fieldset>
  </div>
</template>

<script>
import { Demo } from "./render-demo";
export default {
  name: "demo-test",

  components: { Demo },

  data() {
    return {
      obj: {
        id: 1,
        name: "jake",
        title: "frontend",
        age: 30
      }
    };
  },

  methods: {
    handleUpdateTeam() {
      this.r_updateTeam()
        .then(successMsg => {
          alert(successMsg);
        })
        .catch(errorMsg => {
          alert(errorMsg);
        });
    },

    async r_updateTeam() {
      return await this.$http
        .post("/updateTeam")
        .then(({ data }) => {
          if (data.code === 1) {
            return "请求成功!";
          }
          return Promise.reject(data.message || "请求失败");
        })
        .catch(error =>
          Promise.reject(typeof error === "object" ? error.message : error)
        );
    }
  }
};
</script>
