/* eslint-disable prettier/prettier */
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import {bcrypt} from 'bcryptjs';

@Entity()
export class User {

  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'user_id',
  })
  id: number;

  @Column({
        type: 'varchar',
        nullable: false,
  })
  name: string;

  @Column({
    type: 'varchar',
    nullable: false,
    default: '',
  })
  username: string;
  
  @Column({
        type: 'varchar',
        nullable: false,
  })
  mobilenumber: string;

  @Column({
    type: 'varchar',
    name: 'email_address',
    nullable: false,
    default: '',
  })
  email: string;

  @Column({
    type: 'varchar',
    nullable: false,
    default: '',
  })
  password: string;

  @BeforeInsert()  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);  
}
}
