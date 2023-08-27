<?php
$pagename = "Category";
require_once '../../config.php';
require_once($_SERVER['DOCUMENT_ROOT'] . $site_dir . '/admin/include/header.php');
if (isset($_GET["edit"])) {
    $edit = ($_GET["edit"]);
    $query = mysqli_query($con, "SELECT * FROM `category` where `id`='$edit'");
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
                <h4> <?= isset($_GET["edit"]) ? "Edit" : "Add" ?> <?= $pagename ?></h4>
                </div>
                 </div>
            </div>
        <div class="widget-content widget-content-area ">
            <div id="alert"></div>
            <form method="post" class="p-5" id="<?= isset($_GET["edit"]) ? "update" : "add" ?>" enctype="multipart/form-data">
                <input type="hidden"  id="page" value="category">
                <input type="hidden" name="id" value="<?=@$fetch['id']?>">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="title" class="">Name</label>
                            <input id="title" type="text" name="name" value="<?=@$fetch['name']?>" class="form-control">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="title" class="">Category Type</label>
                           <select class="form-control" name="cate_type" >
                               <option value="M">Main Menu</option>
                               <option value="S"  <?= (@$fetch['cate_type'] == 'S' ? 'selected' : '')?> >Side Menu</option>
                               
                           </select>
                        </div>
                    </div>
                    
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="link" class="">link</label>
                            <input id="link" type="text" name="link" value="<?=@$fetch['link']?>" class="form-control">
                        </div>
                    </div>
                    
                     <div class="col-md-6">
                        <div class="form-group">
                            <label class="">Parent</label>
                            <select id="parent" name="parent"  class="form-control"> 
                                <option value="0">Root</option>
                                <?php
                                $selectcategory = mysqli_query($con,"SELECT * FROM `category` WHERE parent = 0");
                                while($res= mysqli_fetch_array($selectcategory)){
                                    ?>
                                    <option value="<?=@$res['id']?>" <?php if(@$fetch['id'] == $res['id'] ){echo "selected";}else{echo "";} ?> ><?=@$res['name']?></option>
                                    <?php
                                }
                                ?>
                                
                            </select>
                            
                        </div>
                        </div>
                        
                     <div class="col-md-6">
                        <div class="form-group">
                            <label class="">Status</label>
                            <select class="form-control" name="status">
                                <option value="0">UnActive</option>
                                <option value="1" <?= (@$fetch['status'] == 1 ? 'selected' : '')?>>Active</option>
                            </select>
                        </div>
                    </div>
                        <div class="col-md-12">
                        <div class="form-group">
                            <label for="title" class="">Description</label>
                            <textarea name="description" id="description" cols="30" rows="3" style="width:100%"><?= base64_decode(@$fetch['description'])?></textarea>
                        </div>
                    </div>
                    <!-- <div class="col-md-6">-->
                    <!--    <div class="form-group">-->
                    <!--        <label for="tag" class="">#Tag</label>-->
                    <!--        <input id="tag" type="text" name="tag" value="<?=@$fetch['date']?>" class="form-control">-->
                    <!--    </div>-->
                    <!--</div>-->

                 
                </div>
                <input type="submit" class="mt-4 btn btn-primary"  value="<?= isset($_GET["edit"]) ? "Update" : "Add" ?>">
            </form>
        </div>
    </div>
</div>
<?php
require_once($_SERVER['DOCUMENT_ROOT'] . $site_dir . '/admin/include/footer.php');
?>
<script>
    $("#title").on("input", function() {
        value = $(this).val();
        value = value.replace(/\s+/g, '-').toLowerCase();
        value = value.replace(/[^a-zA-Z-]/g, "");
        value = value.toLowerCase();
        $("#link").val(value);
    });
</script>