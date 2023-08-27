<?php
$pagename = "Seo";
include_once "header.php";
if (isset($_GET["edit"])) {
    $edit = base64_decode($_GET["edit"]);
    $query = mysqli_query($con, "SELECT * FROM `seo` where `id`='$edit'");
    $fetch = mysqli_fetch_array($query);
}
?>
<!--  BEGIN CONTENT AREA  -->
<div id="content" class="main-content">
    <div class="layout-px-spacing">
         <div class="row layout-top-spacing">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">

            <div class="widget-header">
                <div class="row">
                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                <h4><?= $pagename ?> <?= isset($_GET["edit"]) ? "Edit" : "Add" ?></h4>
                </div>
                 </div>
            </div>
        <div class="widget-content widget-content-area p-3">
            <div id="alert"></div>
            <form method="post" id="<?= isset($_GET["edit"]) ? "update" : "add" ?>" enctype="multipart/form-data">
                <input type="hidden"  id="page" value="seo">
                <input type="hidden" name="id" value="<?= @$fetch["id"] ?>">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="title" class="">Title</label>
                            <input id="title" type="text" name="title" value="<?= @$fetch["title"] ?>" class="form-control">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="page_link" class="">Page Link</label>
                            <input id="page_link" type="text" name="page_link" value="<?= @$fetch["page_link"] ?>" class="form-control">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <label for="desc" class="">Description</label>
                            <textarea name="descc" id="" cols="10" rows="5" class="form-control"><?=base64_decode(@$fetch["descc"])?></textarea>
                           
                        </div>
                    </div>
                    
                </div>
                <input type="submit" class="mt-4 btn btn-primary" onclick="tinyMCE.triggerSave(true,true);" value="<?= isset($_GET["edit"]) ? "Update" : "Add" ?>">
            </form>
        </div>
    </div>
</div>
<?php
include_once "footer.php"
?>