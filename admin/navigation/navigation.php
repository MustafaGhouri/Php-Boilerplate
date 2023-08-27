<?php
$pagename = "Navigation";
include_once "header.php";
if (isset($_GET["edit"])) {
    $edit = base64_decode($_GET["edit"]);
    $query = mysqli_query($con, "SELECT * FROM `navigation` where `id`='$edit'");
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
        <div class="widget-content widget-content-area ">
            <div id="alert"></div>
            <form method="post" class="p-5" id="<?= isset($_GET["edit"]) ? "update" : "add" ?>" enctype="multipart/form-data">
                <input type="hidden"  id="page" value="navigation">
                <input type="hidden" name="id" value="<?=@$fetch['id']?>">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="name" class="">Name</label>
                            <input id="name" type="text" name="name" value="<?=@$fetch['name']?>" class="form-control">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="link" class="">Link</label>
                            <input id="link" type="text" name="link" value="<?=@$fetch['link']?>" class="form-control">
                        </div>
                    </div>
                     <div class="col-md-6">
                        <div class="form-group">
                            <label for="link" class="">Parent</label>
                            <select id="parent" name="parent" class="form-control">
                                <option value=""></option>
                            <?php
                            $selectparent = mysqli_query($con,"SELECT * FROM `navigation` WHERE parent = 0");
                            while($fetchparent = mysqli_fetch_array($selectparent)){
                                ?>
                                <option value="<?=$fetchparent['id']?>"><?=$fetchparent['name']?></option>
                                <?php
                            }
                            ?>
                            </select>
                            <!--<input id="link" type="text" name="link" value="<?=@$fetch['link']?>" class="form-control">-->
                        </div>
                    </div>
                     <div class="col-md-6">
                        <div class="form-group">
                            <label for="status" class="">Status</label>
                            <select id="status" name="status" class="form-control">
                                <option value=""></option>
                                <option value="0">UnActive</option>
                                <option value="1">Active</option>
                            </select>
                        </div>
                    </div>
                    
                 
                </div>
                <input type="submit" class="mt-4 btn btn-primary" value="<?= isset($_GET["edit"]) ? "Update" : "Add" ?>">
            </form>
        </div>
    </div>
</div>
<?php
include_once "footer.php"
?>
<script>
    $("#name").on("input", function() {
        value = $(this).val();
        value = value.replace(/\s+/g, '-').toLowerCase();
        value = value.replace(/[^a-zA-Z-]/g, "");
        value = value.toLowerCase();
        $("#link").val(value);
    });
</script>