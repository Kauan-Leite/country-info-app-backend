import axios from "axios";
import { CountryDTO, ResponseBorderDTO } from "src/dtos/CountriesDTO";

export class NagerDateAPI {
  private static path = process.env.NAGER_DATE_BASE_URL;

  static async getAvailableCountries(): Promise<Array<CountryDTO>> {
    const response = await axios.get(`${this.path}/AvailableCountries`);
    return response.data;
  }

  static async getBorderCountry(
    countryCode: string,
  ): Promise<ResponseBorderDTO> {
    const response = await axios.get(`${this.path}/CountryInfo/${countryCode}`);
    return response.data;
  }
}