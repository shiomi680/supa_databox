-- Insert sample data into files
INSERT INTO files (name, path, bucket) VALUES
('file1.txt', '/path/to/file1.txt', 'bucket1'),
('file2.txt', '/path/to/file2.txt', 'bucket1'),
('file3.txt', '/path/to/file3.txt', 'bucket1');

-- Insert sample data into items
INSERT INTO items (id) VALUES
(gen_random_uuid()),  -- Using UUID for Item 1
(gen_random_uuid());  -- Using UUID for Item 2

-- Insert sample data into item_revisions
INSERT INTO item_revisions (item_id, revision_number, revision_date, description, model_number, name, item_description, cost, sale_price) VALUES
((SELECT id FROM items LIMIT 1), 1, '2023-10-01 10:00:00', 'Initial revision for Item 1', 'MN001', 'Item 1', 'Description for Item 1', 100.00, 150.00),
((SELECT id FROM items LIMIT 1), 2, '2023-10-05 12:00:00', 'Second revision for Item 1', 'MN001', 'Item 1', 'Updated description for Item 1', 110.00, 160.00),
((SELECT id FROM items OFFSET 1 LIMIT 1), 1, '2023-10-02 11:00:00', 'Initial revision for Item 2', 'MN002', 'Item 2', 'Description for Item 2', 200.00, 250.00);

-- Insert sample data into item_tags
INSERT INTO item_tags (revision_id, tag) VALUES
((SELECT id FROM item_revisions OFFSET 1 LIMIT 1), 'electronics'),
((SELECT id FROM item_revisions OFFSET 1  LIMIT 1), 'gadget'),
((SELECT id FROM item_revisions OFFSET 2 LIMIT 1), 'furniture');

-- Insert sample data into item_files
INSERT INTO item_files (revision_id, file_id) VALUES
((SELECT id FROM item_revisions LIMIT 1), (SELECT id FROM files LIMIT 1));

-- ((SELECT id FROM item_revisions OFFSET 1 LIMIT 1), (SELECT id FROM files OFFSET 1 LIMIT 1)),
-- ((SELECT id FROM item_revisions OFFSET 2 LIMIT 1), (SELECT id FROM files OFFSET 2 LIMIT 1));
