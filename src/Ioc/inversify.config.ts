import { Container } from "inversify";
import diTokens from "../constants/di-tokens";
import { User } from "../models/user-model";
import { EcommerceBoContract } from "../bo/ecommerce-bo-contract";
import { UsersBo } from "../bo/user-mongo-bo";
import { EcommerceControllerContract } from "../controller/ecommerce-controller-contract";
import { UsersController } from "../controller/user-controller";

const diContainer  = new Container()

diContainer.bind<EcommerceBoContract<User>>(diTokens.USER_BO_TOKEN).to(UsersBo)
diContainer.bind<EcommerceControllerContract>(diTokens.USER_CONTROLLER_TOKEN).to(UsersController)

export default diContainer