openapi-generator generate \
-g typescript-node \
-t template \
-i openapi/finix-api.yaml \
-o src \
--global-property skipFormModel=false \
--skip-validate-spec \
--type-mappings=File=ModelFile
