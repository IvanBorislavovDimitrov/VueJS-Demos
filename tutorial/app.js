window.onload = () => {
    var vue = new Vue({
        el: '#vue-app',
        data: {
            name: 'Kondio',
            job: 'Singer',
            website: 'https://google.com',
            websiteTag: '<a href="https://google.com">Tuka nqma</a>',
            age: 22,
            x: 0,
            y: 0
        },
        methods: {
            greet: function () {
                return `Greetings ${this.name}`;
            },
            add: function() {
                this.age++;
            },
            subtract: function() {
                this.age--;
            },
            updateMouse: function(event) {
                this.x = event.offsetX;
                this.y = event.offsetY;
            }
        }
     });
};