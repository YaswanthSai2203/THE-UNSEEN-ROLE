#!/usr/bin/env bash
# Compile-checks all game code against Unity reference assemblies; "test" also runs the pure-logic tests.
# Usage: tools/compilecheck/check.sh [test]
set -euo pipefail
cd "$(dirname "$0")"
./fetch-refs.sh
for p in Runtime Editor PlayModeTests; do
  dotnet build "$p/$p.csproj" -nologo -v q -clp:NoSummary
done
if [ "${1:-}" = "test" ]; then
  dotnet run --project Tests/Tests.csproj -- --where "cat != UnityOnly" --noresult
fi
