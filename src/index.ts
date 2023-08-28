import { Probot } from "probot";
import onWorkflowJob from './handlers/workflow_job'

export = (app: Probot) => {
  app.on("issues.opened", async (context) => {
    const issueComment = context.issue({
      body: "Thanks for opening this issue!",
    });
    await context.octokit.issues.createComment(issueComment);
  });

  onWorkflowJob(app);

};
