openapi-generator generate \
-g typescript-node \
-t finix-nodejs/template \
-i finix-nodejs/testYaml.yaml \
-o finix-nodejs/src \
--global-property skipFormModel=false \
--skip-validate-spec \
--type-mappings=File=ModelFile
