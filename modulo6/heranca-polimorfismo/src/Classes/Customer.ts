import { User } from "./User";

export class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }
  }

    /*
  Exercício 2
  a) Quantas vezes a mensagem "Chamando o construtor da classe Customer" foi impressa no terminal? 
  R: Foi impresso uma vez

  b) Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal? Por quê?
  R: Uma vez porque está imprimindo a frase da classe pai.

  
  const customer1 = new Customer(
    "1",
    "email@email.com",
    "teste",
    "123456",
    "200"
  );
  console.log(customer1);
  
  Exercício 3
  a) Seria possível imprimir a senha (password) atrelada a essa instância? Por quê?
  R: Sim porque ela está se estendendo da classe User
  */