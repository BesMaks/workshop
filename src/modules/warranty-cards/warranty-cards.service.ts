import { Injectable } from '@nestjs/common';
import { CreateWarrantyCardDto } from './dto/create-warranty-card.dto';
import { UpdateWarrantyCardDto } from './dto/update-warranty-card.dto';

@Injectable()
export class WarrantyCardsService {
    create(createWarrantyCardDto: CreateWarrantyCardDto) {
        return 'This action adds a new warrantyCard';
    }

    findAll() {
        return `This action returns all warrantyCards`;
    }

    findOne(id: number) {
        return `This action returns a #${id} warrantyCard`;
    }

    update(id: number, updateWarrantyCardDto: UpdateWarrantyCardDto) {
        return `This action updates a #${id} warrantyCard`;
    }

    remove(id: number) {
        return `This action removes a #${id} warrantyCard`;
    }
}
