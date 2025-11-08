//Create folder.vscode and file launch.json inside

//Add this and it will now be available in debug instead of terminal
//Will override all PORT /NODE_ENV configs I have
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug Express API",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/src/index.ts",
      "runtimeExecutable": "tsx",
      "runtimeArgs": ["--inspect"],
      "env": {
        "NODE_ENV": "development",
        "PORT": "5000"
      },
      "console": "integratedTerminal",
      "restart": true,
      "sourceMaps": true,
      "resolveSourceMapLocations": [
        "${workspaceFolder}/**",
        "!**/node_modules/**"
      ]
    }
  ]
}