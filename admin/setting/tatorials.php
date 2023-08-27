<?php
$pagename = "Tutorials";
include_once "header.php";
if (isset($_GET["edit"])) {
    $edit = ($_GET["edit"]);
    $query = mysqli_query($con, "SELECT * FROM `banner` where `id`='$edit'");
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
                <h4> <?= $pagename ?></h4>
                </div>
                 </div>
            </div>
        <div class="widget-content widget-content-area row">
           <div class="tatorial-card col-3">
            <h4>Update Password & Email</h4>
            <div style="position: relative; padding-bottom: 56.25%; height: 0;">
                <div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/8e0f0cbc610c4901926575eb967143c6" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
                </div>
        </div>
           <div class="tatorial-card col-3">
            <h4>How To Add User</h4>
            <div style="position: relative; padding-bottom: 56.25%; height: 0;">
                <div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/4447d075ff0048cb881f20e5455d6d26" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
            </div>
        </div>
        <div class="tatorial-card col-3">
            <h4>How To Add News</h4>
            <div style="position: relative; padding-bottom: 56.25%; height: 0;">
                <iframe src="https://www.loom.com/embed/9ad509fdc692465cb5e736e6ebbe7144" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
                </div>
        </div>
       
        <div class="tatorial-card col-3">
            <h4>Editorial Tutorial</h4>
            <div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/c2d767bed6244926b88fa9214bbcfb31" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
        </div>
        <!---<div class="tatorial-card col-3">
            <h4>How To Add News Category</h4>
            <div style="position: relative; padding-bottom: 56.25%; height: 0;">
                <iframe src="https://www.loom.com/embed/9ad509fdc692465cb5e736e6ebbe7144" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
            </div>
        </div> -->
        <div class="tatorial-card col-3">
            <h4>How To Add Shows Category</h4>
           <div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/8057d1368e3a4d0886eb75fbc2dea9ea" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
        </div>
             <div class="tatorial-card col-3">
            <h4>How To Add Shows</h4>
          <div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/22551741ed184e79ad63308bf1499d4e" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
         </div>
         <div class="tatorial-card col-3">
            <h4>How To Add Banner</h4>
            <div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/53b64ba57f70437885cc2b16eb0297da" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
        </div>
        



    </div>
    </div>
</div>
<?php
include_once "footer.php"
?>
<script>
    var ss = $(".basic").select2({
    tags: true,
});
</script>
