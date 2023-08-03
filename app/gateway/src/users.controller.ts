import {Controller, Get, Inject} from '@nestjs/common';
import {ClientProxy} from "@nestjs/microservices";
import {CACHE_MANAGER} from "@nestjs/cache-manager";
import { Cache } from "cache-manager"

@Controller('users')
export class UsersController {
    constructor(
        @Inject("USERS_SERVICE") private usersServiceClient: ClientProxy,
        @Inject(CACHE_MANAGER) private cacheManager: Cache
    ) {
    }
    @Get()
    findAll() {
        return this.usersServiceClient.send("findAllUsers", "all")
    }
}
