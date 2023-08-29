import { Probot } from 'probot';

export default (app: Probot) => {
    app.on("workflow_job", (context) => {
        console.log(context.payload);
    })

}