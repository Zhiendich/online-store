CREATE TABLE person(
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL,
    role VARCHAR(50) DEFAULT 'user'
);

CREATE TABLE basket(
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES person (id)
);

CREATE TABLE basket_device(
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    device_id INTEGER,
    basket_id INTEGER,
    FOREIGN KEY (device_id) REFERENCES device (id),
    CONSTRAINT fk_basket FOREIGN KEY(basket_id) REFERENCES basket(id)
);

CREATE TABLE device(
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(100) NOT NULL,
    price INTEGER NOT NULL,
    rating INTEGER NOT NULL,
    img VARCHAR(255) NOT NULL,
    typeId INTEGER NOT NULL,
    BrandId INTEGER NOT NULL,
    CONSTRAINT fk_type FOREIGN KEY(typeId) REFERENCES type(id),
    CONSTRAINT fk_brand FOREIGN KEY(BrandId) REFERENCES brand(id)
);

CREATE TABLE device_info(
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    device_id INTEGER  NOT NULL,
    title VARCHAR(100)  NOT NULL,
    description VARCHAR(1000)  NOT NULL,
    CONSTRAINT fk_device FOREIGN KEY(device_id) REFERENCES device (id)
);

CREATE TABLE rating(
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    device_id INTEGER,
    user_id INTEGER,
    rate smallint check (rate between 1 and 5),
    CONSTRAINT fk_device FOREIGN KEY(device_id) REFERENCES device (id),
    CONSTRAINT fk_person FOREIGN KEY(user_id) REFERENCES person (id)
);

CREATE TABLE type(
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE brand(
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(100) NOT NULL
);

