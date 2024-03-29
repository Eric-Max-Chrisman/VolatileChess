import { AppDataSource } from '../dataSource';
import { User } from '../entities/User';

const userRepository = AppDataSource.getRepository(User);

async function addUser(email: string, userName: string, passwordHash: string): Promise<User> {
  // Create the new user object
  let newUser = new User();
  newUser.email = email;
  newUser.userName = userName;

  newUser.passwordHash = passwordHash;

  // Then save it to the database
  // NOTES: We reassign to `newUser` so we can access
  // NOTES: the fields the database autogenerates (the id & default columns)
  newUser = await userRepository.save(newUser);

  return newUser;
}

async function getUserByEmail(email: string): Promise<User | null> {
  const user = await userRepository.findOne({
    where: { email },
    select: ['userId', 'userName', 'email', 'passwordHash'],
  });
  console.log(`User in getByEmail: ${user}`);
  // relations: ['sets', 'leaderBoards', 'customPieces'],
  return user;
}

async function getUserById(userId: string): Promise<User | null> {
  return await userRepository.findOne({ where: { userId } });
}

async function getUserByUsername(userName: string): Promise<User | null> {
  return await userRepository.findOne({
    where: { userName },
    select: ['userId', 'userName', 'email'],
  });
}

// check to see if works
async function updateEmailAdress(userId: string, email: string): Promise<User | null> {
  await userRepository
    .createQueryBuilder('user')
    .update(User)
    .where('userId = :userId', { userId })
    .set({ email })
    .execute();

  return await getUserById(userId);
}

export { addUser, getUserByEmail, getUserById, updateEmailAdress, getUserByUsername };
