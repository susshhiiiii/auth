"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roles = exports.ROLES_KEY = void 0;
const common_1 = require("@nestjs/common");
exports.ROLES_KEY = 'a7c943d30ea44a4ca13b8057363a3ef7f48cb2e2ec3d091ef84bf0c1636ee5ad0d178e778acd7ef92ae46b9b80ff94244cc5d6d96bff55be5c19532b76cca502';
const Roles = (...roles) => (0, common_1.SetMetadata)(exports.ROLES_KEY, roles);
exports.Roles = Roles;
//# sourceMappingURL=roles.decorator.js.map