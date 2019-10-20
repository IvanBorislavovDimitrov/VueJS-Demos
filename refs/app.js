window.onload = () => {
    var vue = new Vue({
        el: '#vue-app',
        data: {
            output: ''
        },
        methods: {
            readUsername: function() {
                console.log(this.$refs.username.value);
                this.output = this.$refs.username.value;
            }
        }
     });
};