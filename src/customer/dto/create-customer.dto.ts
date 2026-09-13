import { IsInt, IsNumber, IsString } from "class-validator";

export class CreateCustomerDTO {
  @IsString()
  name: string;

  @IsInt()
  age: number;
}
