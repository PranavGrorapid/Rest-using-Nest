import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.model';
import { userUpdateDto } from './userUpdateDto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()


  async createUser(@Body() userDto:User){

     return this.appService.createUser(userDto)
  }


  @Get()


  async readUser(){

    return this.appService.readUser()
  }


  @Put(':id')

  async updateuser(@Param('id') id:string,  @Body() updatedData:userUpdateDto): Promise<User> {

     return this.appService.updateUser(id,updatedData)
  }

  @Delete(':id')


  async deleteUser(@Param('id') id:string){

     return this.appService.deleteUser(id)
  }


 
  
}
