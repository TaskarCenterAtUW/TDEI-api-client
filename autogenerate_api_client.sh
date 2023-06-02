curl -X POST https://generator3.swagger.io/api/generate -H 'content-type: application/json' -d '{ "specURL" : "https://tdei-gateway-dev.azurewebsites.net/v3/api-docs", "lang" : "typescript-axios", "type" : "CLIENT", "codegenVersion" : "V3"}' --output tdei-client-axios.zip
unzip -qo tdei-client-axios.zip

if which git >/dev/null 2>&1; then
  git branch -D scratch/api-client
  git checkout -b scratch/api-client
  git add . 
  git commit -m "system:auto generated API client"
  git push -fu origin scratch/api-client
else
    echo "Git is not installed."
fi

if which gh >/dev/null 2>&1; then
    gh pr create --base main --fill 
else
    echo "GitHub-CLI is not installed."
fi