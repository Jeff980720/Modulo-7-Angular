import { Category } from "./Category";

export class Product{
    id!:number;
    name!:String;
    price!:number;
    description!:String;
    category!:Category;
}