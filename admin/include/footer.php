<div class="footer-wrapper">
  <div class="footer-section f-section-1">

  <p class=""> © 2022  ALL RIGHTS RESERVED BY . DEVELOP BY <a href=".com/" target="_blank" class="text-reset"></a>.</p> 
  </div>
  <div class="footer-section f-section-2">

  </div>
</div>
</div>

</div>

</div>
<!--  END CONTENT AREA  -->

</div>
<!-- END MAIN CONTAINER -->
<!-- BEGIN GLOBAL MANDATORY SCRIPTS -->
<script src="<?= $url ?>admin/assets/js/libs/jquery-3.1.1.min.js"></script>
<script src="<?= $url ?>admin/bootstrap/js/popper.min.js"></script>
<script src="<?= $url ?>admin/bootstrap/js/bootstrap.min.js"></script>
<script src="<?= $url ?>admin/plugins/perfect-scrollbar/perfect-scrollbar.min.js"></script>
<script src="<?= $url ?>admin/assets/js/app.js"></script>
<script>
  $(document).ready(function() {
    App.init();
  });
</script>
<script src="<?= $url ?>admin/assets/js/custom.js"></script>
<!-- END GLOBAL MANDATORY SCRIPTS -->

<!-- BEGIN PAGE LEVEL PLUGINS/CUSTOM SCRIPTS -->

<script src="<?= $url ?>admin/assets/js/dashboard/dash_1.js"></script>
<!-- BEGIN PAGE LEVEL PLUGINS/CUSTOM SCRIPTS -->
<script src="<?= $url ?>admin/assets/js/customize.js"></script>

<script src="<?= $url ?>admin/plugins/table/datatable/datatables.js"></script>
<script src="<?= $url ?>admin/plugins/select2/select2.min.js"></script>
<script src="<?= $url ?>admin/plugins/select2/custom-select2.js"></script>
<script>
  $('#zero-config').DataTable({
    "dom": "<'dt--top-section'<'row'<'col-12 col-sm-6 d-flex justify-content-sm-start justify-content-center'l><'col-12 col-sm-6 d-flex justify-content-sm-end justify-content-center mt-sm-0 mt-3'f>>>" +
      "<'table-responsive'tr>" +
      "<'dt--bottom-section d-sm-flex justify-content-sm-between text-center'<'dt--pages-count  mb-sm-0 mb-3'i><'dt--pagination'p>>",
    "oLanguage": {
      "oPaginate": {
        "sPrevious": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>',
        "sNext": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>'
      },
      "sInfo": "Showing page _PAGE_ of _PAGES_",
      "sSearch": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',
      "sSearchPlaceholder": "Search...",
      "sLengthMenu": "Results :  _MENU_",
    },
    "stripeClasses": [],
    "lengthMenu": [7, 10, 20, 50],
    "pageLength": 7
  });
</script>
<script src="https://cdn.tiny.cloud/1/7oqc5befp5m9u9znnxb9agwq4vdq1a51fo1lq4umu3m1snab/tinymce/5/tinymce.min.js" referrerpolicy="origin"></script>
<script>
  const image_upload_handler_callback = (blobInfo, progress) => new Promise((resolve, reject) => {

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    xhr.open('POST', 'include/upload.php');

    xhr.upload.onprogress = (e) => {
      progress(e.loaded / e.total * 100);
    };

    xhr.onload = () => {
      if (xhr.status === 403) {
        reject({
          message: 'HTTP Error: ' + xhr.status,
          remove: true
        });
        return;
      }

      if (xhr.status < 200 || xhr.status >= 300) {
        reject('HTTP Error: ' + xhr.status);
        return;
      }

      const json = JSON.parse(xhr.responseText);

      if (!json || typeof json.location != 'string') {
        reject('Invalid JSON: ' + xhr.responseText);
        return;
      }

      resolve(json.location);
    };

    xhr.onerror = () => {
      reject('Image upload failed due to a XHR Transport error. Code: ' + xhr.status);
    };

    const formData = new FormData();
    formData.append('file', blobInfo.blob(), blobInfo.filename());

    xhr.send(formData);
  });

  tinymce.init({
    selector: '#mytextareaa',
    height: 500,
    remove_linebreaks: false,
    menubar: true,
    convert_newlines_to_brs: true,
    plugins: ' fullpage   autolink   visualblocks visualchars  image link media  codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount   						tinymcespellchecker a11ychecker imagetools mediaembed  linkchecker contextmenu colorpicker textpattern help preview code twitter_url',
    toolbar1: 'formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat | code | 							preview | twitter_url | image | styles |fontselect',
    images_upload_url: 'include/upload.php',
    valid_elements: '+*[*]',
    font_formats: "GothamHTF-Medium;Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans 								  MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol;Tahoma=tahoma,arial, 								  helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings;  									  Wingdings=wingdings,zapf dingbats",
    extended_valid_elements: "+iframe[width|height|name|align|class|frameborder|allowfullscreen|allow|src|*]," +
      "script[language|type|async|src|charset]" +
      "img[*]" +
      "embed[width|height|name|flashvars|src|bgcolor|align|play|loop|quality|allowscriptaccess|type|pluginspage]" +
      "blockquote[dir|style|cite|class|id|lang|onclick|ondblclick" +
      "|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout" +
      "|onmouseover|onmouseup|title]",

    content_css: ['css/main.css?' + new Date().getTime(),
      '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i'
    ],


    // without images_upload_url set, Upload tab won't show up
    images_upload_handler: function(blobInfo, success, failure) {
      var xhr, formData;

      xhr = new XMLHttpRequest();
      xhr.withCredentials = false;
      xhr.open('POST', 'include/insert.php?page=imageUploader');

      xhr.onload = function() {
        var json;

        if (xhr.status != 200) {
          failure('HTTP Error: ' + xhr.status);
          return;
        }

        console.log(xhr.response);
        //your validation with the responce goes here

        success(xhr.response);
      };

      formData = new FormData();
      formData.append('file', blobInfo.blob(), blobInfo.filename());

      xhr.send(formData);
    }

  })
</script>
<!-- delete modal -->
<!-- Modal -->
<div class="modal fade" id="deletemodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <form id="delete">
        <input type="hidden" name="id" id="del_page_id">
        <input type="hidden" id="delete_page" value="<?= $mypage ?>">
        <input type="hidden" id="reload" value="upcomoing-videos">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Delete !</h5>
          <!--<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>-->
        </div>
        <div class="modal-body">
          Are You Sure to Delete This ?
        </div>
        <div class="modal-footer">
          <button type="submit" class="btn btn-primary btn-sbmit">Yes</button>
          <button type="button" class="btn btn-secondary " data-dismiss="modal">Close</button>
        </div>
      </form>
    </div>
  </div>
</div>

<!-- News Modal -->
<div class="modal fade" id="deleteNewsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <form id="deleteNews">
        <input type="hidden" name="id" id="dell_page_id">
        <input type="hidden" id="deletel_page" value="<?= $mypage ?>">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Delete News !</h5>
          <!--<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>-->
        </div>
        <div class="modal-body">
          Are You Sure to Delete This ?
        </div>
        <div class="modal-footer">
          <button type="submit" class="btn btn-primary btn-sbmit">Yes</button>
          <button type="button" class="btn btn-secondary " data-dismiss="modal">Close</button>
        </div>
      </form>
    </div>
  </div>
</div>
<script>
  function del(id) {
    $("#del_page_id").val(id);
    $("#deletemodal").modal("show")
  }

  function delNews(id) {
    $("#dell_page_id").val(id);
    $("#deleteNewsModal").modal("show")
  }

  function dele(id) {
    $("#del_page_ids").val(id);
  }
  $(".tagging").select2({
    tags: true
  });
</script>
</body>

</html>