openapi-generator generate \
-g typescript-node \
-t finix-nodejs/template \
-i finix-nodejs/testYaml.yaml \
-o testgen2 \
--global-property skipFormModel=false \
--global-property debugOpenAPI=true \
--skip-validate-spec \
--type-mappings=File=ModelFile
