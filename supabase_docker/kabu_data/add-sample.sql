-- Insert sample data into the share table
INSERT INTO share (code, name, english_name, sector33_code, sector33_name, sector17_code, sector17_name, market_code, market_name)
VALUES 
    ('SH001', '企業A', 'Company A', 'S33-001', 'Sector 33 A', 'S17-001', 'Sector 17 A', 'MKT-001', 'Market A'),
    ('SH002', '企業B', 'Company B', 'S33-002', 'Sector 33 B', 'S17-002', 'Sector 17 B', 'MKT-002', 'Market B');

-- Insert sample data into the price_relation table
INSERT INTO price_relation (share_id, stock_capitalization, stock_price_date, per, pbr)
VALUES 
    ((SELECT id FROM share WHERE code = 'SH001'), 1000000.00, '2023-01-01', 15.0, 1.5),
    ((SELECT id FROM share WHERE code = 'SH002'), 2000000.00, '2023-01-02', 20.0, 2.0);

-- Insert sample data into the my_evaluation table
INSERT INTO my_evaluation (share_id, update_date, business_overview, interest_score, profitability_score, tags)
VALUES 
    ((SELECT id FROM share WHERE code = 'SH001'), '2023-01-01', 'Overview of Company A', 8, 7, ARRAY['tag1', 'tag2']),
    ((SELECT id FROM share WHERE code = 'SH002'), '2023-01-02', 'Overview of Company B', 6, 5, ARRAY['tag3', 'tag4']);

-- Insert sample data into the share_link table
INSERT INTO share_link (share_id, name, link)
VALUES 
    ((SELECT id FROM share WHERE code = 'SH001'), 'Company A Website', 'http://companya.com'),
    ((SELECT id FROM share WHERE code = 'SH002'), 'Company B Website', 'http://companyb.com');

-- Insert sample data into the document table
INSERT INTO document (share_id, document)
VALUES 
    ((SELECT id FROM share WHERE code = 'SH001'), 'Document for Company A'),
    ((SELECT id FROM share WHERE code = 'SH002'), 'Document for Company B');

-- Insert sample data into the share_content table
INSERT INTO share_content (share_id, business, my_point, my_current_judgment)
VALUES 
    ((SELECT id FROM share WHERE code = 'SH001'), 'Business details of Company A', 'My point on Company A', 'Positive'),
    ((SELECT id FROM share WHERE code = 'SH002'), 'Business details of Company B', 'My point on Company B', 'Neutral');

-- Insert sample data into the business_model_canvas table
INSERT INTO business_model_canvas (share_id, given_value, related_company, important_activity, relation_with_customer, customer, resource, channel, cost_structure, revenue_stream)
VALUES 
    ((SELECT id FROM share WHERE code = 'SH001'), 'Value Proposition A', 'Related Company A', 'Activity A', 'Customer Relation A', 'Customer A', 'Resource A', 'Channel A', 'Cost Structure A', 'Revenue Stream A'),
    ((SELECT id FROM share WHERE code = 'SH002'), 'Value Proposition B', 'Related Company B', 'Activity B', 'Customer Relation B', 'Customer B', 'Resource B', 'Channel B', 'Cost Structure B', 'Revenue Stream B');

-- Insert sample data into the resource table
INSERT INTO resource (share_id, workers, cash, other_resources)
VALUES 
    ((SELECT id FROM share WHERE code = 'SH001'), '50', '100000', 'Office Supplies'),
    ((SELECT id FROM share WHERE code = 'SH002'), '100', '200000', 'Equipment');

-- Insert sample data into the management table
INSERT INTO management (share_id, ceo, philosophy)
VALUES 
    ((SELECT id FROM share WHERE code = 'SH001'), 'CEO A', 'Philosophy A'),
    ((SELECT id FROM share WHERE code = 'SH002'), 'CEO B', 'Philosophy B');

-- Insert sample data into the vrio table
INSERT INTO vrio (share_id, value, rare, inimitability, organization)
VALUES 
    ((SELECT id FROM share WHERE code = 'SH001'), 'Value A', 'Yes', 'No', 'Org A'),
    ((SELECT id FROM share WHERE code = 'SH002'), 'Value B', 'No', 'Yes', 'Org B');

-- Insert sample data into the swot table
INSERT INTO swot (share_id, strength, weakness, opportunity, threat)
VALUES 
    ((SELECT id FROM share WHERE code = 'SH001'), 'Strength A', 'Weakness A', 'Opportunity A', 'Threat A'),
    ((SELECT id FROM share WHERE code = 'SH002'), 'Strength B', 'Weakness B', 'Opportunity B', 'Threat B');