import { ApiProperty, PartialType } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class UserDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({description: 'Here you must enter the full name of the user'})
    readonly full_name: string
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({description: 'Here you must enter the user´s identification'})    
    readonly identification: number
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({description: 'Here you must enter the user´s cell phone number'})
    readonly celphone: number
    @IsString()
    @IsNotEmpty()
    @ApiProperty({description: 'Here you must enter the full name of the user'})
    readonly email: string
    @IsString()
    @IsNotEmpty()
    @ApiProperty({description: 'Here you must enter the full name of the user'})
    readonly password: string
    @IsString()
    @IsNotEmpty()
    @ApiProperty({description: 'Here you must enter the full name of the user'})
    readonly departmen: string
    @IsString()
    @IsNotEmpty()
    @ApiProperty({description: 'Here you must enter the full name of the user'})
    readonly city: string
    @IsString()
    @IsNotEmpty()
    @ApiProperty({description: 'Here you must enter the full name of the user'})
    readonly neighborhood: string
    @IsString()
    @IsNotEmpty()
    @ApiProperty({description: 'Here you must enter the full name of the user'})
    readonly residence_address: string
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({description: 'Here you must enter the full name of the user'})
    readonly salary: number
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({description: 'Here you must enter the full name of the user'})
    readonly other_income: number
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({description: 'Here you must enter the full name of the user'})
    readonly monthly_expenses: number
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({description: 'Here you must enter the full name of the user'})
    readonly financial_expenses: number
}

export class UserDtoUpdate extends PartialType(UserDto) { }

