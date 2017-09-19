<?php

/**
 * @file
 * Process theme data.
 *
 * Use this file to run your theme specific implimentations of theme functions,
 * such preprocess, process, alters, and theme function overrides.
 *
 * Preprocess and process functions are used to modify or create variables for
 * templates and theme functions. They are a common theming tool in Drupal, often
 * used as an alternative to directly editing or adding code to templates. Its
 * worth spending some time to learn more about these functions - they are a
 * powerful way to easily modify the output of any template variable.
 * 
 * Preprocess and Process Functions SEE: http://drupal.org/node/254940#variables-processor
 * 1. Rename each function and instance of "adaptivetheme_subtheme" to match
 *    your subthemes name, e.g. if your theme name is "footheme" then the function
 *    name will be "footheme_preprocess_hook". Tip - you can search/replace
 *    on "adaptivetheme_subtheme".
 * 2. Uncomment the required function to use.
 */


/**
 * Preprocess variables for the html template.
 */
/* -- Delete this line to enable.
function timetochange_preprocess_html(&$vars) {
  global $theme_key;

  // Two examples of adding custom classes to the body.
  
  // Add a body class for the active theme name.
  // $vars['classes_array'][] = drupal_html_class($theme_key);

  // Browser/platform sniff - adds body classes such as ipad, webkit, chrome etc.
  // $vars['classes_array'][] = css_browser_selector();

}
// */


/**
 * Process variables for the html template.
 */
/* -- Delete this line if you want to use this function
function timetochange_process_html(&$vars) {
}
// */


/**
 * Override or insert variables for the page templates.
 */
function timetochange_preprocess_page(&$vars) {
  if (!empty($vars['is_front'])) {
    metatag_page_build($vars['page']);
  }
  // render node fields in page template (tpl)
  if (isset($vars['node'])) {
	  if($vars['node']->type == 'panel' || $vars['node']->type == 'page') {
		  $node = node_load($vars['node']->nid);
		  $summary = field_view_field('node', $node, 'field_page_summary', array('label'=>'hidden'));
		  $video = field_view_field('node', $node, 'field_video_page', array('label'=>'hidden','type'=>'file_rendered','settings'=>array('file_view_mode'=>'media_original')));
		  $image = field_view_field('node', $node, 'field_feature_image', array('label'=>'hidden','type'=>'image','settings'=>array('image_style'=>'feature_image')));
		  $vars['page_summary'] = $summary;
		  $vars['feature_video'] = $video;
		  $vars['feature_image'] = $image;
	  }
  }
}
/* -- Delete this line if you want to use these functions
function timetochange_process_page(&$vars) {
}
// */


/**
 * Override or insert variables into the node templates.
 */
function timetochange_preprocess_node(&$vars) {
	
	$node = $vars['node'];
	
	$vars['submitted'] = t('By !username, !datetime', array(
	'!username' => $vars['name'],
	'!datetime' => date('F j, Y', $vars['created'])
	));
	
	if ($vars['type'] == "news_entry") {
		$vars['submitted'] = t('!datetime', array(
		'!datetime' => date('F j, Y', $vars['created'])
		));
	}
}

/* -- Delete this line if you want to use these functions
function timetochange_process_node(&$vars) {
}
// */


/**
 * Override or insert variables into the comment templates.
 */
function timetochange_preprocess_comment(&$vars) {
   $comment = $vars['elements']['#comment'];
   $ago = format_interval((time() - $comment->created) , 1) . t(' ago');
   $vars['submitted'] = t('!username, !datetime', array('!username' => $vars['author'], '!datetime' => $ago));
}
function timetochange_form_comment_form_alter(&$form) {
   $form['author']['homepage']['#access'] = FALSE;
}
/* -- Delete this line if you want to use these functions
function timetochange_process_comment(&$vars) {
}
// */


/**
 * Override or insert variables into the block templates.
 */
/* -- Delete this line if you want to use these functions
function timetochange_preprocess_block(&$vars) {
}
function timetochange_process_block(&$vars) {
}
// */

/* Add a <span> element to menu items */
function timetochange_menu_link(array $variables) {
  $element = $variables['element'];
  $sub_menu = '';
  if ($element['#below']) {
    $sub_menu = drupal_render($element['#below']);
  }
  $element['#localized_options']['html'] = TRUE;
  $linktext = '<span>' . $element['#title'] . '</span>';
  $output = l($linktext, $element['#href'], $element['#localized_options']);
  return '<li' . drupal_attributes($element['#attributes']) . '>' . $output . $sub_menu . "</li>\n";
}

/* Webform submission file field thumbnail */
function timetochange_webform_display_file($variables) {
     $element = $variables['element'];
     $file = $element['#value'];
     $url = !empty($file) ? webform_file_url($file->uri) : t('no upload');
     if( !empty($file) ) {
         $image_extensions = array("png", "bmp", "jpg", "jpeg", "gif", "JPG", "PNG", "GIF", "BMP", "JPEG");
         $extension = explode(".", $file->uri);
         $extension = $extension[count($extension) - 1];
         $is_image = in_array($extension, $image_extensions);
         if( $element['#format'] == 'text' ){
             return $url;
         } else if( !$is_image ){
             return l($file->filename, $url);
         } else if( $is_image ){
             $output = '<span class="file"><img src="' . image_style_url('webform_thumbnail',  $file->uri) . '"/></span>';
             return $output;
         }
     } 
     return ' ';
}

/* File field component image preview */
function timetochange_file_link($variables) {
  $file = $variables['file'];
  $icon_directory = $variables['icon_directory'];

  $url = file_create_url($file->uri);
  $icon = theme('file_icon', array('file' => $file, 'icon_directory' => $icon_directory));

  // Set options as per anchor format described at
  // http://microformats.org/wiki/file-format-examples
  $options = array(
    'attributes' => array(
      'type' => $file->filemime . '; length=' . $file->filesize,
    ),
  );

  // Use the description as the link text if available.
  if (empty($file->description)) {
    $link_text = $file->filename;
  }
  else {
    $link_text = $file->description;
    $options['attributes']['title'] = check_plain($file->filename);
  }

  $image_extensions = array("png", "bmp", "jpg", "jpeg", "gif", "JPG", "PNG", "GIF", "BMP", "JPEG");
  $extension = explode(".", $file->uri);
  $extension = $extension[count($extension) - 1];
  $is_image = in_array($extension, $image_extensions);
  
  if( $is_image ) {
	  return '<span class="file"><img src="' . image_style_url('webform_thumbnail',  $file->uri) . '"/></span>';
  } else {
	  return '<span class="file">' . $icon . ' ' . l($link_text, $url, $options) . '</span>';
  }
}