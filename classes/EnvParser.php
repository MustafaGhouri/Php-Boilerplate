<?php
class EnvParser {
    private $data = [];

    public function __construct($filePath) {
        $lines = file($filePath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        foreach ($lines as $line) {
            list($key, $value) = explode('=', $line, 2);
            $this->data[$key] = $value;
        }
    }

    public function get($key) {
        return $this->data[$key] ?? null;
    }
}

$envParser = new EnvParser('.env');
