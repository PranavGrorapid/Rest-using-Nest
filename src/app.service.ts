import { Injectable } from '@nestjs/common';
import { User,UserDocument } from './user.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { promises } from 'dns';

@Injectable()
export class AppService {
 
     constructor( @InjectModel('user') private readonly  userModel : Model <UserDocument>){

      
     }

// creating a user

async createUser(user:User):Promise<User>{

    const newUser=new this.userModel(user)

    return newUser.save()

}

/// reading user

async readUser(){

   return this.userModel.find({}).then((user)=>{return user}).catch((err)=>{console.log(err);

   })

}

/// updating Data


async updateUser(id,data):Promise<User>{

return this.userModel.findByIdAndUpdate(id,data,{new:true})
}


// deleting user

async deleteUser(id){

   return this.userModel.findByIdAndDelete(id)


}







}
