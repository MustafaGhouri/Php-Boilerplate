<?php
$pagename = "Setting";
require_once '../../config.php';
require_once($_SERVER['DOCUMENT_ROOT'] . $site_dir . '/admin/include/header.php');

$query = mysqli_query($con, "SELECT * FROM `settings`");
$fetch = mysqli_fetch_array($query);

?>

<!--  BEGIN CONTENT AREA  -->
<div id="content" class="main-content">
    <div class="layout-px-spacing">
        <div class="row layout-top-spacing">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                <div class="widget-header">
                    <div class="row">
                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                            <h4><?= $pagename ?></h4>
                        </div>
                    </div>
                </div>
                <div class="widget-content widget-content-area p-5">
                    <div id="alert"></div>
                    <form method="post" id="update" enctype="multipart/form-data">
                        <input type="hidden" name="page" id="page" value="setting">
                        <input type="hidden" name="id" value="<?= @$fetch["id"] ?>">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="website_name" class="">Website Name</label>
                                    <input id="website_name" type="text" name="website_name" value="<?= @$fetch["website_name"] ?>" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="website_phone" class="">Website Phone</label>
                                    <input id="website_phone" type="text" name="website_phone" value="<?= @$fetch["website_phone"] ?>" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="website_email" class="">Website Email</label>
                                    <input id="website_email" type="email" name="website_email" value="<?= @$fetch["website_email"] ?>" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="website_address" class="">Website Address</label>
                                    <input id="website_address" type="text" name="website_address" value="<?= @$fetch["website_address"] ?>" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="website_favicon" class="">Website Favicon</label>
                                    <input id="website_favicon" type="file" name="website_favicon" value="<?= @$fetch["website_favicon"] ?>" class="form-control">
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="website_logo" class="">Website Logo</label>
                                    <input id="website_logo" type="file" name="website_logo" value="<?= @$fetch["website_logo"] ?>" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="fb_link" class="">Facebook Link</label>
                                    <input id="fb_link" type="text" name="fb_link" value="<?= @$fetch["fb_link"] ?>" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="ins_link" class="">Instagran Link</label>
                                    <input id="ins_link" type="text" name="ins_link" value="<?= @$fetch["ins_link"] ?>" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="twitter_link" class="">Twitter Link</label>
                                    <input id="twitter_link" type="text" name="twitter_link" value="<?= @$fetch["twitter_link"] ?>" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="linkedin_link" class="">Linkedin Link</label>
                                    <input id="linkedin_link" type="text" name="linkedin_link" value="<?= @$fetch["linkedin_link"] ?>" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="youtube_link" class="">Youtube Link</label>
                                    <input id="youtube_link" type="text" name="youtube_link" value="<?= @$fetch["youtube_link"] ?>" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="pinterest_link" class="">Pinterest Link</label>
                                    <input id="pinterest_link" type="text" name="pinterest_link" value="<?= @$fetch["pinterest_link"] ?>" class="form-control">
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="shor_desc" class="">Short Description</label>
                                    <textarea name="shor_desc" id="mytextareaa" cols="10" rows="10" class="form-control"><?= base64_decode(@$fetch["shor_desc"]) ?></textarea>

                                </div>
                            </div>

                        </div>
                        <input type="submit" class="mt-4 btn btn-primary" onclick="tinyMCE.triggerSave(true,true);" value="Update">
                    </form>
                </div>
            </div>

            <?php
            include_once($_SERVER['DOCUMENT_ROOT'] . $site_dir . '/admin/include/footer.php');
            ?>