import { Injectable } from '@nestjs/common';
import { CreateSparePartDto } from './dto/create-spare-part.dto';
import { UpdateSparePartDto } from './dto/update-spare-part.dto';

@Injectable()
export class SparePartsService {
  create(createSparePartDto: CreateSparePartDto) {
    return 'This action adds a new sparePart';
  }

  findAll() {
    return `This action returns all spareParts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sparePart`;
  }

  update(id: number, updateSparePartDto: UpdateSparePartDto) {
    return `This action updates a #${id} sparePart`;
  }

  remove(id: number) {
    return `This action removes a #${id} sparePart`;
  }
}
