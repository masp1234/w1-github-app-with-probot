import "reflect-metadata"
import { DataSource } from "typeorm"
import { Photo } from "../entities/Photo"

const dataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "testuser",
    password: "testpassword",
    database: "testdb",
    entities: [Photo],
    synchronize: true,
    logging: false,
})

if (!dataSource.isInitialized) {
    dataSource.initialize().then((datasource) => {
        console.log(datasource.entityMetadatas)
    }).catch((error) => console.log(error));
    }

export default dataSource