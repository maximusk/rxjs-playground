(function (global) {
    System.config({
        paths: {
            'npm:': '/node_modules/'
        },

        map: {
            main: 'src',

            // other libraries
            'rxjs': 'npm:rxjs',
            'rxjs-spy': 'npm:rxjs-spy'
        },

        packages: {
            'src': {
                main: 'main',
                defaultExtension: 'js',
                meta: {
                    '': {
                        format: 'cjs'
                    }
                }
            },
            rxjs: {
                defaultExtension: 'js'
            },
            "rxjs-spy": {
                main: "index",
                defaultExtension: 'js'
            }
        }
    });
})(this);
