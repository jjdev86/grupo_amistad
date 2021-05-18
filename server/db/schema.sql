DROP DATABASE IF EXISTS `gda`;
CREATE DATABASE `gda`;
USE `gda`;

CREATE TABLE `role` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`role` varchar(15) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `user` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`email` varchar(45) NOT NULL UNIQUE,
	`password` BINARY(60) NOT NULL,
	`role` varchar(15) NOT NULL,
	`first_name` varchar(255) NOT NULL,
	`last_name` varchar(255) NOT NULL,

	PRIMARY KEY (`id`)
);



CREATE TABLE `grupo` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`group_name` varchar(30) NOT NULL UNIQUE,
	`leader_first` varchar(30) NOT NULL,
	`leader_last` varchar(30) NOT NULL,
	`leader_email` varchar(45) NOT NULL UNIQUE,
	PRIMARY KEY (`id`)
);

CREATE TABLE `member` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`first_name` varchar(255) NOT NULL,
	`last_name` varchar(255) NOT NULL,
	`isChild` BOOLEAN NOT NULL,
	`group_id` INT NOT NULL,
	`firstlast` varchar(45) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `guest` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`first_name` varchar(255) NOT NULL,
	`last_name` varchar(255) NOT NULL,
	`phone_number` varchar(10) NULL,
	`isChild` BOOLEAN NOT NULL DEFAULT false,
	`group_id` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `report` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`_date` DATE NOT NULL,
	`event_start_time` TIME NOT NULL,
	`event_end_time` TIME NOT NULL,
	`topic` varchar(255) NOT NULL,
	`location_add` varchar(255) NOT NULL,
	`location_city` varchar(40) NOT NULL,
	`location_state` varchar(2) NOT NULL,
	`location_zip` varchar(5) NOT NULL,
	`members_attended`TINYINT NULL,
	`guest_attended` TINYINT NULL,
	`attendes` TEXT NOT NULL,
	`prayer_request` TEXT NULL,
	`comments` TEXT NULL,
	`group_id` INT NOT NULL,
	PRIMARY KEY (`id`)
);

INSERT INTO role (role) VALUES ("Admin");
INSERT INTO role (role) VALUES ("Supervisor");
INSERT INTO role (role) VALUES ("Leader");

ALTER TABLE `member` ADD INDEX `firstlast_id_index` (`firstlast`);

-- ALTER TABLE `member` ADD CONSTRAINT `member_fk0` FOREIGN KEY (`group_id`) REFERENCES `grupo`(`id`);

-- ALTER TABLE `guest` ADD CONSTRAINT `guest_fk0` FOREIGN KEY (`group_id`) REFERENCES `grupo`(`id`);

-- ALTER TABLE `report` ADD CONSTRAINT `report_fk0` FOREIGN KEY (`group_id`) REFERENCES `grupo`(`id`);


