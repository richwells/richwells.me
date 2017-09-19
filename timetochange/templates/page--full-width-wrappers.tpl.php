<div id="page-wrapper">
  <div id="page" class="<?php print $classes; ?>">

    <div id="header-wrapper">
      <div class="container clearfix">
        <header<?php print $header_attributes; ?>>

			<?php if ($site_logo || $site_name || $site_slogan): ?>
			<!-- start: Branding -->
				<div<?php print $branding_attributes; ?>>
				
				  <?php if ($site_logo): ?>
				    <div id="logo">
				      <?php print $site_logo; ?>
				    </div>
				  <?php endif; ?>
				
				  <?php if ($site_name || $site_slogan): ?>
				    <!-- start: Site name and Slogan hgroup -->
				    <hgroup<?php print $hgroup_attributes; ?>>
				
				      <?php if ($site_name): ?>
				        <h1<?php print $site_name_attributes; ?>><?php print $site_name; ?></h1>
				      <?php endif; ?>
				
				      <?php if ($site_slogan): ?>
				        <h2<?php print $site_slogan_attributes; ?>><?php print $site_slogan; ?></h2>
				      <?php endif; ?>
				
				    </hgroup><!-- /end #name-and-slogan -->
				  <?php endif; ?>
				
				</div><!-- /end #branding -->
			<?php endif; ?>

			<?php if ($primary_navigation || $secondary_navigation): ?>
				<div id="menu-wrapper">
					<?php if ($primary_navigation): print $primary_navigation; endif; ?>
				</div>
			<?php endif; ?>

			<?php print render($page['search_bar']); ?>

        </header>
      </div>
    </div>

	<div id="page-header-wrapper">
		<div class="container clearfix">
			
		    <?php if ($breadcrumb): ?>
				<div id="breadcrumb-wrapper">
					<?php print $breadcrumb; ?>
				</div>
		    <?php endif; ?>
			    
			<div class="page-header-title">
			    <?php if ($title): ?>
					<h1 id="page-title"><?php print $title; ?></h1>
			    <?php endif; ?>
			    
				<?php if ($page_summary): ?>
			    	<div class="page-summary">
				    	 <?php print render($page_summary); ?>
			    	</div>
				<?php endif; ?>
			</div>
			
			<?php if ($feature_video || $feature_image): ?>
				<div class="page-header-media">
					<?php if ($feature_video): ?>
						<?php print render($feature_video); ?>
					<?php endif; ?>
					<?php if ($feature_image): ?>
						<?php print render($feature_image); ?>
					<?php endif; ?>
				</div>
			<?php endif; ?>

		</div>
	</div>

    <div id="content-wrapper">
	    <div class="container">
			<div id="columns">
				<div class="columns-inner clearfix">
					<div id="content-column">
						<div class="content-inner">

							<?php print render($page['highlighted']); ?>
							
							<<?php print $tag; ?> id="main-content">
							
							<?php if ($primary_local_tasks || $secondary_local_tasks || $action_links = render($action_links)): ?>
							  <header<?php print $content_header_attributes; ?>>
							
							    <?php if ($primary_local_tasks || $secondary_local_tasks || $action_links): ?>
							      <div id="tasks">
							
							        <?php if ($primary_local_tasks): ?>
							          <ul class="tabs primary clearfix"><?php print render($primary_local_tasks); ?></ul>
							        <?php endif; ?>
							
							        <?php if ($secondary_local_tasks): ?>
							          <ul class="tabs secondary clearfix"><?php print render($secondary_local_tasks); ?></ul>
							        <?php endif; ?>
							
							        <?php if ($action_links = render($action_links)): ?>
							          <ul class="action-links clearfix"><?php print $action_links; ?></ul>
							        <?php endif; ?>
							
							      </div>
							    <?php endif; ?>
							
							    <?php if ($messages || $page['help']): ?>
							      <div id="messages-help-wrapper">
							        <div class="container clearfix">
							          <?php print $messages; ?>
							          <?php print render($page['help']); ?>
							        </div>
							      </div>
							    <?php endif; ?>
							
							  </header>
							<?php endif; ?>
							
							<?php if ($content = render($page['content'])): ?>
							  <div id="content">
							    <?php print $content; ?>
							  </div>
							<?php endif; ?>
							
							</<?php print $tag; ?>>
							
							<?php print render($page['content_aside']); ?>
						
						</div>
					</div>

			        <?php print render($page['sidebar_first']); ?>
			        <?php print render($page['sidebar_second']); ?>

				</div>
			</div>
		</div>
    </div>

    <?php if ($page['tertiary_content']): ?>
      <div id="tertiary-content-wrapper">
        <div class="container clearfix">
          <?php print render($page['tertiary_content']); ?>
        </div>
      </div>
    <?php endif; ?>

    <?php if ($page['footer_one'] || $page['footer_two']): ?>
      <div id="footer-wrapper">
        <div class="container clearfix">
          <div id="footer-one" class="clearfix">
	          <?php print render($page['footer_one']); ?>
          </div>
          <div id="footer-two" class="clearfix">
	          <?php print render($page['footer_two']); ?>
          </div>
        </div>
      </div>
    <?php endif; ?>

  </div>
</div>
