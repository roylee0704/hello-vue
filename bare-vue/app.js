
// - template data 
// - component methods (it reacts to events) 
// - computed prop
const app = Vue.createApp({
    // lesson 0 - template: '<h2>I am the template</h2>',

    // lesson 1 - data is a function
    data() {
        return {
            books: [
                {
                    title: 'Name Of The Wind',
                    author: 'Patrick Rothfuss',
                    img: 'assets/1.jpeg',
                    isFav: true,
                },
                {
                    title: 'The Way Of Kings',
                    author: 'Brandon Sanderson',
                    img: 'assets/2.jpeg',
                    isFav: false,
                },
                {
                    title: 'The Final Empire',
                    author: 'Brandon Sanderson',
                    img: 'assets/3.jpeg',
                    isFav: true,
                },
            ],
            showBooks: false,
            x: 0,
            y: 0,
        }
    },

    // lesson 2 - component method is an prop
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        },
        handleEvent(evt) {
            console.log(evt, evt.type);
        },
        handleMousemove(evt) {
            this.x = evt.offsetX;
            this.y = evt.offsetY;
        },
        toggleFav(book) {
            book.isFav = !book.isFav;
        }
    },

    // lesson 3 - computed prop depends on the data (above). 
    // its another layer of dynamicity on top of data.
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav);
        }
    }

});


// mount "object:app" to "dom:#app"
// implication: now the app object take full-control over the DOM
app.mount('#app')