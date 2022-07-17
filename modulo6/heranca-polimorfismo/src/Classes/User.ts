class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
  
    constructor(id: string, email: string, name: string, password: string) {
      console.log("Chamando o construtor da classe User");
      this.id = id;
      this.email = email;
      this.name = name;
      this.password = password;
    }
  
    public getId(): string {
      return this.id;
    }
  
    public getEmail(): string {
      return this.email;
    }
  
    public getName(): string {
      return this.name;
    }
    public interoduceYourself(): string {
      return `Olá, sou ${this.name}. Bom dia!`;
    }
  }
// Exercício 1
/*
a) Seria possível imprimir a senha (password) atrelada a essa instância?
R: Sim
b) Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?
R: Foi impressa 1 vez


const user1 = new User("1", "email@email.com", "teste", "123456");
console.log(user1)

*/

