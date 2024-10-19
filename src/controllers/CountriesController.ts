import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
  Version,
} from '@nestjs/common';
import { Response } from 'express';
import { CountriesNowAPI } from 'src/helpers/CountriesNowAPI';
import { NagerDateAPI } from 'src/helpers/NagerDateAPI';

@Controller('/countries')
export class CountriesController {
  constructor() {}

  @Get('/')
  @Version('0')
  async getCountries(@Res() response: Response) {
    try {
      const data = await NagerDateAPI.getAvailableCountries();

      return response.status(HttpStatus.BAD_REQUEST).send({
        totalElements: data.length,
        countries: data,
      });
    } catch (err) {
      const { status, title } = err.response.data;

      return response
        .status(status || HttpStatus.BAD_REQUEST)
        .send({ message: `Error to get countries: ${title}` });
    }
  }

  @Get('/:countryCode/infos')
  @Version('0')
  async getDetailedCountry(
    @Res() response: Response,
    @Param() params
  ) {
    const { countryCode } = params
    
    try {
      const borderInfo = await NagerDateAPI.getBorderCountry(countryCode);
      const populationInfo = await CountriesNowAPI.getPopulation(borderInfo.commonName);
      const flagInfo = await CountriesNowAPI.getFlag(borderInfo.commonName);

      return response.status(HttpStatus.BAD_REQUEST).send({
        ...borderInfo,
        flag: flagInfo.data.flag,
        populationCounts: populationInfo.data.populationCounts,
      });
    } catch (err) {
      console.log(err);
      
      const { status, title } = err.response.data;

      return response
        .status(status || HttpStatus.BAD_REQUEST)
        .send({ message: `Error to get countries: ${title || 'Failed'}` });
    }
  }
}
