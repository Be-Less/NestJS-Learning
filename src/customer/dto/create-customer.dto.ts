import { IsNumber, IsString } from "class-validator";

export class CreateCustomerDTO {
  @IsString()
  name: string;

  @IsNumber()
  age: number;
}
