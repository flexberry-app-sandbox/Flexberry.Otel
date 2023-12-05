docker build --no-cache -f SQL\Dockerfile.PostgreSql -t otel-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t otel-java/app ../../..
