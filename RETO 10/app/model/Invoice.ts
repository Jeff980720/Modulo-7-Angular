import { Company } from "./Company";
import { Coustumer } from "./Coustumer";
import { InvoiceItem } from "./InvoiceItem";

export class Invoice{
    id!:String;
    company!:Company;
    customer!:Coustumer;
    item!:InvoiceItem[];
}