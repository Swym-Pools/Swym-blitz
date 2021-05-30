"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Generator = void 0;
const generator_helper_1 = require("@prisma/generator-helper");
class Generator {
    constructor(executablePath, config, isNode) {
        this.manifest = null;
        this.config = config;
        this.generatorProcess = new generator_helper_1.GeneratorProcess(executablePath, isNode);
    }
    async init() {
        await this.generatorProcess.init();
        this.manifest = await this.generatorProcess.getManifest(this.config);
    }
    stop() {
        this.generatorProcess.stop();
    }
    generate() {
        if (!this.options) {
            throw new Error(`Please first run .setOptions() on the Generator to initialize the options`);
        }
        return this.generatorProcess.generate(this.options);
    }
    setOptions(options) {
        this.options = options;
    }
    setBinaryPaths(binaryPaths) {
        if (!this.options) {
            throw new Error(`Please first run .setOptions() on the Generator to initialize the options`);
        }
        this.options.binaryPaths = binaryPaths;
    }
}
exports.Generator = Generator;
//# sourceMappingURL=Generator.js.map