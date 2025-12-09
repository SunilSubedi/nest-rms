import { Injectable } from "@nestjs/common";
import { OnEvent } from "@nestjs/event-emitter";
import { EmailService } from "src/email/email.service";

@Injectable()
export class UserRegisteredListener {

    constructor(private readonly emailService: EmailService){}

    @OnEvent('user.registered')
    handleUserRegistered(payload: any){

        this.emailService.sendUserRegisterEmail(payload)

    }
      
}