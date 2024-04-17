import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item } from './item.schema';

@Injectable()
export class ItemService {
  constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}

  async findAll(): Promise<Item[]> {
    return this.itemModel.find().exec();
  }

  async findById(id: string): Promise<Item> {
    return this.itemModel.findById(id).exec();
  }

  async create(item: Item): Promise<Item> {
    const createdItem = new this.itemModel(item);
    return createdItem.save();
  }

  async update(id: string, item: Item): Promise<Item> {
    return this.itemModel.findByIdAndUpdate(id, item, { new: true }).exec();
  }

  async delete(id: string): Promise<Item> {
    return this.itemModel.findByIdAndDelete(id).exec();
  }
}
