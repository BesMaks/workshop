import { Module } from '@nestjs/common';
import { WarrantyCardsService } from './warranty-cards.service';
import { WarrantyCardsController } from './warranty-cards.controller';

@Module({
  controllers: [WarrantyCardsController],
  providers: [WarrantyCardsService]
})
export class WarrantyCardsModule {}
