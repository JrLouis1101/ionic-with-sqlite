CREATE TABLE IF NOT EXISTS developer(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, skills TEXT);
INSERT or IGNORE INTO developer VALUES(1, 'Luis', '');
INSERT or IGNORE INTO developer VALUES(2, 'Lucca', '');

CREATE TABLE IF NOT EXISTS product(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, creatorId INTEGER);
INSERT or IGNORE INTO product(id, name, creatorId) VALUES (1, 'Ionic', 1);
INSERT or IGNORE INTO product(id, name, creatorId) VALUES (2, 'Ionicons',2);