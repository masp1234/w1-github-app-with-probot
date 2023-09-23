import { Photo } from "../entities/Photo";
import dataSource from "./datasource";

export async function initializeDatabase() {
    if (!dataSource.isInitialized) {
        console.log('Initializing database..')
        try {
            await dataSource.initialize();
            console.log('Database initialized!')
            await dataSource.manager.save(new Photo(1, "testname"))
        }
        catch(error) {
            console.log(error);
        }
    }
}