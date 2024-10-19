import { Controller, Get, HttpStatus, Res, Version } from '@nestjs/common';
import { Response } from 'express';
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
        page: 1,
        pageSize: 10,
        totalElements: data.length,
        countries: data,
      });
    } catch (err) {
      return response
        .status(HttpStatus.BAD_REQUEST)
        .send({ message: `Error to get countries: ${err}` });
    }
  }
}
