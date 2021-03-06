<?php
/**
 * Plugin Name: Markdown Editor 2
 * Description: Replaces the default WordPress editor with a Markdown editor for your posts and pages.
 * Version:     0.1.7
 * Author:      Eduardo Lelis
 * Author URI:  https://www.eduardolelis.com.br
 * License:     GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain: jetpack
 * Domain Path: /languages
 *
 * @package markdown-editor2
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	 die;
}

// Define constants.
define( 'PLUGIN_VERSION', '1.0.0' );
define( 'MINIMUM_WP_VERSION', '4.9' );
define( 'PLUGIN_NAME', plugin_basename( __FILE__ ) );
define( 'PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
define( 'PLUGIN_URL', plugin_dir_url( __FILE__ ) );

// Check if Jetpack module is enabled.
if ( ! class_exists( 'WPCom_Markdown' ) ) {
	include_once PLUGIN_DIR . 'includes/class-easy-markdown.php';
}

// Load Markdown class.
include_once PLUGIN_DIR . 'includes/class-markdown-editor.php';

// Get class instance.
Markdown_Editor::get_instance();
