CREATE TABLE MAPEM.Site_Details (
    refined_sample_id SERIAL PRIMARY KEY,
    sample_id VARCHAR(50),
    latitude DECIMAL(10, 6),
    longitude DECIMAL(10, 6),
    address_number VARCHAR(50),
    address_name VARCHAR(100),
    town VARCHAR(100),
    county VARCHAR(100),
    superfund_brownfield VARCHAR(100),
    site_number VARCHAR(50),
    leading_identifier VARCHAR(50),
    following_identifier VARCHAR(50),
    classification VARCHAR(100),
    epa_id_letter CHAR(1),
    epa_id_number VARCHAR(50),
    site_name VARCHAR(200),
    zip VARCHAR(10) -- Assuming the data type for ZIP code
);

CREATE INDEX idx_zip ON MAPEM.Site_Details (zip);
