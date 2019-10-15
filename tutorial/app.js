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
            y: 0,
            username: '',
            password: '',
            computed: '/computed.html',
            error: false,
            success: false
        },
        methods: {
            greet: function () {
                return `Greetings ${this.name}`;
            },
            add: function(years) {
                this.age += years;
            },
            subtract: function(years) {
                this.age -= years;
            },
            updateMouse: function(event) {
                this.x = event.offsetX;
                this.y = event.offsetY;
            },
            click: function() {
                alert('Do not trust anybody!!!')
            }
        }
     });
};