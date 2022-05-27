import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './modules/users/users.module';
import { ConfigModule } from '@nestjs/config';
import { User } from './modules/users/models/users.model';
import { RolesModule } from './modules/roles/roles.module';
import { Role } from './modules/roles/models/roles.model';
import { UserRoles } from './modules/users/models/user-roles.model';
import { AuthModule } from './modules/auth/auth.module';
import { WarrantyCardsModule } from './modules/warranty-cards/warranty-cards.module';
import { SparePartsModule } from './modules/spare-parts/spare-parts.module';
import { MastersModule } from './modules/masters/masters.module';
import { DevicesModule } from './modules/devices/devices.module';
import { ManagersModule } from './modules/managers/managers.module';
import { ApplicationsModule } from './modules/applications/applications.module';

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`,
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [User, Role, UserRoles],
            autoLoadModels: true,
        }),
        UsersModule,
        RolesModule,
        AuthModule,
        WarrantyCardsModule,
        SparePartsModule,
        MastersModule,
        DevicesModule,
        ManagersModule,
        ApplicationsModule,
    ],
})
export class AppModule {}
