import { Module } from '@nestjs/common';
import { CountriesModule } from './CountriesModule';

@Module({
  imports: [CountriesModule],
})
export class AppModule {}
