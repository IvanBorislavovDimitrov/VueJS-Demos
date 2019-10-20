window.onload = () => {

    Vue.component('greeting', {
        template: '<h3>Bulgaria {{ name }}.<button v-on:click="changeName">Change</button></h3> ',
        data: function() {
            return {
                name: 'is the greatest country'
            };
        },
        methods: {
            changeName: function() {
                this.name = 'is awesome';
            }
        }
    });

    var vueOne = new Vue({
        el: '#vue-one',
        data: {
            title: 'This is the first instance'
        },
        methods: {

        }
     });
    
     var vueTwo = new Vue({
        el: '#vue-two',
        data: {
            title: 'This is the second instance'
        },
        methods: {
            
        }
     });
};