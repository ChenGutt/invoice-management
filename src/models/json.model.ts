import { Lines } from "./jsonLinesModel";

export class JsonModel {
    public document_type: string;
    public amount: number;
    public currency: string;
    public amountexvat: string;
    public purchasedate: string;
    public purchasetime: string;
    public vatamount: string;
    public paymentmethod: string;
    public invoice_number: string;
    public merchant_name: string;
    public merchant_coc_number: string;
    public merchant_vat_number: string;
    public lines: Lines[];

}
