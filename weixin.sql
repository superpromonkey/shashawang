/*
Navicat MySQL Data Transfer

Source Server         : myitme
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : weixin

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-08-27 20:02:46
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goodslists
-- ----------------------------
DROP TABLE IF EXISTS `goodslists`;
CREATE TABLE `goodslists` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `goodsname` varchar(255) DEFAULT NULL,
  `size` int(6) DEFAULT NULL,
  `price` double(10,2) DEFAULT NULL,
  `newprice` decimal(10,2) DEFAULT NULL,
  `hotdu` int(10) DEFAULT NULL,
  `imgurl` varchar(255) DEFAULT NULL,
  `showtime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `brand` varchar(255) DEFAULT NULL,
  `salenum` int(11) DEFAULT NULL,
  `commentgrade` int(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=73 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodslists
-- ----------------------------
INSERT INTO `goodslists` VALUES ('1', '香港特快直送 零扣关 BURBERRY\r\n伦敦男士   倫敦男用淡香水噴霧', '100', '369.00', '830.00', '453', '0a3d792f1341b9eb8a4bf37c6088a9b119d7c604.jpg', '2018-08-27 14:01:36', '法拉利', null, null);
INSERT INTO `goodslists` VALUES ('2', '香港特快直送 零扣关 BURBERRY\r\nBurberry Brit Splash 博柏利水清悦动淡香水（小样）', '5', '99.00', '38.00', '76', '0f558a23f368be44f389e922515fcd82039a7f6f.jpg', '2018-08-27 14:01:36', '伊丽莎白', '234', '66');
INSERT INTO `goodslists` VALUES ('3', '香港直送 范思哲\r\n男仕喷式迷你淡香水', '5', '567.00', '232.00', '4545', '8facb686023d12c075e4c9462d8ad7f62e19e778.jpg', '2018-08-27 14:01:36', '瑞士葆丽美', '24', '55');
INSERT INTO `goodslists` VALUES ('5', '香港特快直送 零扣关 宝格丽\r\nAQVA POUR HOMME   Aqva男香淡香水', '50', '777.00', '343.00', '455', '46fe148fcd8f9b9c1a45552ed760685e86b2f0dc.jpg', '2018-08-27 14:01:36', '森田药妆', '523', '76');
INSERT INTO `goodslists` VALUES ('6', '香港特快直送 零扣关 范思哲\r\n喷式淡香水', '67', '222.00', '122.00', '34', '63bc6faca7b9213dcd2c788e6c630d1a421fc783.jpg', '2018-08-27 14:01:36', '雪肌精', '354', '56');
INSERT INTO `goodslists` VALUES ('7', '香港特快直送 零扣关 大卫杜夫\r\nCOOL WATER   Cool Water 冷水男士淡香水', '20', '455.00', '411.00', '4576', '65b08da6277aa1da06d41077c57547ffcd22cb51.jpg', '2018-08-27 14:01:36', '法拉利', '678', '32');
INSERT INTO `goodslists` VALUES ('8', '香港特快直送 零扣关 BURBERRY\r\n经典男士淡香水', '100', '66.00', '31.00', '346', '70a7209f51ead21f4c60ff0b2ad1c23c5865e9bb.jpg', '2018-08-27 14:01:36', '伊丽莎白', '3254', '23');
INSERT INTO `goodslists` VALUES ('9', '香港直送 迪奥\r\nSauvage 旷野男士淡香水', '20', '76.00', '55.00', '34', '71fa67baf8e7219772d4fd1148bc21d581ddde2e.jpg', '2018-08-27 14:01:36', '瑞士葆丽美', '867', '56');
INSERT INTO `goodslists` VALUES ('10', '国内保税仓 零扣关 Trussardi\r\nUomo男性淡香水', '50', '778.00', '653.00', '764', '92f24adadfecb47211abe89e164e6e9125e6fd04.jpg', '2018-08-27 14:01:36', '森田药妆', '878', '87');
INSERT INTO `goodslists` VALUES ('11', '香港特快直送 零扣关 BURBERRY\r\n伦敦男性淡香水', '100', '45.00', '22.00', '673', '0753cb94e3702a500ed5140ec0a1125e680f5917.jpg', '2018-08-27 14:01:36', '法拉利', '64', '36');
INSERT INTO `goodslists` VALUES ('12', '国内保税仓 零扣关 Trussardi\r\n尊爵男性淡香水', '90', '344.00', '232.00', '324', '804bb72fde0a477b683b02b18af9b9dceabc8c7f.jpg', '2018-08-27 14:01:36', '伊丽莎白', '23', '76');
INSERT INTO `goodslists` VALUES ('13', '国内保税仓 零扣关 菲拉格慕\r\n菲凡之旅男士淡香水', '30', '34.00', '22.00', '465', '977b1f644bbd12b0588d9c425a06b680b8c945c4.jpg', '2018-08-27 14:01:36', '瑞士葆丽美', '454', '87');
INSERT INTO `goodslists` VALUES ('14', '香港特快直送 零扣关 法拉利\r\nCedar Essence 雪松精华男士香水', '40', '89.00', '49.00', '465', '424291b5648ce8db428ce0070430671e975b138f.jpg', '2018-08-27 14:01:36', '森田药妆', '23', '45');
INSERT INTO `goodslists` VALUES ('15', '国内保税仓 零扣关 moonshot\r\nGD EAU DE TOILETTE 淡香水', '60', '823.00', '767.00', '646', '511299e2f5c77aed89acafa6cc0c2ce62f4394e8.jpg', '2018-08-27 14:01:36', '森田药妆', '334', '24');
INSERT INTO `goodslists` VALUES ('16', '香港特快直送 零扣关 奇安弗兰科·费雷\r\nL’Uomo Eau de Toilette Spray 男性淡香水', '5', '238.00', '134.00', '688', '709702b0e9e81d811e974483c23a749b60bc240c.jpg', '2018-08-27 14:01:36', '法拉利', '45', '56');
INSERT INTO `goodslists` VALUES ('17', '国内保税仓 零扣关 奇安弗兰科·费雷\r\n弗雷黑色男士淡香水', '20', '234.00', '122.00', '432', 'b82fa5b56ee61843fb236f9e039a90d6c1da1f12.jpg', '2018-08-27 14:01:36', '伊丽莎白', '56456', '67');
INSERT INTO `goodslists` VALUES ('18', '香港特快直送 零扣关 Hollister\r\nFREEWAVE FOR HIM 身体喷雾', '10', '533.00', '322.00', '297', 'bbe98cbc72909797426945f349cc54a4d8a384e0.jpg', '2018-08-27 14:01:36', '瑞士葆丽美', '453', '89');
INSERT INTO `goodslists` VALUES ('19', '香港特快直送 零扣关 Abercrombie & Fitch\r\nFirst Instinct Blue 男士淡香水', '80', '89.00', '76.00', '987', 'bdef5e3c12f2822831c42ae31a1522a9c9666a40.jpg', '2018-08-27 14:01:36', '法拉利', '345', '34');
INSERT INTO `goodslists` VALUES ('20', '国内保税仓 零扣关 菲拉格慕\r\nUomo 男士淡香水喷雾', '90', '76.00', '66.00', '658', 'd2737d8031061e39f800d1b40f382bad0dda5ea6.jpg', '2018-08-27 14:01:36', '伊丽莎白', '3345', '46');
INSERT INTO `goodslists` VALUES ('21', '香港直送 捷豹\r\nPACE自信捷豹男香', '100', '765.00', '744.00', '452', 'd523464bc841bf1a81ed4d977bc89a0c9689a588.jpg', '2018-08-27 14:01:36', '法拉利', '345', '79');
INSERT INTO `goodslists` VALUES ('22', '国内保税仓 零扣关 菲拉格慕\r\n蔚蓝之水淡香水', '30', '344.00', '322.00', '22', 'e32189a1bf38c7c4f2ef9f64e67576ae9aab0ed0.jpg', '2018-08-27 14:01:36', '伊丽莎白', '345', '77');
INSERT INTO `goodslists` VALUES ('23', '香港特快直送 零扣关 菲拉格慕\r\n湛蓝之水男性淡香水', '99', '22.00', '20.00', '243', 'f46c88f5aee83b8ba61f59f3e29c9e3be56e37a7.jpg', '2018-08-27 14:01:36', '伊丽莎白', '45', '99');
INSERT INTO `goodslists` VALUES ('24', '香港特快直送 零扣关 BURBERRY\r\n伦敦男士   倫敦男用淡香水噴霧', '8', '34.00', '22.00', '2343', 'fce3b35d923c979420299cc1fbb68eecb91cbb9f.jpg', '2018-08-27 14:01:36', '雪肌精', '345', '34');

-- ----------------------------
-- Table structure for wxdata
-- ----------------------------
DROP TABLE IF EXISTS `wxdata`;
CREATE TABLE `wxdata` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL COMMENT '用户名',
  `password` varchar(255) NOT NULL COMMENT '用户密码',
  `wxtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '注册时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=69 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of wxdata
-- ----------------------------
INSERT INTO `wxdata` VALUES ('65', '1234@qq.com', '44477aa', '2018-08-27 16:08:52');
INSERT INTO `wxdata` VALUES ('66', 'wertyu', 'ccc222', '2018-08-27 16:08:33');
INSERT INTO `wxdata` VALUES ('67', 'wsert', '111ccc', '2018-08-27 16:08:28');
INSERT INTO `wxdata` VALUES ('68', '18888888888', 'qqq111', '2018-08-27 16:07:26');
SET FOREIGN_KEY_CHECKS=1;
