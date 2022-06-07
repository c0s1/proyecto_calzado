var app = new Vue({
    el: '#app',
    data: {
        watch: 0,
        users: [{
            id: 1, rol: "administrator", password: "1111", salary: 5500000,
            id: 2, rol: "secretary", password: "2222", salary: 2200000,
            id: 3, rol: "seller", password: "3333", salary: 1800000,
            id: 4, rol: "assembler", password: "4444", salary: 1500000,
        }],
        user: 0,
        baseSalary:0,
    },
    methods: {
        modifySalary: function(){
            this.users.array.forEach(element => {
                if (this.user == 0) {
                    alert("Seleccione un cargo") 
                 } else if(this.user == element.id){
                    element.salary = this.baseSalary;
                 } 
            });
            
        },
        showComponent: function () {
            
        }
    }
  })