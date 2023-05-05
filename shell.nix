with import <nixpkgs> {};

stdenv.mkDerivation {
    name = "cdk-lib";
    buildInputs = [
        nodejs_18
    ];
    shellHook = ''
        export PATH="$PWD/node_modules/.bin/:$PATH"
    '';
}
