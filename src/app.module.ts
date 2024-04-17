import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HttpModule } from '@nestjs/axios';
import { UserModule } from './user/user.module';
import { ItemModule } from './item/item.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://root:root123@shoppinglist.c5cpgfv.mongodb.net/'),
    HttpModule,
    UserModule,
    ItemModule,
  ],
})
export class AppModule {}
