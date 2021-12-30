import { ApiProperty, PartialType } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class UserDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly full_name: string
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()    
    readonly identification: number
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    readonly celphone: number
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly email: string
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly password: string
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly departmen: string
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly city: string
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly neighborhood: string
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly residence_address: string
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    readonly salary: number
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    readonly other_income: number
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    readonly monthly_expenses: number
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    readonly financial_expenses: number
}

export class UserDtoUpdate extends PartialType(UserDto) { }

