<template>
  <div id="book-table">
    <p v-if="books.length < 1" class="empty-table">No books found.</p>
    <table v-else>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Buy Link</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books" :key="book.id">
          <!-- Book Title Edit/Delete -->
          <td v-if="editing === book.id">
            <input type="text" v-model="book.title" />
          </td>
          <td v-else>{{ book.title }}</td>
          <!-- Book Author Edit/Delete -->
          <td v-if="editing === book.id">
            <input type="text" v-model="book.author" />
          </td>
          <td v-else>{{ book.author }}</td>
          <!-- Book Buy Link Edit/Delete -->
          <td v-if="editing === book.id">
            <input type="text" v-model="book.buyLink" />
          </td>
          <td v-else>
            <a :href="book.buyLink" target="_blank">Buy Now</a>
          </td>
          <!-- Action Buttons - Edit/Delete -->
          <td v-if="editing === book.id">
            <button @click="editBook(book)">Save</button>
            <button class="muted-button" @click="editing = null">Cancel</button>
          </td>
          <td v-else>
            <button @click="editMode(book.id)">Edit</button>
            <button @click="$emit('delete-book', book.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "book-table",
  props: {
    books: Array,
  },
  data() {
    return {
      editing: null,
    };
  },

  methods: {
    editMode: function (id) {
      this.editing = id;
    },
    cancelEdit: function (book) {
      Object.assign(book, this.cachedBook);
      this.editing = null;
    },

    editBook: function (book) {
      if (book.title === "" || book.author === "" || book.buyLink === "")
        return;
      this.$emit("edit-book", book.id, book);
      this.editing = null;

      // / Update local Storage
      localStorage.setItem(this.bookShelf, JSON.stringify(this.books));
    },
  },
};
</script>

<style scoped>
button {
  margin: 0 0.5rem 0 0;
}

a {
  line-height: 1;
  margin: 0px 0.5rem 0px 0px;
  overflow: visible;
  text-transform: none;
  appearance: none;
  box-sizing: inherit;
  display: inline-block;
  border: 1px solid #41b883;
  border-radius: 4px;
  background: #41b883;
  color: white;
  font-weight: 600;
  padding: 0.75em 1.25em;
  vertical-align: middle;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
}

a:hover {
  background-color: #41b883 !important;
  border: 1px solid #41b883 !important;
  border-radius: 0px;
  color: white;
}

input {
  margin: 0;
}

.empty-table {
  text-align: center;
}

#book-table {
  padding: 1em 2.5em;
}
</style>