import { mapEnumToOptions } from '@abp/ng.core';

export enum ThemeOptionType {
  Toogle = 0,
  ColorPicker = 1,
  Select = 2,
  Number = 3,
  UploadImage = 4,
  UploadListOfImages = 5,
  Url = 6,
  MultiSelect = 7,
  Text = 8,
  TranslatedText = 9,
}

export const themeOptionTypeOptions = mapEnumToOptions(ThemeOptionType);
