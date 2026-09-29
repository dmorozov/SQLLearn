# Oracle Database MCP Java Toolkit

This directory contains the built Oracle MCP toolkit JAR and its launcher.
Codex registers it as `oracle` through the project's `.codex/config.toml`.
Start Codex from the project root so its relative launcher path resolves.
Restart the Codex session after changing the MCP configuration.

The server uses JDBC Thin over stdio. Java 17 or newer is required; Oracle
Instant Client and SQLcl are not required. The launcher uses `$JAVA_HOME/bin/java`
when `JAVA_HOME` is set, otherwise `java` from `PATH`.

## Local credentials

The working connection is stored in `.local/oracle-mcp/config.yaml`, which is
ignored by Git. On a fresh checkout:

```sh
mkdir -p .local/oracle-mcp
chmod 700 .local/oracle-mcp
cp tools/oracle-mcp/config.example.yaml .local/oracle-mcp/config.yaml
chmod 600 .local/oracle-mcp/config.yaml
```

Edit that local file to set the password and connection details. Do not put the
password in `.codex/config.toml` or the example file.

## Enabled operations

The `database-operator` toolset enables `read-query`, `write-query`, `table`,
`transaction`, `db-ping`, `db-metrics-range`, and `explain-plan`. These include
data and schema modifications with the connected user's privileges.
Performance tools may require additional database privileges.

The Codex startup timeout is 30 seconds and its tool timeout is 660 seconds.
The connection retains the supplied JDBC socket read timeout of 10 minutes.

## Included artifact

- JAR: `oracle-db-mcp-toolkit-1.0.0.jar`, including JDBC and other dependencies.
- Source revision and checksums: `UPSTREAM.json`.
- Toolkit license: `LICENSE.txt` (UPL-1.0); bundled dependencies retain their own licenses.
- Upstream: <https://github.com/oracle/mcp/tree/main/src/oracle-db-mcp-java-toolkit>.

Built from the pinned upstream source using `mvn package`, including upstream
unit tests. The build source, Maven cache, and validation logs are local artifacts
under `.local/oracle-mcp/` and are excluded from Git.

Commit this directory, `.codex/config.toml`, and `.gitignore` to share the setup.
Only Java and local database credentials are needed to run the checked-in JAR.
