# Get current version number
current_version=`npm pkg get version --workspaces=false | tr -d \"`

# Increment the current version number
new_version=`echo ${current_version} | awk -F. -v OFS=. '{$NF += 1 ; print}'`

curl --location 'https://generator3.swagger.io/api/generate' \
--header 'Content-Type: application/json' \
--data '{
    "specURL": "'$1'",
    "lang": "typescript-axios",
    "type": "CLIENT",
    "codegenVersion": "V3",
    "options": {
        "additionalProperties": {
            "modelPropertyNaming": "original",
             "npmName":"tdei-client",
             "npmVersion":"'$new_version'"
        }
    }
}' --output tdei-client.zip

unzip -qo tdei-client.zip

if which git >/dev/null 2>&1; then
    git branch -D feature-generate-api-client
    git checkout -b feature-generate-api-client
    git add .
    git commit -m "system:auto generated API client"
    git push -fu origin feature-generate-api-client
else
    echo "Git is not installed."
fi

if which gh >/dev/null 2>&1; then
    gh pr create --base main --fill
else
    echo "GitHub-CLI is not installed."
fi