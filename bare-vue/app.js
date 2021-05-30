
const app = Vue.createApp({
    // template: '<h2>I am the template</h2>',





    // data + component methods (it reacts to events)

    // data is a function
    data() {
        return {
            books: [
                {
                    title: 'The Final Empire',
                    author: 'Brandon Sanderson',
                },

                {
                    title: 'The Way Of Kings',
                    author: 'Brandon Sanderson',
                },

                {
                    title: 'Name Of The Wind',
                    author: 'Patrick Rothfuss',
                },
            ],
            showBooks: false,
            x: 0,
            y: 0,
        }
    },

    // component method is an prop
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
        }
    },


});


// mount "object:app" to "dom:#app"
// implication: now the app object take full-control over the DOM
app.mount('#app')