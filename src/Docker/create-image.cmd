docker build --no-cache -f SQL\Dockerfile.PostgreSql -t otel/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t otel/app ../..
