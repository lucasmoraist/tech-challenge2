import { UserRepository } from "@/repositories/pg/user.repository";
import { UpdateRoleUseCase } from "../update-role";

export function makeUpdateRoleUseCase() {
    const userRepository = new UserRepository();
    const updateRoleUseCase = new UpdateRoleUseCase(userRepository);
    return updateRoleUseCase;
}