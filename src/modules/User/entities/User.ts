import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('users')
export default class User {
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column()
    name:string

    @Column()
    email:string

    @Column()
    password:string

    @Column()
    avatar:string

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updateAt:Date
}
