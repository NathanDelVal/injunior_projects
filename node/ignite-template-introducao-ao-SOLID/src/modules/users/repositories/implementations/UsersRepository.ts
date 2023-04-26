import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    // Complete aqui
    const user = new User();

    Object.assign(user, {
      "name": name,
      "email": email
    })

    this.users.push(user);

    return user;
  }

  findById(id: string): User | undefined {
    // Complete aqui
    return this.users.find((user) => {
      return user.id == id;
    });
  }

  findByEmail(email: string): User | undefined {
    // Complete aqui
    return this.users.find((user) => {
      return user.email == email;
  })
}

  turnAdmin(receivedUser: User): User {
    // Complete aqui
    const index = this.findById(receivedUser.id);

    if(index) {
      receivedUser.admin = true;

      let index = this.users.findIndex((user) => {
        return user.id == receivedUser.id;
      })

      this.users[index].admin = true;
      
      return receivedUser;
    }
    
    throw new Error("User not found!");
  }

  list(): User[] {
    // Complete aqui
    return this.users;
  }
}

export { UsersRepository };
