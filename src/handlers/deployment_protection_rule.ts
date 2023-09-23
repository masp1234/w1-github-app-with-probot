import { Probot} from 'probot';

export default function(app: Probot) {
    app.on("deployment_protection_rule" as any, async(context) => {
        console.log(context.payload);
    })
}