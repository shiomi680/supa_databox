CREATE TABLE share (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code TEXT,
    name TEXT,
    english_name TEXT,
    sector33_code TEXT,
    sector33_name TEXT,
    sector17_code TEXT,
    sector17_name TEXT,
    market_code TEXT,
    market_name TEXT
);

CREATE TABLE price_relation (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    share_id UUID REFERENCES share(id),
    stock_capitalization NUMERIC,
    stock_price_date DATE,
    per NUMERIC,
    pbr NUMERIC
);

CREATE TABLE my_evaluation (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    share_id UUID REFERENCES share(id),
    update_date DATE,
    business_overview TEXT,
    interest_score INTEGER,
    profitability_score INTEGER,
    tags TEXT[]
);

CREATE TABLE share_link (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    share_id UUID REFERENCES share(id),
    name TEXT,
    link TEXT
);

CREATE TABLE document (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    share_id UUID REFERENCES share(id),
    document TEXT
);

CREATE TABLE share_content (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    share_id UUID REFERENCES share(id),
    business TEXT,
    my_point TEXT,
    my_current_judgment TEXT
);

CREATE TABLE business_model_canvas (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    share_id UUID REFERENCES share(id),
    given_value TEXT,
    related_company TEXT,
    important_activity TEXT,
    relation_with_customer TEXT,
    customer TEXT,
    resource TEXT,
    channel TEXT,
    cost_structure TEXT,
    revenue_stream TEXT
);

CREATE TABLE resource (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    share_id UUID REFERENCES share(id),
    workers TEXT,
    cash TEXT,
    other_resources TEXT
);

CREATE TABLE management (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    share_id UUID REFERENCES share(id),
    ceo TEXT,
    philosophy TEXT
);

CREATE TABLE vrio (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    share_id UUID REFERENCES share(id),
    value TEXT,
    rare TEXT,
    inimitability TEXT,
    organization TEXT
);

CREATE TABLE swot (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    share_id UUID REFERENCES share(id),
    strength TEXT,
    weakness TEXT,
    opportunity TEXT,
    threat TEXT
);