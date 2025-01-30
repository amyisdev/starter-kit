FROM oven/bun:1 AS builder

WORKDIR /app

COPY package.json bun.lock ./

RUN bun install
COPY . .

RUN bun run build

FROM oven/bun:1

WORKDIR /app

COPY --from=builder --chown=bun:bun /app/build/server ./
RUN chown bun:bun . && chmod 0750 .

USER bun

CMD ["./server"]
