# TypeORM Redis hang
This repository contains a minimal reproduction of a hang that occurs when using TypeORM with Redis.

So far, I've only been able to reproduce this issue on :
- Debian 11 (using [Node Source builds](https://github.com/nodesource/distributions#deb))
- Fedora 37 (tested on Workstation)
- Docker

This *does not happen* on:
- Arch Linux
- Fedora 38 (tested on Server Edition)

## Run the reproduction
A Docker environment is provided to reproduce the issue. To run it, use the following commands :
```bash
docker-compose build
docker-compose up
```

You can change the `CACHE` environment variable in the `docker-compose.yml` file to disable the cache and see that the issue does not happen without it.

## The issue
When using TypeORM with Redis as the cache provider, the application hangs when trying to connect to the database.

### Expected behavior
The application should start and connect to the database.