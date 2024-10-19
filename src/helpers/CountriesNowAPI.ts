import axios from 'axios';
import { ResponseFlagsDTO, ResponsePopulationDTO } from 'src/dtos/CountriesDTO';

export class CountriesNowAPI {
  private static path = process.env.COUNTRIES_NOW_BASE_URL;

  static async getPopulation(
    countryName: string,
  ): Promise<ResponsePopulationDTO> {
    const response = await axios.post(`${this.path}/population`, {
      country: countryName,
    });
    return response.data;
  }

  static async getFlag(countryName: string): Promise<ResponseFlagsDTO> {
    const response = await axios.post(`${this.path}/flag/images`, {
      country: countryName,
    });
    return response.data;
  }
}
