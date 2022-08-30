import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
// import { myDataSource } from "../app-data-source"

@Entity("tb_profile")
export class Profile {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    gender: string

    @Column()
    photo: string
}

// const profile = new Profile()
// profile.gender = "male"
// profile.photo = "me.jpg"
// await dataSource.manager.save(profile)

// const user = new User()
// user.name = "Joe Smith"
// user.profile = profile
// await dataSource.manager.save(user)