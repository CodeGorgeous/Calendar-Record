"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const index_module_1 = require("./module/index.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(index_module_1.AppModule);
    await app.listen(2551);
}
bootstrap();
