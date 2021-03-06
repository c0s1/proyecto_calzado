var app = new Vue({
    el: '#app',
    data: {
        users: [
            { id: 1, rol: "administrador", pin: "1111", salary: 5500000, },
            { id: 2, rol: "secretario", pin: "2222", salary: 2200000, },
            { id: 3, rol: "vendedor", pin: "3333", salary: 1800000, },
            { id: 4, rol: "ensamblador", pin: "4444", salary: 1500000, },
        ],
        watchUser: 0,
        userRole: "",
        userPin: "",
        user: "",
        baseSalary:"",
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
        login: function () {
            if(this.userRole == "" || this.userPin == ""){
                alert("Ingresa los datos correctamente")
            }

            this.users.forEach((element) =>{
                if(element.id == this.userRole && element.pin == this.userPin){
                    switch (this.userRole) {
                        case 1:
                            this.watchUser = 1;
                            console.log(this.userRole)
                            break;
                        case 2:
                            this.watchUser = 2;
                            console.log(this.userRole)
                            break;
                        case 3:
                            this.watchUser = 3;
                            console.log(this.userRole)
                            break;
                        case 4:
                            this.watchUser = 4;
                            console.log(this.userRole)
                            break;                       
                    
                        default:
                            break;
                    }
                }
            });
        },
        close: function () {
           this.watchUser = 0;
           this.userRole = "" 
           this.userPin = "";
        },
        showSalary: function() {
            if (this.user == "") {
                alert("Seleccione un cargo");
            }
            this.users.forEach((element) => {
                if (element.id == this.user) {
                    this.baseSalary = element.salary
                }
            });
        },
        modifySalary: function(){
            if (this.user == 0) {
                alert("Seleccione un cargo") 
             }
            this.users.forEach((element) => {
                 if(element.id == this.user){
                    element.salary = this.baseSalary;
                    alert(`Salario modificado a ${element.salary}`)
                    this.user = ""
                    this.baseSalary = ""
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