export type CountryDTO = {
  countryCode: string;
  name: string;
};

export type BorderDTO = {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
};

export type ResponseBorderDTO = BorderDTO & {
  borders: Array<BorderDTO>;
};

export type PopulationDTO = {
  country: string;
  code: string;
  iso3: string;
  populationCounts: Array<{ year: number; value: number }>;
};

export type FlagsDTO = {
  name: string;
  flag: string;
  iso2: string;
  iso3: string;
};

type CountriesNowResponseDTO = {
  error: boolean;
  msg: string;
};

export type ResponsePopulationDTO = CountriesNowResponseDTO & {
  data: PopulationDTO;
};

export type ResponseFlagsDTO = CountriesNowResponseDTO & {
  data: FlagsDTO;
};