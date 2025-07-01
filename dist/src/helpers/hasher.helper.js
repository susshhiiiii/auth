"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToHashPassword = ToHashPassword;
exports.ComparePassword = ComparePassword;
const bcrypt = require("bcrypt");
const constantsss_1 = require("../../constantsss");
function ToHashPassword(password) {
    const hashPassword = bcrypt.hash(password, constantsss_1.SaltOrRounds);
    return hashPassword;
}
function ComparePassword(insertedPassword, actualPassword) {
    return bcrypt.compare(insertedPassword, actualPassword);
}
//# sourceMappingURL=hasher.helper.js.map