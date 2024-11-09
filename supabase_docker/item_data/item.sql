CREATE TABLE files (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(), 
    name TEXT NOT NULL,
    bucket TEXT NOT NULL,
    path TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid()
);

CREATE TABLE item_revisions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    item_id UUID NOT NULL,
    revision_number INT NOT NULL,
    revision_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    description TEXT,
    model_number TEXT NOT NULL,
    name TEXT NOT NULL,
    item_description TEXT,
    cost NUMERIC(10, 2) NOT NULL,
    sale_price NUMERIC(10, 2) NOT NULL,
    FOREIGN KEY (item_id) REFERENCES items(id)
);

CREATE TABLE item_tags (
    revision_id UUID NOT NULL,
    tag TEXT NOT NULL,
    PRIMARY KEY (revision_id, tag),
    FOREIGN KEY (revision_id) REFERENCES item_revisions(id)
);

CREATE TABLE item_files (
    revision_id UUID NOT NULL,
    file_id UUID NOT NULL,
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