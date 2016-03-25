USE GUNNARSDATABAS;
-- -----------------------------------------------------
-- Table `Customer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Customer` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(45) NOT NULL,
  `Address` VARCHAR(45) NULL,
  `PostalCode` VARCHAR(6) NULL,
  `City` VARCHAR(45) NULL,
  `Phone` VARCHAR(12) NULL,
  `Email` VARCHAR(45) NOT NULL,
  `Password` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`Id`)
);


-- -----------------------------------------------------
-- Table `Supplier`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Supplier` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(45) NULL,
  `Address` VARCHAR(45) NULL,
  `PostalCode` VARCHAR(45) NULL,
  `City` VARCHAR(45) NULL,
  `Phone` VARCHAR(12) NULL,
  `Email` VARCHAR(45) NOT NULL,
  `Provision` DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (`Id`)
  );

-- -----------------------------------------------------
-- Table `Auktion`.`Category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Category` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(45) NULL,
  PRIMARY KEY (`Id`)
);


-- -----------------------------------------------------
-- Table `Auction`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Auction` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(45) NULL,
  `Description` TEXT(256) NULL,
  `StartTime` DATETIME NULL,
  `EndTime` DATETIME NULL,
  `Image` BLOB NULL,
  `CategoryId` INT NOT NULL,
  `SupplierId` INT NOT NULL,
  `AcceptPrice` DECIMAL(10,2) NOT NULL,
  `Sold` BOOL,
  
  PRIMARY KEY (`Id`),
  FOREIGN KEY (`CategoryId`) REFERENCES `Category` (`Id`),
  FOREIGN KEY (`SupplierId`) REFERENCES `Supplier` (`Id`)
);


-- -----------------------------------------------------
-- Table `Auktion`.`Offer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Offer` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `CustomerId` INT NOT NULL,
  `AuctionId` INT NOT NULL,
  `DateTime` DATETIME NOT NULL,
  `Offer` DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (`Id`),
  FOREIGN KEY (`CustomerId`) REFERENCES `Customer` (`Id`),
  FOREIGN KEY (`AuctionId`) REFERENCES `Auction` (`Id`)
);