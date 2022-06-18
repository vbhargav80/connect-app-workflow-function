# Atlassian Connect Workflow Post Function Example

This add-on demonstrates simple usage of a workflow post function for Atlassian Connect.

### Prerequisites

In order to see the addon in action you need:

1. JIRA instance with development mode enabled. Check how to set up your development environment on [getting started with connect](https://developer.atlassian.com/cloud/jira/platform/getting-started-with-connect/).
2. Addon running on public `URL`. You may use `ngrok` tunnelling: `./ngrok http 3000`
3. The addon descriptor `atlassian-connect.json` containing addon's public `URL` under `baseUrl` property. It can be injected by connect-express using context variable in descriptor `{{localBaseUrl}}`, and environment variable `AC_LOCAL_BASE_URL`.

### Running from code
1. Ensure you have `node.js` installed, then run `npm install` to install dependencies.
2. Run `npm start` to start the addon
3. Install the addon on your JIRA instance.
4. Add the workflow post function to a project. 

There is some inline documentation about using workflow post functions which you can see when adding the post function to a project.

### Running from docker public image
1. Run docker with `AC_LOCAL_BASE_URL` environment variable injected (set proper value for `<ngrok_tunnel>`)

        docker run --rm -p 3000:3000 -d -e AC_LOCAL_BASE_URL=<ngrok_tunnel> --name jira-workflow-post-function-example connectaddons/jira-workflow-post-function-example

2. After installing and setting up the addon in your JIRA, you may observe the post function calls in logs (including payload)

        docker logs -f jira-workflow-post-function-example

### Useful links
[Workflow post functions connect module](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-post-function/)

[Configure advanced issue workflows](https://support.atlassian.com/jira-cloud-administration/docs/configure-advanced-issue-workflows/)