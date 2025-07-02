import { SetMetadata } from "@nestjs/common"
import { Role } from "src/user/entities/user.schema"

export const ROLES_KEY = 'a7c943d30ea44a4ca13b8057363a3ef7f48cb2e2ec3d091ef84bf0c1636ee5ad0d178e778acd7ef92ae46b9b80ff94244cc5d6d96bff55be5c19532b76cca502'

export const Roles=(...roles:Role[])=>SetMetadata(ROLES_KEY,roles)