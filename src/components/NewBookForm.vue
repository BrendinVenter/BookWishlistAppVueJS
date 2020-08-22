<template>
  <div id="new-book-form">
    <form @submit.prevent="handleSubmit">
      <label>Title</label>
      <input
        ref="first"
        type="text"
        :class="{'has-error': submitting && invalidTitle}"
        v-model="book.title"
        @focus="clearStatus"
        @keypress="clearStatus"
      />
      <label>Author</label>
      <input
        type="text"
        :class="{'has-error': submitting && invalidAuthor}"
        v-model="book.author"
        @focus="clearStatus"
        @keypress="clearStatus"
      />
      <label>Buy Link</label>
      <input
        type="url"
        :class="{'has-error': submitting & invalidBuyLink}"
        v-model="book.buyLink"
        @focus="clearStatus"
        @keypress="clearStatus"
      />
      <p v-if="error && submitting" class="error-message">❗ Please fill out all required fields.</p>
      <p v-if="success" class="success-message">✔️ Book successfully added.</p>
      <button>Add Book</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "new-book-form",
  data() {
    return {
      submitting: false,
      success: false,
      error: false,
      book: {
        title: "",
        author: "",
        buyLink: "",
      },
    };
  },

  computed: {
    invalidTitle: function () {
      return this.book.title === "";
    },
    invalidAuthor: function () {
      return this.book.author === "";
    },
    invalidBuyLink: function () {
      return this.book.buyLink === "";
    },
  },

  methods: {
    handleSubmit: function () {
      this.submitting = true;

      // Refresh from input status
      this.clearStatus();

      // Check for empty fields
      if (this.invalidTitle || this.invalidAuthor || this.invalidBuyLink) {
        this.error = true;
        return;
      }

      // Create new book object from input fields and add to book table and books array
      this.$emit("add:book", this.book);
      this.$refs.first.focus();
      this.book = {
        title: "",
        author: "",
        buyLink: "",
      };
      this.error = false; // no error found
      this.success = true; // submit success
      this.submitting = false; // end of submit
    },
    clearStatus: function () {
      this.success = false;
      this.error = false;
    },
  },
};
</script>

<style scoped>
form {
  margin-bottom: 2em;
  padding: 1.5em;
}

[class*="-message"] {
  font-weight: 500;
}

.error-message {
  color: #eb3e5b;
}

.success-message {
  color: rgb(45, 168, 111);
}

#new-book-form {
  padding: 1em 2.5em;
}

input[type="text"],
input[type="url"] {
  border: none;
  border-bottom: 1px solid #303a52;
  border-radius: 0px;
}

textarea {
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1), 0 0 6px #40578d;
}

input.has-error {
  border-bottom: 1px solid #ff5959;
  box-shadow: none;
}

input[type="text"]:focus,
input[type="url"]:focus {
  border-bottom: 1px solid #40578d;
  border-radius: 0px;
  box-shadow: none;
}
</style>