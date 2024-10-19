import { Module } from '@nestjs/common';
import { CountriesController } from 'src/controllers/CountriesController';

@Module({
  imports: [],
  controllers: [CountriesController],
  providers: [],
})
export class CountriesModule {}
