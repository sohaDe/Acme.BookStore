import { mapEnumToOptions } from '@abp/ng.core';

export enum CountryIso3Code {
  AFG = 0,
  ALA = 1,
  ALB = 2,
  DZA = 3,
  ASM = 4,
  AND = 5,
  AGO = 6,
  AIA = 7,
  ATA = 8,
  ATG = 9,
  ARG = 10,
  ARM = 11,
  ABW = 12,
  AUS = 13,
  AUT = 14,
  AZE = 15,
  BHS = 16,
  BHR = 17,
  BGD = 18,
  BRB = 19,
  BLR = 20,
  BEL = 21,
  BLZ = 22,
  BEN = 23,
  BES = 24,
  BMU = 25,
  BTN = 26,
  BOL = 27,
  BIH = 28,
  BWA = 29,
  BVT = 30,
  BRA = 31,
  IOT = 32,
  BRN = 33,
  BGR = 34,
  BFA = 35,
  BDI = 36,
  KHM = 37,
  CMR = 38,
  CAN = 39,
  CPV = 40,
  CYM = 41,
  CAF = 42,
  TCD = 43,
  CHL = 44,
  CHN = 45,
  CXR = 46,
  CCK = 47,
  COL = 48,
  COM = 49,
  COG = 50,
  COD = 51,
  COK = 52,
  CRI = 53,
  CIV = 54,
  HRV = 55,
  CUB = 56,
  CUW = 57,
  CYP = 58,
  CZE = 59,
  DNK = 60,
  DJI = 61,
  DMA = 62,
  DOM = 63,
  ECU = 64,
  EGY = 65,
  SLV = 66,
  GNQ = 67,
  ERI = 68,
  EST = 69,
  ETH = 70,
  FLK = 71,
  FRO = 72,
  FJI = 73,
  FIN = 74,
  FRA = 75,
  GUF = 76,
  PYF = 77,
  ATF = 78,
  GAB = 79,
  GMB = 80,
  GEO = 81,
  DEU = 82,
  GHA = 83,
  GIB = 84,
  GRC = 85,
  GRL = 86,
  GRD = 87,
  GLP = 88,
  GUM = 89,
  GTM = 90,
  GGY = 91,
  GIN = 92,
  GNB = 93,
  GUY = 94,
  HTI = 95,
  HMD = 96,
  VAT = 97,
  HND = 98,
  HKG = 99,
  HUN = 100,
  ISL = 101,
  IND = 102,
  IDN = 103,
  IRN = 104,
  IRQ = 105,
  IRL = 106,
  IMN = 107,
  ITA = 108,
  JAM = 109,
  JPN = 110,
  JEY = 111,
  JOR = 112,
  KAZ = 113,
  KEN = 114,
  KIR = 115,
  KOR = 116,
  PRK = 117,
  KWT = 118,
  KGZ = 119,
  LAO = 120,
  LVA = 121,
  LBN = 122,
  LSO = 123,
  LBR = 124,
  LBY = 125,
  LIE = 126,
  LTU = 127,
  LUX = 128,
  MAC = 129,
  MDG = 130,
  MWI = 131,
  MYS = 132,
  MDV = 133,
  MLI = 134,
  MLT = 135,
  MHL = 136,
  MTQ = 137,
  MRT = 138,
  MUS = 139,
  MYT = 140,
  MEX = 141,
  FSM = 142,
  MDA = 143,
  MCO = 144,
  MNG = 145,
  MNE = 146,
  MSR = 147,
  MAR = 148,
  MOZ = 149,
  MMR = 150,
  NAM = 151,
  NRU = 152,
  NPL = 153,
  NLD = 154,
  NCL = 155,
  NZL = 156,
  NIC = 157,
  NER = 158,
  NGA = 159,
  NIU = 160,
  NFK = 161,
  MNP = 162,
  NOR = 163,
  OMN = 164,
  PAK = 165,
  PLW = 166,
  PSE = 167,
  PAN = 168,
  PNG = 169,
  PRY = 170,
  PER = 171,
  PHL = 172,
  PCN = 173,
  POL = 174,
  PRT = 175,
  PRI = 176,
  QAT = 177,
  MKD = 178,
  REU = 179,
  ROU = 180,
  RUS = 181,
  RWA = 182,
  BLM = 183,
  SHN = 184,
  KNA = 185,
  LCA = 186,
  MAF = 187,
  SPM = 188,
  VCT = 189,
  WSM = 190,
  SMR = 191,
  STP = 192,
  SAU = 193,
  SEN = 194,
  SRB = 195,
  SYC = 196,
  SLE = 197,
  SGP = 198,
  SXM = 199,
  SVK = 200,
  SVN = 201,
  SLB = 202,
  SOM = 203,
  ZAF = 204,
  SGS = 205,
  SSD = 206,
  ESP = 207,
  LKA = 208,
  SDN = 209,
  SUR = 210,
  SJM = 211,
  SWZ = 212,
  SWE = 213,
  CHE = 214,
  SYR = 215,
  TWN = 216,
  TJK = 217,
  TZA = 218,
  THA = 219,
  TLS = 220,
  TGO = 221,
  TKL = 222,
  TON = 223,
  TTO = 224,
  TUN = 225,
  TUR = 226,
  TKM = 227,
  TCA = 228,
  TUV = 229,
  UGA = 230,
  UKR = 231,
  ARE = 232,
  GBR = 233,
  UMI = 234,
  USA = 235,
  URY = 236,
  UZB = 237,
  VUT = 238,
  VEN = 239,
  VNM = 240,
  VGB = 241,
  VIR = 242,
  WLF = 243,
  ESH = 244,
  YEM = 245,
  ZMB = 246,
  ZWE = 247,
}

export const countryIso3CodeOptions = mapEnumToOptions(CountryIso3Code);
