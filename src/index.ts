import { Probot } from "probot";
import onWorkflowJob from './handlers/workflow_job'
import onDeploymentProtectionRule from './handlers/deployment_protection_rule'
import "reflect-metadata"
import dataSource from "./database/datasource"

export = (app: Probot) => {
  app.on("issues.opened", async (context) => {
    const issueComment = context.issue({
      body: "Thanks for opening this issue!",
    });
    await context.octokit.issues.createComment(issueComment);
  });
  onWorkflowJob(app);
  onDeploymentProtectionRule(app);

};
