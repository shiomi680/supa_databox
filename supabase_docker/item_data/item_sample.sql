-- Insert sample data into files
INSERT INTO files (name, path) VALUES
('file1.txt', '/path/to/file1.txt'),
('file2.txt', '/path/to/file2.txt'),
('file3.txt', '/path/to/file3.txt');

-- Insert sample data into items
INSERT INTO items (id) VALUES
(1),
(2);

-- Insert sample data into item_revisions
INSERT INTO item_revisions (item_id, revision_number, revision_date, description, model_number, name, item_description, cost, sale_price) VALUES
(1, 1, '2023-10-01 10:00:00', 'Initial revision for Item 1', 'MN001', 'Item 1', 'Description for Item 1', 100.00, 150.00),
(1, 2, '2023-10-05 12:00:00', 'Second revision for Item 1', 'MN001', 'Item 1', 'Updated description for Item 1', 110.00, 160.00),
(2, 1, '2023-10-02 11:00:00', 'Initial revision for Item 2', 'MN002', 'Item 2', 'Description for Item 2', 200.00, 250.00);

-- Insert sample data into item_tags
INSERT INTO item_tags (revision_id, tag) VALUES
(2, 'electronics'),
(2, 'gadget'),
(3, 'furniture');

-- Insert sample data into item_files
INSERT INTO item_files (revision_id, file_id) VALUES
(1, 1),  -- Linking first revision of Item 1 to file1.txt
(2, 2),  -- Linking second revision of Item 1 to file2.txt
(3, 3);  -- Linking first revision of Item 2 to file3.txt