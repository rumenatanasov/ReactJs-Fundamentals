import dispatcher from '../dispatcher'
import { EventEmitter } from 'events'
import data from '../Data'
class BookStore extends EventEmitter {
    constructor(props) {
        super(props)

        this.books = data.books
    }
    createBook(image, title, description, author, price, date) {
        const id = this.books.length + 1
        this.books.push({
            id, image, title, description, author, price, date
        })
        this.emit('change')
    }
    getAll() {
        return this.books
    }
    getBookById(bookId) {
        bookId = Number(bookId)
        return this.books.filter(b => b.id === bookId)[0]
    }
    getBooksByAuthor(authorId) {
        authorId = Number(authorId)
        return this.books.filter(b => b.author === authorId)
    }
    deleteBook(id) {
        id = Number(id)
        let index = this.books.findIndex(i => i.id === id)
        this.books.splice(index, 1)

        this.emit('change')
    }
    handleAction(action) {
        switch (action.type) {
            case 'DELETE_BOOK': {
                this.deleteBook(action.id)
                break
            }
            case 'CREATE_BOOK': {
                this.createBook(action.id)
                break
            }
            default: break
        }
    }
}
let booksStore = new BookStore()
dispatcher.register(booksStore.handleAction.bind(booksStore))
export default booksStore
