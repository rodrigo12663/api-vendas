import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity('products')
class Product {
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column()
    name:string

    @Column('decimal')
    price:number

    @Column('int')
    quantity:number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}
export default Product
