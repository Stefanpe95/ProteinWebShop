export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;

    constructor(id:number,name:string,description='',price=0,imageUrl='https://sc04.alicdn.com/kf/U2a2a2ff16f47426083abbb472e9ddc644.jpg'){
        this.id=id;
        this.name=name;
        this.description=description;
        this.price=price;
        this.imageUrl=imageUrl;
    }

    
}

