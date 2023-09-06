import { StringValues } from "@proxy/volo/abp/validation";

export interface IFormFile {
  contentType?: string;
  contentDisposition?: string;
  // headers: Record<string, StringValues>;
  length: number;
  name?: string;
  fileName?: string;
}
