<template>
  <form @submit.prevent="handleSubmit">
    <label>Email:</label>
    <input type="email" required v-model="email" />

    <label>Password:</label>
    <input type="password" required v-model="password" />
    <div v-if="passwordError" class="error">{{ passwordError }}</div>

    <label>Role:</label>
    <select v-model="role">
      <option value="developer">Web Developer</option>
      <option value="designer">Web Designer</option>
    </select>

    <div class="terms">
      <input type="checkbox" v-model="terms" />
      <label>I agree to the terms and conditions</label>
    </div>

    <label>Skills</label>
    <input type="text" v-model="tempSkill" @keyup="addSkill" />
    <div class="pill" v-for="skill in skills" :key="skill">
      <span @click="deleteSkill(skill)">{{ skill }}</span>
    </div>

    <!-- <div>
      <input type="checkbox" value="roy" v-model="names" />
      <label>Roy</label>
    </div>
    <div>
      <input type="checkbox" value="foo" v-model="names" />
      <label>Foo</label>
    </div>
    <div>
      <input type="checkbox" value="bar" v-model="names" />
      <label>Bar</label>
    </div> -->

    <div class="submit">
      <button>Create an Account</button>
    </div>
  </form>

  <p>{{ email }}</p>
  <p>{{ password }}</p>
  <p>{{ role }}</p>
  <p>{{ terms }}</p>
  <p>{{ tempSkill }}</p>
  <p>{{ skills }}</p>

  <!-- <p>{{ names }}</p> -->
</template>

<script>
export default {
  name: "SignUpForm",
  data: () => ({
    email: "",
    password: "",
    role: "designer",
    terms: false,
    tempSkill: "",
    skills: [],
    passwordError: ""
    // names: []
  }),
  methods: {
    addSkill(e) {
      if (e.code !== "Comma") {
        return;
      }

      if (!this.tempSkill) {
        return;
      }
      const skill = this.tempSkill.slice(0, -1);

      if (this.skills.includes(skill)) {
        this.tempSkill = "";
        return;
      }

      this.skills.push(skill);
      this.tempSkill = "";
    },
    deleteSkill(skill) {
      this.skills.splice(this.skills.indexOf(skill), 1);
    },
    handleSubmit() {
      console.log("form submit....");

      this.passwordError =
        this.password.length < 5
          ? "Password must be at least 5 characters"
          : "";
    }
  }
};
</script>

<style>
form {
  max-width: 424px;
  margin: 30px auto;
  padding: 40px;
  text-align: left;
  background: white;
  letter-spacing: 1px;
  border-radius: 10px;
}

label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  text-transform: uppercase;
  font-size: 0.6em;
}

input,
select {
  width: 100%;
  display: block;
  border: none;
  border-bottom: 1px solid #ddd;
  padding: 10px 6px;
  box-sizing: border-box;
  color: #555;
}

input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}

.pill {
  display: inline-block;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  margin: 20px 10px 0 0;
  cursor: pointer;
  font-weight: bold;
  font: 12px;
  letter-spacing: 1px;
  color: #777;
}

button {
  margin: 20px;
  padding: 10px 20px;
  color: white;
  border: 0;
  background: #0b6dff;
  border-radius: 20px;
}
.submit {
  text-align: center;
}

.error {
  color: red;
  font-size: 0.8em;
  margin-top: 10px 0;
  font-weight: bold;
}
</style>