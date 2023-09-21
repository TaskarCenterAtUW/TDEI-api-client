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