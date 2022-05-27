import { PartialType } from '@nestjs/swagger';
import { CreateWarrantyCardDto } from './create-warranty-card.dto';

export class UpdateWarrantyCardDto extends PartialType(CreateWarrantyCardDto) {}
