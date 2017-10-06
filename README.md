# wordsmith
## Environment prerequisites
* nodejs [nodejs](https://nodejs.org/en/)
* dotnet core 2.0 [.net core 2.0](https://www.microsoft.com/net/core#windowscmd)

## Installation
1. Get the source code by running:
`git clone https://github.com/tokerranta/wordsmith.git`
2. Run dotnet restore
`c:\path-to-wordsmith> dotnet restore`
3. Run npm install
`c:\path-to-wordsmith\Wordsmith.UI>npm install`

## Run the application
1. Start the webapi by running:
`c:\patth-to-wordsmith\Wordsmith.Api> dotnet run`
2. Start the web application by running:
`c:\path-to-wordsmith\Wordsmith.UI> dotnet run`

## Publish
* Publish web app
`c:\path-to-wordsmith\Wordsmith.UI> dotnet publish -o [path to where to publish]`
* Publish api
`c:\path-to-wordsmith\Wordsmith.UI> dotnet publish -o [path to where to publish]`

