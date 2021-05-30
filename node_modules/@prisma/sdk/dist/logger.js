"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = exports.error = exports.info = exports.warn = exports.log = exports.should = exports.tags = void 0;
const chalk_1 = __importDefault(require("chalk"));
exports.tags = {
    error: chalk_1.default.red('prisma:error'),
    warn: chalk_1.default.yellow('prisma:warn'),
    info: chalk_1.default.cyan('prisma:info'),
    query: chalk_1.default.blue('prisma:query'),
};
exports.should = {
    warn: !process.env.PRISMA_DISABLE_WARNINGS,
};
function log(...data) {
    console.log(...data);
}
exports.log = log;
function warn(message, ...optionalParams) {
    if (exports.should.warn) {
        console.warn(`${exports.tags.warn} ${message}`, ...optionalParams);
    }
}
exports.warn = warn;
function info(message, ...optionalParams) {
    console.info(`${exports.tags.info} ${message}`, ...optionalParams);
}
exports.info = info;
function error(message, ...optionalParams) {
    console.error(`${exports.tags.error} ${message}`, ...optionalParams);
}
exports.error = error;
function query(message, ...optionalParams) {
    console.log(`${exports.tags.query} ${message}`, ...optionalParams);
}
exports.query = query;
//# sourceMappingURL=logger.js.map