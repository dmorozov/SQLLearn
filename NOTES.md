# Teaching notes

## Starting point
- User requested the teach workflow on 2026-09-28 and reported zero SQL knowledge.
- Stated goal: independently create joins over multiple tables.
- An optional question about the practical use case is pending. Do not infer a
  business role or mark a proposed use case as confirmed.
- Oracle 19c verified through MCP. CODE_ATTRIBUTE has ID, CODE, and NAME;
  ID is its primary key. Use bounded queries and inspect schema before examples.
- Preserve the user's existing example.sql and test.txt.

## Current lesson
- lessons/0001-reading-a-table.html: choose columns from one table.
- exercises/0001-reading-a-table.sql: verified starter query.
- Browser preview uses three saved rows; it is not a live database connection.
- Pending evidence: learner writes a query showing only NAME, ordered by ID,
  with at most three rows, and explains what SELECT and FROM do.
- No query-writing mastery has been established yet. Browser practice is not
  automatically recorded here; update learning records after the user responds.
- Next session: ask for SELECT/FROM recall before adding WHERE.

## Provisional progression
Adapt pace to the learner; this is not a list to teach in one sitting.
1. Tables, rows, columns; SELECT and FROM.
2. WHERE; numbers, text, AND/OR; ordering and limiting results.
3. NULL; identifiers and aliases; primary/foreign keys and relationships.
4. INNER JOIN with two tables; predict matches and repeated result rows.
5. LEFT JOIN; missing matches; conditions in ON versus WHERE.
6. Add a third table; verify counts and avoid accidental multiplication.
7. RIGHT/FULL/CROSS joins and self joins; choose appropriate uses.
8. Composite conditions, non-equality joins, EXISTS/NOT EXISTS.
9. Aggregation with joins, many-to-many relationships, and a real query task.
10. Recognize USING/NATURAL and older Oracle (+) syntax; specialize further
    according to actual query needs.
