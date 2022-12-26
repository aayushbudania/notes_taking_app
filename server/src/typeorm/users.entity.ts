/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {

  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'user_id',
  })
  id: number;
  
  @Column({
        nullable: false,
  })
  name: string;

  @Column({
    nullable: false,
    default: '',
  })
  username: string;
  
  @Column({
        nullable: false,
  })
  mobilenumber: string;

  @Column({
    name: 'email_address',
    nullable: false,
    default: '',
  })
  email: string;

  @Column({
    nullable: false,
    default: '',
  })
  password: string;
}