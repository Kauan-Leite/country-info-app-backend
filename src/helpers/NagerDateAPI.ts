import axios from "axios";
import { CountryDTO } from "src/dtos/CountriesDTO";

export class NagerDateAPI {
  private static path = 'https://date.nager.at/api/v3';

  static async getAvailableCountries(): Promise<Array<CountryDTO>> {
    const response = await axios.get(`${this.path}/AvailableCountries`);
    return response.data;
  }
}