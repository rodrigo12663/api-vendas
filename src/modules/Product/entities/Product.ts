import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity('products')
export default class Product {
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
    updateAt: Date
}
