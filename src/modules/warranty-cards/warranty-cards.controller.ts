import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { WarrantyCardsService } from './warranty-cards.service';
import { CreateWarrantyCardDto } from './dto/create-warranty-card.dto';
import { UpdateWarrantyCardDto } from './dto/update-warranty-card.dto';

@Controller('warranty-cards')
export class WarrantyCardsController {
    constructor(private readonly warrantyCardsService: WarrantyCardsService) {}

    @Post()
    create(@Body() createWarrantyCardDto: CreateWarrantyCardDto) {
        return this.warrantyCardsService.create(createWarrantyCardDto);
    }

    @Get()
    findAll() {
        return this.warrantyCardsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.warrantyCardsService.findOne(+id);
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateWarrantyCardDto: UpdateWarrantyCardDto,
    ) {
        return this.warrantyCardsService.update(+id, updateWarrantyCardDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.warrantyCardsService.remove(+id);
    }
}
