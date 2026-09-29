# Oracle SQL Developer connection

`tnsnames.ora` shares the `TPS_LOCAL` database endpoint through Git:
`localhost:1521/orclpdb1`. This matches the Oracle MCP connection example in
`tools/oracle-mcp/config.example.yaml`. The database username is `tps`.

Saving a connection in Oracle SQL Developer stores it locally; it does not
create or update this file. Edit `tnsnames.ora` when the shared endpoint changes.

## Configure this checkout

1. Install the workspace's recommended **Oracle SQL Developer** extension.
2. Open **Preferences: Open Workspace Settings (JSON)** and set
   `sqldeveloper.connections.tnsConfiguration.path` to the absolute path of this
   checkout's `db` directory. Select the folder, not `tnsnames.ora` itself.
   For example:

   ```json
   {
     "sqldeveloper.connections.tnsConfiguration.path": "/absolute/path/to/SQLLearn/db"
   }
   ```

   Merge this property into any existing settings. Extension version 26.2.1
   passes this setting through without expanding `${workspaceFolder}`.
   `.vscode/settings.json` is ignored by Git because the path is specific to
   each checkout. The extension recommendations remain versioned separately.
3. In the Oracle SQL Developer **Connections** panel, edit your existing
   connection or add one. Set **Connection Type** to **TNS**, select the network
   alias **TPS_LOCAL**, and enter username `tps` and your password.
4. Click **Test**, then **Save** or **Connect**. If the alias is missing, close
   and reopen the connection editor; reload the VS Code window if necessary.

An existing **Basic** connection continues to use its own hostname, port, and
service until you change it to **TNS**. Merely adding this file does not change
saved connections.

Commit `tnsnames.ora` and this README. Keep passwords and credential wallets in
the extension's local credential storage, outside the repository.

Oracle documents the [TNS connection fields](https://docs.oracle.com/en/database/oracle/sql-developer-vscode/26.1/sqdnx/connecting-your-database.html).
