//Exercício 1//a O construtor serve para criar e inicializar um objeto criado a partir de uma classe. Ele pode ser chamado com os valores passados via parâmetro, quando se cria uma nova instância de classe

//b Apareceu uma vez

//c getters - pega o atributo // setters - define
class Transaction {
    private description: string 
    private value: number 
    private date: string

    constructor(description: string,
         value: number, date: string) {
            this.description = description, 
            this.value = value, 
            this.date = date }
}
class UserAccount {
    private cpf: string; 
    private name: string; 
    private age: number; 
    private balance: number = 0; 
    private transactions: Transaction[] = [];

    constructor(cpf: string, name: string, age: number,) { 
        console.log("Chamando o construtor da classe UserAccount") 
        this.cpf = cpf; 
        this.name = name; 
        this.age = age; 
    }
    public getCpf(): string { return this.cpf }
    public getName(): string { return this.name }
    public getAge(): number { return this.age }
    public getBalance(): number { return this.balance }
    public getTransactions(): Transaction[] { return this.transactions; }
}
const primeiroUsuario: UserAccount = new UserAccount("1", "lainermoura", 31);