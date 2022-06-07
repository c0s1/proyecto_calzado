var app = new Vue({
    el: '#app',
    data: {
        watch: 0,
        user: [{
            rol: "administrator", password: "1111",
            rol: "secretary", password: "2222",
            rol: "seller", password: "3333",
            rol: "assembler", password: "4444",
        }],
    },
    methods: {
        showComponent: function () {
            
        }
    }
  })