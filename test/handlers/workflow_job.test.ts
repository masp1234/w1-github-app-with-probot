import { Server, Probot } from 'probot';
import payload from '../fixtures/workflow_job_payload';
import myProbotApp from '../../src';
import testfile from '../../src/handlers/testfile';

describe("just a test", () => {
    let server: Server;
    beforeEach(async() => {
        server = new Server(
            { Probot: Probot.defaults({
                githubToken: 'token'
            })}
        )
        server.load(myProbotApp);
    })

    it("should recieve a payload, and then log it out", async () => {
        const testSpy = jest.spyOn(testfile, 'testfunction').mockImplementation((text) => {
            console.log(text, ' from spy')
         });
        await server.probotApp.receive({ id: '5', name: "workflow_job", payload})

        expect(testSpy).toBeCalledTimes(1);
    })

})


