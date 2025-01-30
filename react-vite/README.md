# React Vite App

A single page react vite app.

## Prerequisites

- [Bun](https://bun.sh/) (Latest version)

## Installation

Clone the repository and install dependencies:

```bash
# Clone the repository
git clone <repo url>
cd <repo name>

# Install dependencies
bun install
```

## Development

To run the app in development mode:

```bash
bun run dev
```

This will start the development server, typically at `http://localhost:5173`

## Testing

Test files are located in the `src/tests` directory.

To run tests:

```bash
bun run test
```

To run tests with coverage:

```bash
bun run coverage
```

## Building for Production

To create a production build:

```bash
bun run build
```

The built files will be in the `dist` directory.

## Preview Production Build

To preview the production build locally:

```bash
bun run preview
```

## Stack

- Bun (Package Manager, Runtime & Test Runner)
- React
- Vite
- TailwindCSS
- Radix UI
- Lucide Icons
- Testing Library
- Biome
- shadcn/ui
