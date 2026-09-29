#!/bin/sh
set -eu

tool_dir=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
project_root=$(CDPATH= cd -- "$tool_dir/../.." && pwd)
config_file="$project_root/.local/oracle-mcp/config.yaml"

if [ ! -f "$config_file" ]; then
  echo "Oracle MCP credentials are missing: $config_file" >&2
  echo "See tools/oracle-mcp/README.md for setup instructions." >&2
  exit 1
fi

java_cmd=java
if [ -n "${JAVA_HOME:-}" ]; then
  java_cmd="$JAVA_HOME/bin/java"
fi

cd "$project_root/.local/oracle-mcp"
exec "$java_cmd" \
  "-DconfigFile=$config_file" \
  -Dtools=database-operator \
  -Dtransport=stdio \
  -jar "$tool_dir/oracle-db-mcp-toolkit-1.0.0.jar"
