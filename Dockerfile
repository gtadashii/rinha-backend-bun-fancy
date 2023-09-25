FROM oven/bun

WORKDIR /app

# copy source code
COPY . .

# install dependencies
RUN bun install

# start application
CMD ["bun", "src/index.ts"]
