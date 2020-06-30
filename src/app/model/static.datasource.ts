import { Product } from './product.model';
import { from, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class StaticDataSource{

    private products: Product[] = [
        new Product(1,'Ball','Cricket','Cricket Ball',50),
        new Product(2,'Bat','Cricket','Cricket Bat',3500),
        new Product(3,'Gloves','Cricket','Cricket Gloves',450),
        new Product(4,'Wicket','Cricket','Cricket Ball',879),
        new Product(5,'Ball','Cricket','Cricket Ball',789),
        new Product(6,'FootBall','Football','FootBall Ball',76),
        new Product(7,'Boots','Football','FootBall Ball',34),
        new Product(8,'Shoes','Football','FootBall Ball',56),
        new Product(9,'Helmet','Football','FootBall Ball',67),
        new Product(10,'Shocks','Football','FootBall Ball',24),
        new Product(11,'Racket','Badminton','Badminton Ball',456),
        new Product(12,'Net','Badminton','Badminton Ball',453),
        new Product(13,'Roks','Badminton','Badminton Ball',456),
        new Product(14,'Shoes','Badminton','Badminton Ball',654),
        new Product(15,'Glasses','Badminton','Badminton Ball',543),
        new Product(16,'Baseball','Baseball','Baseball Ball',234),
        new Product(17,'Bat','Baseball','Baseball Ball',234),
        new Product(18,'something','Baseball','Baseball Ball',231),
        new Product(19,'all','Baseball','Baseball Ball',764),
        new Product(20,'poster','Baseball','Baseball Ball',674),
        new Product(21,'Cycle','Cycling','Cycling Ball',123),
        new Product(22,'Brake','Cycling','Cycling Ball',54),
        new Product(23,'Light','Cycling','Cycling Ball',675),
        new Product(24,'Horn','Cycling','Cycling Ball',234),
        new Product(25,'Slipper','Cycling','Cycling Ball',566)
    ];

    public getProducts(): Observable<Product[]>{
        return from([this.products]);
    }
}