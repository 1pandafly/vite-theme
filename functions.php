<?php

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
