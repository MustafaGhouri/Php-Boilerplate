<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitf2db82fbc7a99b0be63940d53b53a08b
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitf2db82fbc7a99b0be63940d53b53a08b::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitf2db82fbc7a99b0be63940d53b53a08b::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitf2db82fbc7a99b0be63940d53b53a08b::$classMap;

        }, null, ClassLoader::class);
    }
}
