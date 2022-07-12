//Exercício 1//a O construtor serve para criar e inicializar um objeto criado a partir de uma classe. Ele pode ser chamado com os valores passados via parâmetro, quando se cria uma nova instância de classe

//b Apareceu uma vez

//c getters - pega o atributo // setters - define

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

//Exercício 2
class Transaction {
    private date: string;
    private value: number;
    private description: string;
    
    constructor(date: string, value: number, description: string) {
      this.date = date;
      this.value = value;
      this.description = description
    }

  public getDescription():string { return this.description }
  public getValue():number { return this.value }
  public getDate():string { return this.date }

  }

  const transacao1:Transaction = new Transaction ("Deposito 1", 1000, "12/07/2022")
  console.log(transacao1);
  
