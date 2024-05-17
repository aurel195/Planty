<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link https://fr.wordpress.org/support/article/editing-wp-config-php/ Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @link https://fr.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'planty' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'root' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', '' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clés secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '0uMN!tUSn-XjWkH!E`grO&NxhiE[r4;usR9#O,nU`Xnw|+PEb?5y9EoU4hb3XbMk' );
define( 'SECURE_AUTH_KEY',  '0SKyact[Mx_Loa/G!Utv<_iXq)/>{PY7NO%Qh%+{FlAA4tXg0%;j^|m)L,*bL0v`' );
define( 'LOGGED_IN_KEY',    'z1`uhCtr*v${#>,E1=&?g|l&Xds<KcT?]|&K>R#J&^,^u}}Z7k9}*yo50 #aaf#[' );
define( 'NONCE_KEY',        '`vO}HIf*%~U`.rtS.0u@snn2HM`sw 21k6a2~S1y5PNPbzzgkT{I.ESH}eLn_BQ0' );
define( 'AUTH_SALT',        'S.MQeUNvB|ECiKDNFYSjs]UK[*Pem&r49+J@i8zjj!`40LuS@kQq2`/Hlc[~,XU{' );
define( 'SECURE_AUTH_SALT', '|IxnuzVadJ#=6e<:Dp2sxuiHX@ji15&cGgUInP~Q.F8T__f4nA2[aY(Tw@a4^g.L' );
define( 'LOGGED_IN_SALT',   'U>3eqwG,>keKn$bWi}}<n%cghD0S*7*Fs^tJ^#l}oK!UpzK=.)QT`|WZ1)$Vot_x' );
define( 'NONCE_SALT',       'hS<kIqJ8+4:N:$m_&ON8nzv2_ch|>>BWfs*aEUsBpYTy]TAEy31VSJVGo4u4;BV?' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';

/**
 * Pour les développeurs et développeuses : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortement recommandé que les développeurs et développeuses d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur la documentation.
 *
 * @link https://fr.wordpress.org/support/article/debugging-in-wordpress/
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');

define('FS_METHOD', 'direct');