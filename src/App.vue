<template>
  <div id="app" class="small-container">
    <div class="header">
      <h1>Personal Book List</h1>
    </div>
    <div class="description">
      <p
        class="lead"
      >Simply add a book title, author and a link to your favourite online store to purchase later. 🤓</p>
    </div>
    <new-book-form @add:book="addBook" />
    <book-table :books="books" @delete-book="deleteBook" @edit:book="editBook" />
  </div>
</template>

<script>
import BookTable from "@/components/BookTable.vue";
import NewBookForm from "@/components/NewBookForm.vue";

export default {
  name: "app",
  components: {
    BookTable,
    NewBookForm,
  },
  data() {
    return {
      books: [],
    };
  },

  mounted() {
    // Get Local Storage
    this.books = JSON.parse(localStorage.getItem("bookShelf") || "[]");
  },

  methods: {
    addBook: function (book) {
      const lastId =
        this.books.length > 0 ? this.books[this.books.length - 1].id : 0;

      const id = lastId + 1;
      const newBook = { ...book, id };
      this.books = [...this.books, newBook];

      // Store in local Storage
      localStorage.setItem(this.bookShelf, JSON.stringify(this.books));
    },
    deleteBook: function (id) {
      if (confirm("Do you really want to delete?")) {
        this.books = this.books.filter((book) => book.id !== id);
      }

      // Delete & Update local Storage
      localStorage.setItem(this.bookShelf, JSON.stringify(this.books));
    },
    editBook: function (id, updatedBook) {
      this.book = this.book.map((book) =>
        book.id === id ? updatedBook : book
      );
    },
  },
};
</script>

<style>
body {
  background: #35495e;
  color: #475050;
  font-weight: 300;
  font-family: "Montserrat", sans-serif;
}

h1 {
  color: white;
  text-align: center;
}

button {
  margin-top: 1em;
  background: #41b883;
  border: 1px solid #41b883;
  color: white;
}

button:hover {
  background-color: #41b883 !important;
  border: 1px solid #41b883 !important;
  border-radius: 0px;

  color: white;
}

label {
  color: #41b883;
}

.header {
  background: #41b883;
  margin: 0 0 1.5em 0;
  padding: 1em 2.5em;
}

.description {
  padding: 1em 3em;
}

.lead {
  font-size: 1.25rem;
  text-align: center;
}

.small-container {
  background: white;
  max-width: 780px;
  padding: 0;
  margin: 2rem auto;
  border-radius: 5px;
}
</style>