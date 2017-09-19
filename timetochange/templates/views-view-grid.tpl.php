<?php

/**
 * @file
 * Default simple view template to display a rows in a grid.
 *
 * - $rows contains a nested array of rows. Each row contains an array of
 *   columns.
 *
 * @ingroup views_templates
 */
?>
<?php if (!empty($title)) : ?>
  <h3><?php print $title; ?></h3>
<?php endif; ?>
<div class="<?php print $class; ?>">

    <?php foreach ($rows as $row_number => $columns): ?>
      <?php
        $row_class = 'row-' . ($row_number + 1);
        if ($row_number == 0 && count($rows) > 1) {
          $row_class .= ' row-first';
        }
        elseif (count($rows) == ($row_number + 1)) {
          $row_class .= ' row-last';
        }
      ?>
      <div class="gridRow clearfix <?php print $row_class; ?>">
        <?php foreach ($columns as $column_number => $item): ?>
	      <?php
	        $col_class = 'col-' . ($column_number + 1);
	        if ($column_number == 0 && count($columns) > 1) {
	          $col_class .= ' col-first';
	        }
	        elseif (count($columns) == ($column_number + 1)) {
	          $col_class .= ' col-last';
	        }
	      ?>
          <div class="gridCol clearfix <?php print $col_class; ?>">
<?php if ($item): ?>
            <div class="grid-item clearfix">    
            <?php print $item; ?>
            </div>
<?php endif; ?>           
          </div>
        <?php endforeach; ?>
      </div>
    <?php endforeach; ?>
</div>