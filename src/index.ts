import { Probot } from "probot";

export = (app: Probot) => {
  app.on("issues.opened", async (context) => {
    const issueComment = context.issue({
      body: "Thanks for opening this issue!",
    });
    await context.octokit.issues.createComment(issueComment);
  });

  app.on("workflow_run", async (context) => {
    console.log(context)
  })

  app.on("pull_request", async(context) => {
    console.log("pull request happened");
  });

  app.on("commit_comment", async(context) => {
    console.log(context.payload);
  })

  app.on("issues", async(context) => {
    console.log(context.payload);
  })
  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
