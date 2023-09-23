import { Probot, Context } from 'probot';
import testfile from './testfile';

export default (app: Probot) => {
    app.on("workflow_job.waiting" as any, (context: Context<"workflow_job">) => {
        console.log(context.payload);
    })

    app.on("workflow_job.in_progress" as any, (context: Context<"workflow_job">) => {
        testfile.testfunction('this is the workflow_job name: ' + context.payload.workflow_job.name);
    })

}