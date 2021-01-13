import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity('products')
class Product {
    @PrimaryGeneratedColumn('uuid')
    private id:string

    @Column()
    private name:string

    @Column('decimal')
    private price:number

    @Column('int')
    private quantity:number

     @CreateDateColumn()
     private createdAt: Date

     @UpdateDateColumn()
     private updatedAt: Date
}
export default Product
