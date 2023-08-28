import { Probot } from 'probot';

export default (probot: Probot) => {
    probot.on("workflow_job", (context) => {
        console.log(context.payload);
    })

}