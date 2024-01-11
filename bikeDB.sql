CREATE TABLE bicycles (
    bicycle_id	SERIAL PRIMARY KEY,
    make varchar(50),
    model varchar(50),
    groupset varchar(50),
    frame_type varchar(50),
    frame_size varchar(50),
    prime_color varchar(50),
    model_year int,
    crank_length varchar(50)
);
	

INSERT INTO bicycles (make, model, groupset, frame_type, frame_size, prime_color, model_year, crank_length)
VALUES
('Specialized', 'Sequoia Sport', 'Shimano Sora', 'aluminum', '60cm', 'silver', '2003', '175mm'),
('Cannondale', 'CAAD8', 'Shimano Tiagra', 'aluminum', '58cm', 'white', '2014', '172.5mm'),
('Cannondale', 'CAAD13 Disc Rival AXS', 'Rival eTAP', 'aluminum', '58cm', 'purple', '2021', '175mm'),
('Cannondale', 'Topstone 4', 'microSHIFT Advent 10', 'aluminum', 'large', 'alpine', '2021', '175mm');