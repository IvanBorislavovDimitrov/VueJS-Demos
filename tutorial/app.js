window.onload = function () {
    new Vue({
        el: '#vue-app',
        data: {
            name: 'Kondio',
            job: 'Singer'
        },
        methods: {
            greet: (timeOfDay) => {
                return `Greetings ${timeOfDay}`;
            }
        }
    });
}