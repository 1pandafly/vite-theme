<?php
/**
 * uapp-theme functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package uapp-theme
 */

if (!defined('_S_VERSION')) {
    // Replace the version number of the theme on each release.
    define('_S_VERSION', '1.0.0');
}

include_once "core/wordvite.php";

add_action('wp_enqueue_scripts', function () {
    wv_load_script('global');

    if (is_home()) {
        wv_load_script('homepage');
    }

    if (is_page('test')) {
        wv_load_script('test');
    }

    if (is_page('blog')) {
        wv_load_script('blog');
    }
});