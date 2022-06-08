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
        user: "",
        baseSalary:0,
        maxShoes: "",
        maxSlippers: "",
        priceShoes: "",
        priceSlippers: "",
        commissionSeller: "",
        totalSalarySecretary: "",
        priceHourSecretary: "",
        hoursExtraSecretary: "",
        commissionSales: "",
        salesMade: "",
        subsidyTransport: 117.172,
        hoursExtraAssembly: "",
        priceHourAssembly: "",


    },
    methods: {
        showSalary: function() {
            // if (this.user === "") {
            //     alert("Seleccione cargo")
            // } else if (this.user === "1") {
            //     alert(this.baseSalary)
            // } else {
            //     alert("Hola")
            // }
            
            this.users.forEach(element => {
                if (this.user === "") {
                    alert("Seleccione un cargo")
                } else if(this.user === element.id){ 
                    this.baseSalary = element.salary
                    alert(element.salary)
                }
            });
        },
        modifySalary: function(){
            this.users.forEach(element => {
                if (this.user == 0) {
                    alert("Seleccione un cargo") 
                 } else if(this.user == element.id){
                    element.salary = this.baseSalary;
                 } 
            });
            
        },
        sendPriceAssembly: function () {
            maxShoes = this.maxShoes
            maxSlippers = this.maxSlippers
            priceShoes = this.priceShoes
            priceSlippers = this.priceSlippers            
        },
        calculateSecretary: function () {
            let netSalarySecretary = 0
           const search = users.find(element => element.id == 2)
           this.priceHourSecretary = (search.salary / 30) / 8
           netSalarySecretary = this.hoursExtraSecretary * 1.80
           totalSalarySecretary = search.salary + netSalarySecretary           
        },
        calculateSeller: function () {
            let bonus = 0
            const search = users.find(element => element.id == 3)
            if(this.salesMade >= 5000000){
                bonus = search.salary * 0.1
            } else if(this.salesMade >= 10000000 ){
                bonus = search.salary * 0.2
            }
            totalSalarySeller = this.commissionSales + bonus + this.subsidyTransport
        },
        calculateAssembly: function () {
            let priceHourAssembly = 0
            const search = users.find(element => element.id == 4)
            priceHourAssembly = (search.salary / 30) / 8
            priceExtraAssembly = this.hoursExtraAssembly * priceHourAssembly
            //priceHourExtraAssembly
        },
        showComponent: function () {
            
        }
    },
    computed: {
        
    }
  })