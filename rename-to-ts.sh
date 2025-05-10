#!/bin/bash

# Renombrar archivos .js a .ts
find ./src -name "*.js" -not -path "*/node_modules/*" | while read file; do
  newfile="${file%.js}.ts"
  git mv "$file" "$newfile" 2>/dev/null || mv "$file" "$newfile"
  echo "Renombrado: $file -> $newfile"
done

# Renombrar archivos .jsx a .tsx
find ./src -name "*.jsx" -not -path "*/node_modules/*" | while read file; do
  newfile="${file%.jsx}.tsx"
  git mv "$file" "$newfile" 2>/dev/null || mv "$file" "$newfile"
  echo "Renombrado: $file -> $newfile"
done

echo "Proceso completado. Ahora deberás revisar y ajustar el código para TypeScript."