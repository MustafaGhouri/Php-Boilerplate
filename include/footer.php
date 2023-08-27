</div>
<footer>
    <div class='footer-overlay' style="background-image: url(<?= $url ?>assets/img/footerpetren.png);"></div>
    <div class='container'>
        <div class='row'>
            <div class='col-md-3 col-12'>
                <img class='footerLogo' src='<?= $url . 'uploads/setting/logotext.png' ?>'>
            </div>
            <div class='col-md-3 col-12'>
                <ul class='footer-list'>
                    <h4>Quick Links</h4>
                    <li class='footer-item'>
                        <a class='footer-links' href='<?= $url ?>'>Home</a>
                    </li>

                    <?php
                    $selectuniMenu = mysqli_query($con, "SELECT * FROM `university` ORDER BY `id` DESC LIMIT 4");
                    if (mysqli_num_rows($selectuniMenu) > 0) {
                        while ($fetchUniMenu = mysqli_fetch_array($selectuniMenu)) {
                    ?>
                            <li class='footer-item'>
                                <a class='footer-links' href='<?= $url . 'university/' . $fetchUniMenu['link'] ?>'><?= $fetchUniMenu['short_name'] ?></a>
                            </li>
                    <?php
                        }
                    }
                    ?>

                </ul>
            </div>
            <div class='col-md-3 col-12'>
                <ul class='footer-list'>
                    <h4>Social Links</h4>
                    <?php if (isset($settinginfo['ins_link'])) { ?>
                        <li class='footer-item'>
                            <a class='footer-links' href='<?= $settinginfo['ins_link'] ?>'>Instagram</a>
                        </li>
                    <?php }
                    if (isset($settinginfo['fb_link'])) { ?>
                        <li class='footer-item'>
                            <a class='footer-links' href='<?= $settinginfo['fb_link'] ?>'>Facebook</a>
                        </li>
                        </li>
                    <?php }
                    if (isset($settinginfo['twitter_link'])) { ?>
                        <li class='footer-item'>
                            <a class='footer-links' target='_blank' href='<?= $settinginfo['twitter_link'] ?>'>Twitter</a>
                        </li>
                    <?php }
                    if (isset($settinginfo['youtube_link'])) { ?>
                        <li class='footer-item'>
                            <a class='footer-links' target='_blank' href='<?= $settinginfo['youtube_link'] ?>'>Youtube</a>
                        </li>
                    <?php }
                    if (isset($settinginfo['pinterest_link'])) { ?>
                        <li class='footer-item'>
                            <a class='footer-links' target='_blank' href='<?= $settinginfo['pinterest_link'] ?>'>Pinterest</a>
                        </li>
                    <?php }
                    if (isset($settinginfo['linkedin_link'])) { ?>
                        <li class='footer-item'>
                            <a class='footer-links' target='_blank' href='<?= $settinginfo['linkedin_link'] ?>'>Linkedin</a>
                        </li>
                    <?php } ?>
                </ul>
            </div>
            <div class='col-md-3 col-12'>
                <ul class='footer-list'>
                    <h4>Contact Us</h4>
                    <li class='footer-item'>
                        <a class='footer-links' href='tel:<?= $settinginfo['website_phone'] ?>'><?= $settinginfo['website_phone'] ?></a>
                    </li>
                    <li class='footer-item'>
                        <a class='footer-links' href='mailto:<?= $settinginfo['website_email'] ?>'><?= $settinginfo['website_email'] ?></a>
                    </li>
                    <li class='footer-item'>
                        <a class='footer-links' href='<?= $settinginfo['website_address'] ?>'><?= $settinginfo['website_address'] ?></a>
                    </li>
                </ul>
            </div>
        </div>
        <div class='copyrights'>
            <h4 class=' '> &#169; 2023 GCS. All rights reserved </h4>
        </div>
    </div>

</footer>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js" integrity="sha512-pumBsjNRGGqkPzKHndZMaAG+bir374sORyzM3uulLV14lN5LyykqNk8eEeUlUkB3U0M4FApyaHraT65ihJhDpQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script type="module" src="<?= $url ?>assets/js/main.js"></script>
<script src="<?= $url ?>assets/js/snackbar.min.js"></script>
<script src="<?= $url ?>assets/js/customize.js"></script>

<script>
    AOS.init();
    $()
</script>
</body>

</html>
</body>

</html>