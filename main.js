// Book constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}
//UI constructor
function UI() {}

UI.prototype.addBookToList = function (book) {
  const list = document.getElementById('book-list');
  const row = document.createElement('tr');
  row.innerHTML = `<td>${book.title}</td> <td>${book.author}</td> <td>${book.isbn}</td> <td><a href="#">X</a></td>`;

  list.appendChild(row);
};

UI.prototype.clearData = function () {
  const title = (document.getElementById('title').value = '');
  const author = (document.getElementById('author').value = '');
  const isbn = (document.getElementById('isbn').value = '');
};

UI.prototype.showAlert = function (msg, className) {
  //creating an element
  const div = document.createElement('div');
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(msg));

  //append before form
  const container = document.querySelector('.container');
  const form = document.getElementById('book-form');
  container.insertBefore(div, form);

  setTimeout(function () {
    document.querySelector('.alert').remove();
  }, 3000);
};

UI.prototype.deleteItem = function (target) {
  if ((target.className = 'delete')) {
    target.parentElement.parentElement.remove();
  }
};
// Event listners for adding book

document.getElementById('book-form').addEventListener('submit', addBook);

function addBook(e) {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;

  const book = new Book(title, author, isbn);

  const ui = new UI();

  if (title === '' || author == '' || isbn === '') {
    ui.showAlert('Please enter all the values', 'error');
  } else {
    ui.addBookToList(book);
    ui.clearData();
    ui.showAlert('Book added', 'success');
  }

  e.preventDefault();
}

// Event listners for deleting book

document.getElementById('book-list').addEventListener('click', deleteBook);

function deleteBook(e) {
  const ui = new UI();
  ui.deleteItem(e.target);
  ui.showAlert('Book removed', 'error');
  e.preventDefault();
}
