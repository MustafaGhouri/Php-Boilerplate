<?php

//active-item
$curPageName = substr($_SERVER["SCRIPT_NAME"], strrpos($_SERVER["SCRIPT_NAME"], "/") + 1);
$curPageName = str_replace('.php', '', $curPageName);
?>

<!-- LEFT SIDEBAR -->
<!-- ========================================================= -->
<div class="left-sidebar">
    <!-- left sidebar HEADER -->
    <div class="left-sidebar-header">
        <div class="left-sidebar-title">Navigation</div>
        <div class="left-sidebar-toggle c-hamburger c-hamburger--htla hidden-xs" data-toggle-class="left-sidebar-collapsed" data-target="html">
            <span></span>
        </div>
    </div>
    <!-- NAVIGATION -->
    <!-- ========================================================= -->
    <div id="left-nav" class="nano">
        <div class="nano-content">
            <nav>
                <ul class="nav nav-left-lines" id="main-nav">
                    <!--HOME-->


                    <li <?php if ($curPageName == "dashboard") { ?> class="active-item" <?php } ?>><a href="dashboard.php"><i class="fa fa-home" aria-hidden="true"></i><span>Dashboard</span></a></li>
                    <li <?php if ($curPageName == "package-detail" || $curPageName == "package-detail") { ?> class="active-item" <?php } ?>><a href="package-detail.php"><i class="fas fa-box-open" aria-hidden="true"></i><span>Package</span></a></li>
                    <li <?php if ($curPageName == "slider" || $curPageName == "slider") { ?> class="active-item" <?php } ?>><a href="slider.php"><i class="fas fa-sliders-h" aria-hidden="true"></i><span>Slider</span></a></li>
                    <li <?php if ($curPageName == "social-links" || $curPageName == "social-link") { ?> class="active-item" <?php } ?>><a href="social-links.php"><i class="fas fa-share-alt" aria-hidden="true"></i><span>Social Links</span></a></li>
                    <li <?php if ($curPageName == "service-detail" || $curPageName == "service") { ?> class="active-item" <?php } ?>><a href="service-detail.php"><i class="fas fa-toolbox" aria-hidden="true"></i><span>Services</span></a></li>
                    <!-- <li <? //php if ($curPageName == "portfolio-detail" || $curPageName == "portfolio") {
                                ?> class="active-item" <? //php }
                                                                                                                                    ?>><a href="portfolio-detail.php"><i class="fas fa-chalkboard-teacher" aria-hidden="true"></i><span>Potfolio</span></a></li> -->
                    <li <?php if ($curPageName == "team-detail" || $curPageName == "team") { ?> class="active-item" <?php } ?>><a href="team-detail.php"><i class="fa fa-users" aria-hidden="true"></i><span>Team</span></a></li>
                    <li <?php if ($curPageName == "about-detail" || $curPageName == "about") { ?> class="active-item" <?php } ?>><a href="about-detail.php"><i class="fas fa-address-card" aria-hidden="true"></i><span>About Client Review</span></a></li>
                    <li <?php if ($curPageName == "amount-detail" || $curPageName == "amount") { ?> class="active-item" <?php } ?>><a href="amount-detail.php"><i class="fas fa-money-bill-wave-alt" aria-hidden="true"></i><span>Amount</span></a></li>
                    <li <?php if ($curPageName == "album" || $curPageName == "upload-album") { ?> class="active-item" <?php } ?>><a href="album.php"><i class="fa fa-folder-open" aria-hidden="true"></i><span>Album</span></a></li>
                    <li <?php if ($curPageName == "view-users" || $curPageName == "user") { ?> class="active-item" <?php } ?>><a href="view-users.php"><i class="fas fa-user" aria-hidden="true"></i><span>Users</span></a></li>
                    <li class="has-child-item  close-item">
                        <a><i class="fas fa-film" aria-hidden="true"></i><span>Studio</span></a>
                        <ul class="nav child-nav level-1" style="">
                            <li class="active-item"><a href="categories.php">Category</a></li>
                            <li class="active-item"><a href="studio-detail.php">Studio</a></li>

                        </ul>
                    </li>
                    <li class="has-child-item  close-item">
                        <a class="active-item"><i class="fas fa-chalkboard-teacher" aria-hidden="true"></i><span>Porfolio</span></a>
                        <ul class="nav child-nav level-1" style="">
                            <li class="active-item"><a href="portfolio-categories.php">Category</a></li>
                            <li class="active-item"><a href="portfolio-detail.php">Portfolio</a></li>

                        </ul>
                    </li>

                    <!-- <li ><a href="../index"><i class="fa fa-globe" aria-hidden="true"></i><span>Website</span></a></li> -->


                </ul>
            </nav>
        </div>
    </div>
</div>