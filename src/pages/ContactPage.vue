<script>
import axios from 'axios';
const endpoint = 'http://localhost:8000/api/contact_message';
const emptyForm = { email: '', subject: '', message: '', subscribe: false };
export default {
  name: "ContactPage",
  data: () => ({
    form: emptyForm
  }),
  methods: {
    sendForm() {
      axios.post(endpoint, this.form)
        .then(() => {
          this.form = { email: '', subject: '', message: '', subscribe: false };
          this.emptyForm();
        })
    },
    emptyForm() {
      this.form = { email: '', subject: '', message: '', subscribe: false };
    }
  }
};
</script>

<template>
  <main>
    <div class="container">
      <h1 class="my-4">Contacts</h1>

      <form @submit.prevent="sendForm" novalidate>
        <div class="row">
          <div class="mb-3 col-6">
            <label for="email" class="form-label">Email address<sup class="text-danger">*</sup></label>
            <input v-model.trim="form.email" type="email" class="form-control" id="email" name="email" required />
          </div>
          <div class="mb-3 col-6">
            <label for="subject" class="form-label">Subject<sup class="text-danger">*</sup></label>
            <input v-model.trim="form.subject" type="text" class="form-control" id="subject" name="subject" required />
          </div>
          <div class="mb-3 col-12">
            <label class="form-label">Text Us!<sup class="text-danger">*</sup></label>
            <textarea v-model.trim="form.message" class="col-12 form-control" name="message" id="message"
              required></textarea>
          </div>
          <div class="mb-3 col-6">
            <input v-model="form.subscribe" type="checkbox" class="form-check-input me-2" id="subscribe" value="1"
              name="subscribe" />
            <label class="form-check-label" for="subscribe">Subscribe</label>
          </div>
          <div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  height: calc(100vh - 60px);
}
</style>
