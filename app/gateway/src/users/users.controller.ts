import {Controller, Get, Inject} from '@nestjs/common';
import {ClientProxy} from "@nestjs/microservices";

@Controller('users')
export class UsersController {
    constructor(@Inject("USERS_SERVICE") private usersServiceClient: ClientProxy) {
    }
    @Get()
    findAll() {
        return this.usersServiceClient.send("findAllUsers", "all")
    }
}
