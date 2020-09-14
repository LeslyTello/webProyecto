import {IsAlpha, IsOptional, MaxLength} from "class-validator";

export class RolCreateDto {
    @IsAlpha()
    @IsOptional()
    @MaxLength(50)
    nombre?:string
}