# Get current version number
current_version=`npm pkg get version --workspaces=false | tr -d \"`

# Increment the current version number
new_version=`echo ${current_version} | awk -F. -v OFS=. '{$NF += 1 ; print}'`

SWAGGER_URL="https://raw.githubusercontent.com/TaskarCenterAtUW/TDEI-ExternalAPIs/gs-api-gateway-implementation/tdei-api-gateway.json"

# Define the output directory
OUTPUT_DIR="."

# Run the Swagger Codegen command
java -jar swagger-codegen-cli.jar generate -i "$1" -l typescript-axios --additional-properties modelPropertyNaming='original' npmName='tdei-client' npmVersion="$new_version" -o "$OUTPUT_DIR"

npm install 
npm run build
# curl --location 'https://generator3.swagger.io/api/generate' \
# --header 'Content-Type: application/json' \
# --data '{
#     "specURL": "'$1'",
#     "lang": "typescript-axios",
#     "type": "CLIENT",
#     "codegenVersion": "V3",
#     "options": {
#         "additionalProperties": {
#             "modelPropertyNaming": "original",
#              "npmName":"tdei-client",
#              "npmVersion":"'$new_version'"
#         }
#     }
# }' --output tdei-client.zip