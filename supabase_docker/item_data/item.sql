CREATE TABLE files (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    path VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE items (
    id SERIAL PRIMARY KEY
);

CREATE TABLE item_revisions (
    id SERIAL PRIMARY KEY,
    item_id INT NOT NULL,
    revision_number INT NOT NULL,
    revision_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    description TEXT,
    model_number VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    item_description TEXT,
    cost NUMERIC(10, 2) NOT NULL,
    sale_price NUMERIC(10, 2) NOT NULL,
    FOREIGN KEY (item_id) REFERENCES items(id)
);

CREATE TABLE item_tags (
    revision_id INT NOT NULL,
    tag VARCHAR(255) NOT NULL,
    PRIMARY KEY (revision_id, tag),
    FOREIGN KEY (revision_id) REFERENCES item_revisions(id)
);

CREATE TABLE item_files (
    revision_id INT NOT NULL,
    file_id INT NOT NULL,
    PRIMARY KEY (revision_id, file_id),
    FOREIGN KEY (revision_id) REFERENCES item_revisions(id),
    FOREIGN KEY (file_id) REFERENCES files(id)
);

CREATE VIEW latest_item_details AS
SELECT ir.*
FROM item_revisions ir
JOIN (
    SELECT item_id, MAX(revision_number) AS max_revision
    FROM item_revisions
    GROUP BY item_id
) latest ON ir.item_id = latest.item_id AND ir.revision_number = latest.max_revision;