import { verify, sign } from 'jsonwebtoken';
import { User } from 'src/modules/user/entities/user.entity';

export abstract class JwtUtils {

  static generateToken = async (user: User) => {

    const userPayload = {
      id: user.id,
      name: user.name,
      password: user.password,
      id_profile: user.id_profile
    }

    return sign(JSON.parse(JSON.stringify(userPayload)), process.env.GLOBAL_SALT_KEY!, { expiresIn: "1d" });

  }

  static decodeToken = (token: string) => {
    return verify(token, process.env.GLOBAL_SALT_KEY!);
  };
}
