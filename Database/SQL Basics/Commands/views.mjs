//save a query as view = virtual table based on the result of a query, it allows you to save a complex query and reuse it as if it were a regular table, views can be used to simplify complex queries, improve performance by precomputing results, and provide a layer of abstraction for security purposes, but they do not store data themselves and are dependent on the underlying tables, so any changes to the underlying tables will affect the view.
CREATE VIEW mainSquareEventsView AS //this creates table mainSquareEventsView based on the result of the query
SELECT * FROM events WHERE Location = 'Hall'

//to us just select it
SELECT * FROM mainSquareEventsView

//delete it
DROP VIEW IF EXISTS mainSquareEventsView
