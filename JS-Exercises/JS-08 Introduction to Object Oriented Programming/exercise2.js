/*
Exercise #2: The Reading List
Create an object-oriented book-list!

Start with an HTML page that has the title: My Book List.

Part 1 Book
In your Javascript file, create a class called Book. Each Book should have several properties:

Title
Genre
Author
Read (true or false)
Read date; can be blank, otherwise needs to be a JS Date() object
Add to your HTML page 2 books that reference the Book objects.*/

class Book {
    constructor(title, genre, author, read, read_date){
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read;
        this.read_date = read_date;
    }
    Print(){ return "El libro es: " + this.title + " de " + this.author + " del género " + this.genre + ". El estado de lectura es " + this.read + " y  la fecha de lectura es " + this.read_date;
    }
}
let Book1 = new Book("My Little Harry Prince Potter", "Fantasy", "Otto", false, "");
let Book2 = new Book("Star Hunger Game Wars", "Fantasy Sci-fi", "Otto", true, Date());

document.getElementById("Book1").innerHTML = Book1.Print();
document.getElementById("Book2").innerHTML = Book2.Print();

/*

Part 2 Booklist
In your Javascript file - create a class BookList.

BookLists should have the following properties:

Number of books marked as read
Number of books marked as not read yet
A reference to the next book to read (book object)
A reference to the current book being read (book object)
A reference to the last book read (book object)
An array of all the Books
Every Booklist should have a few methods:

.add(book)
should add a book to the books list.
.finishCurrentBook()
should mark the book that is currently being read as "read"
Give it a read date of new Date(Date.now())
Change the last book read to be the book that just got finished
Change the current book to be the next book to be read
Change the next book to be read property to be the first unread book you find in the list of books
Booklists and Books might need more methods than that. Try to think of more that might be useful.

Update your HTML page with a section that shows the name of your booklist, the number of books marked as read, and the next book to read.*/

class BookList { 
    
    constructor(numRead, numNotRead, nextBook, currentBook, lastBook, allBooks = []){
        this.numRead = numRead;
        this.numNotRead = numNotRead;
        this.nextBook = nextBook;
        this.currentBook = currentBook;
        this.lastBook = lastBook;
        this.allBooks = allBooks;
    }
    add(Book){
        this.allBooks.push(Book);
    }
    finishCurrentBook(){
        this.currentBook.read=true;
        this.currentBook.read_date=new Date(Date.now())
        this.lastBook =this.currentBook
        this.nextBook =
    }
}

let BookList1 = new BookList()