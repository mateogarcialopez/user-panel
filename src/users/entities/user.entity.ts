import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class user extends Document {
    @Prop({ type: String, required: true })
    full_name: string
    @Prop({ type: Number, unique: true })
    identification: number
    @Prop({ type: Number, required: true })
    celphone: number
    @Prop({ type: String, unique: true })
    email: string
    @Prop({ type: String, required: true, select: false})
    password: string
    @Prop({ type: String, required: true })
    departmen: string
    @Prop({ type: String, required: true })
    city: string
    @Prop({ type: String, required: true })
    neighborhood: string
    @Prop({ type: String, required: true })
    residence_address: string
    @Prop({ type: String, required: true })
    salary: string
    @Prop({ type: String, required: true })
    other_income: string
    @Prop({ type: String, required: true })
    monthly_expenses: string
    @Prop({ type: String, required: true })
    financial_expenses: string
}

export const userSchema = SchemaFactory.createForClass(user)